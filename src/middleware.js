// middleware.js
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // ✅ Protect shop and dynamic shop routes
  if (pathname.startsWith("/shop")) {
    if (!token) {
      // if not logged in → redirect to login
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

// ✅ Apply middleware only on shop routes
export const config = {
  matcher: ["/shop", "/shop/:path*"],
};
