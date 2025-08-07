import { authOptions } from "@/lib/authOptions";
import { collectionObj, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const productsCollection = await dbConnect(
      collectionObj.productsCollection
    );
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

  const email = session.user.email;
  const cartData = await req.json();
  const { product_id, product_quantity } = cartData;

  if (!product_id || !product_quantity) {
    return NextResponse.json(
      { error: "Missing product ID or quantity" },
      { status: 400 }
    );
  }

  try {
    // Connect to cart and product collections
    const cartDataCollection = await dbConnect(
      collectionObj.cartDataCollection
    );
    const productsCollection = await dbConnect(
      collectionObj.productsCollection
    );

    // Step 1: Get the product from products collection
    const product = await productsCollection.findOne({
      _id: new ObjectId(product_id),
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    // Step 2: Check stock availability
    if (product.stock < product_quantity) {
      return NextResponse.json(
        { error: "Not enough stock available" },
        { status: 400 }
      );
    }

    // Step 3: Add product to cart
    cartData.email = email;
    cartData.addedAt = new Date();
    const result = await cartDataCollection.insertOne(cartData);

    return NextResponse.json(
      { insertedId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/cart error:", error);
    return NextResponse.json({ error: "DB Error" }, { status: 500 });
  }
}
