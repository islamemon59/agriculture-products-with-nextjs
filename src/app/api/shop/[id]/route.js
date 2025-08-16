import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { ObjectId } from "mongodb";
import { collectionObj, dbConnect } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function GET(req, { params }) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userCollection = await dbConnect(collectionObj.userCollection);

  const user = await userCollection.findOne({ email: session.user.email });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 403 });
  }

  const productsCollection = await dbConnect(collectionObj.productsCollection);

  const { id } = await params;

  const product = await productsCollection.findOne({ _id: new ObjectId(id) });

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  return NextResponse.json(product, { status: 200 });
}

export async function DELETE(req, { params }) {
  try {
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email;

    if (!userEmail) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    if (!id) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const cartDataCollection = await dbConnect(
      collectionObj.cartDataCollection
    );

    // Step 1: Find the cart item to get product_id and quantity
    const cartItem = await cartDataCollection.findOne({
      _id: new ObjectId(id),
      email: userEmail,
    });

    if (!cartItem) {
      return NextResponse.json(
        { error: "Item not found or not authorized" },
        { status: 404 }
      );
    }

    // Step 2: Delete the cart item
    const result = await cartDataCollection.deleteOne({
      _id: new ObjectId(id),
      email: userEmail,
    });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: "Failed to delete item" },
        { status: 500 }
      );
    }
    revalidatePath("/")
    return NextResponse.json({ message: "Item deleted" }, { status: 200 });
  } catch (error) {
    console.error("DELETE /api/cart/[id] error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
