import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { compare } from "bcryptjs";
import { collectionObj, dbConnect } from "./dbConnect";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const userCollection = await dbConnect(collectionObj.userCollection);

        const user = await userCollection.findOne({ email: credentials.email });

        if (!user) {
          throw new Error("No user found with this email");
        }

        const isValid = await compare(credentials.password, user.password);
        if (!isValid) {
          throw new Error("Incorrect password");
        }

        return {
          id: user._id,
          name: user.name,
          email: user.email,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },

  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        const userCollection = await dbConnect(collectionObj.userCollection);

        // Check if user already exists in DB
        const existingUser = await userCollection.findOne({ email: user.email });

        if (!existingUser) {
          // Insert new user
          await userCollection.insertOne({
            name: user.name,
            email: user.email,
            image: user.image,
            createdAt: new Date(),
          });
        }

        return true; // Allow sign-in
      } catch (err) {
        console.error("Error in signIn callback:", err);
        return false; // Block sign-in on error
      }
    },
  },
  //   secret: process.env.NEXTAUTH_SECRET,
};
