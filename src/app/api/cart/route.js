import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { collectionObj, dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email;
    console.log("User Email:", userEmail);

    if (!userEmail) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const cartDataCollection = dbConnect(collectionObj.cartDataCollection);
    const cart = await cartDataCollection.find({ email: userEmail }).toArray();

    if (!cart.length) {
      return NextResponse.json(
        { error: "No cart items found" },
        { status: 404 }
      );
    }

    return NextResponse.json(cart, { status: 200 });
  } catch (error) {
    console.error("GET /api/cart error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
