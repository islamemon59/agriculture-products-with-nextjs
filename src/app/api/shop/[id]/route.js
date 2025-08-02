import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { collectionObj, dbConnect } from "@/lib/dbConnect";
import { authOptions } from "@/lib/authOptions";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userCollection = dbConnect(collectionObj.userCollection);

  const user = await userCollection.findOne({ email: session.user.email });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 403 });
  }

  const productsCollection = dbConnect(collectionObj.productsCollection);

  const { id } = await params;

  const product = await productsCollection.findOne({ _id: new ObjectId(id) });

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product, { status: 200 });
}



