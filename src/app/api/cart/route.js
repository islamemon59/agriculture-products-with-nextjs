import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { collectionObj, dbConnect } from "@/lib/dbConnect";

export async function GET(req) {
  try {
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email;

    if (!userEmail) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const cartDataCollection = await dbConnect(
      collectionObj.cartDataCollection
    );
    const cart = await cartDataCollection.find({ email: userEmail }).toArray();
    console.log(cart);

    console.log("cart email", cart.email);
    console.log("user email", userEmail);
    const filteredCart = cart.filter((item) => item.email === userEmail);

    return NextResponse.json(filteredCart, { status: 200 });
  } catch (error) {
    console.error("GET /api/cart error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
