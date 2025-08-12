import { collectionObj, dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.formData(); // SSLCommerz sends as form-data
    console.log(body);
    const val_id = body.get("val_id");
    const tran_id = body.get("tran_id");

    if (!val_id) {
      return NextResponse.json({ message: "Missing val_id" }, { status: 400 });
    }

    const store_id = "zapsh6887817ece951";
    const store_passwd = "zapsh6887817ece951@ssl";

    const validateUrl = `https://sandbox.sslcommerz.com/validator/api/validationserverAPI.php?val_id=${val_id}&store_id=${store_id}&store_passwd=${store_passwd}&v=1&format=json`;

    const res = await fetch(validateUrl);
    const result = await res.json();

    const paymentsDataCollection = await dbConnect(
      collectionObj.paymentCollection
    );
    console.log(result.status);

    if (result.status === "VALID" || result.status === "VALIDATED") {
      await paymentsDataCollection.updateOne(
        { transactionId: tran_id },
        { $set: { status: "paid", validatedAt: new Date() } }
      );
      return NextResponse.redirect(new URL("/", "http://localhost:3000/"));
    } else {
      return NextResponse.redirect("http://localhost:3000/payment-fail");
    }
  } catch (error) {
    console.error("Validation error:", error);
    return NextResponse.json(
      { error: "Payment validation failed" },
      { status: 500 }
    );
  }
}
