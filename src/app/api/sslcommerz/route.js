import { collectionObj, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import querystring from "querystring";

export async function POST(req) {
  try {
    const paymentData = await req.json();
    console.log("payment data",paymentData);
    const trxid = new ObjectId().toString();
    console.log(trxid);
    paymentData.transactionId = trxid;

    const initiate = {
      store_id: "zapsh6887817ece951",
      store_passwd: "zapsh6887817ece951@ssl",
      total_amount: paymentData?.price,
      currency: "BDT",
      tran_id: trxid,
      success_url: "http://localhost:3000/api/successfullypayment",
      fail_url: "http://localhost:3000/fail",
      cancel_url: "http://localhost:3000/cancle",
      ipn_url: "http://localhost:3000/api/ipn-success-payment",
      shipping_method: "Courier",
      product_name: "Computer.",
      product_category: "Electronic",
      product_profile: "general",
      cus_name: "Customer Name",
      cus_email: paymentData.email,
      cus_add1: "Dhaka",
      cus_add2: "Dhaka",
      cus_city: "Dhaka",
      cus_state: "Dhaka",
      cus_postcode: "1000",
      cus_country: "Bangladesh",
      cus_phone: "01711111111",
      cus_fax: "01711111111",
      ship_name: "Customer Name",
      ship_add1: "Dhaka",
      ship_add2: "Dhaka",
      ship_city: "Dhaka",
      ship_state: "Dhaka",
      ship_postcode: 1000,
      ship_country: "Bangladesh",
    };

    // Convert data to x-www-form-urlencoded
    const formData = querystring.stringify(initiate);

    const res = await fetch(
      "https://sandbox.sslcommerz.com/gwprocess/v4/api.php",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData,
      }
    );

    const data = await res.json();


    // Save payment in DB
    const paymentsDataCollection = await dbConnect(collectionObj.paymentCollection);
    await paymentsDataCollection.insertOne(paymentData);

    return NextResponse.json({ gatewayUrl: data?.GatewayPageURL });
  } catch (error) {
    console.error("Error creating payment:", error);
    return NextResponse.json(
      { error: "Payment initiation failed" },
      { status: 500 }
    );
  }
}
