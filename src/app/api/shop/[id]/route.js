import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { ObjectId } from "mongodb";
import { collectionObj, dbConnect } from "@/lib/dbConnect";

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
    console.log(id);

    if (!id) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const cartDataCollection = await dbConnect(collectionObj.cartDataCollection);

    // Check if the item exists and belongs to this user
    const item = await cartDataCollection.findOne({
      product_id: id,
    });

    if (!item) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    if (item.email !== userEmail) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    await cartDataCollection.deleteOne({ product_id: id });

    return NextResponse.json(
      { message: "Item deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE /api/shop error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
