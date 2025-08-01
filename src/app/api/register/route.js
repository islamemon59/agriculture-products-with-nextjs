import { hash } from "bcryptjs";
import { collectionObj, dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return NextResponse(JSON.stringify({ message: "Missing fields" }), {
      status: 400,
    });
  }

  const userCollection = dbConnect(collectionObj.userCollection);
  const existingUser = await userCollection.findOne({ email });

  if (existingUser) {
    return NextResponse(JSON.stringify({ message: "User already exists" }), {
      status: 400,
    });
  }

  const hashedPassword = await hash(password, 12);

  await db.collection("users").insertOne({
    name,
    email,
    password: hashedPassword,
  });

  return NextResponse(
    JSON.stringify({ message: "User registered successfully" }),
    { status: 201 }
  );
}
