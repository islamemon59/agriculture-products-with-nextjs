import { collectionObj, dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const productsCollection = dbConnect(collectionObj.productsCollection);
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
