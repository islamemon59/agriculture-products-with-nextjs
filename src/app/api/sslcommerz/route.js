import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import SSLCommerzPayment from "sslcommerz-lts";

const store_id = process.env.SSLCOMMERZ_STORE_ID;
const store_passwd = process.env.SSLCOMMERZ_STORE_PASSWORD;
const is_live = false; // true for live, false for sandbox

export async function POST(req) {
  const payment = await req.json();

  const tran_id = new ObjectId().toString()
  payment.transactionId = tran_id;

  const paymentData = {
    total_amount: payment.price,
    currency: "BDT",
    tran_id: tran_id,
    success_url: "http://localhost:3000/payment/success",
    fail_url: "http://localhost:3000/payment/fail",
    cancel_url: "http://localhost:3000/payment/cancel",
    ipn_url: "http://localhost:3000/payment/ipn",
    shipping_method: "Courier",
    product_name: "Test Product",
    product_category: "General",
    product_profile: "general",
    cus_name: "Customer",
    cus_email: payment.email,
    cus_add1: "Dhaka",
    cus_city: "Dhaka",
    cus_country: "Bangladesh",
    cus_phone: "**********",
  };

  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);

  try {
    const apiResponse = await sslcz.init(payment);
    console.log(apiResponse);
    return  NextResponse.json({ GatewayPageURL: apiResponse.GatewayPageURL });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
