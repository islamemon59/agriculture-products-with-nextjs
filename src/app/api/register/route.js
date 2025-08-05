import { hash } from "bcryptjs";
import { collectionObj, dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, email, password } = await req.json();
  if (!name || !email || !password) {
    return NextResponse.json(
      { message: "Missing fields" },
      {
        status: 400,
      }
    );
  }

  const userCollection = await dbConnect(collectionObj.userCollection);
  const existingUser = await userCollection.findOne({ email });

  if (existingUser) {
    return NextResponse.json(
      { message: "User already exists" },
      {
        status: 400,
      }
    );
  }

  const hashedPassword = await hash(password, 12);

  await userCollection.insertOne({
    name,
    email,
    password: hashedPassword,
  });

  return NextResponse.json(
    { message: "User registered successfully" },
    { status: 201 }
  );
}
