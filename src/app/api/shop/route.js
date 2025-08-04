import { authOptions } from "@/lib/authOptions";
import { collectionObj, dbConnect } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const productsCollection = await dbConnect(collectionObj.productsCollection);
    const products = await productsCollection
      .find()
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(products);
  } catch (error) {
    console.error("Fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const email = session?.user?.email;
  const cartData = await req.json();
  const { product_id } = cartData;

  if (!product_id) {
    return NextResponse.json({ error: "Missing product ID" }, { status: 400 });
  }

  try {
    const cartDataCollection = await dbConnect(collectionObj.cartDataCollection);

    cartData.email = email;
    cartData.addedAt = new Date();

    const result = await cartDataCollection.insertOne(cartData);

    return NextResponse.json({ insertedId: result.insertedId });
  } catch (error) {
    return NextResponse.json({ error: "DB Error" }, { status: 500 });
  }
}
