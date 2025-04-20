import createMiddleware from "next-intl/middleware";

import { NextResponse } from "next/server";
import { decrypt } from "@/app/_lib/session";
import { cookies } from "next/headers";
import { routing } from "./i18n/routing";
import { getLocale } from "next-intl/server";

const intlMiddleware = createMiddleware(routing);

// 1. Specify protected and public routes
const protectedRoutes = "dashboard";
const publicRoutes = ["/login", "/signup", "/"];

async function authenticated(req) {
  // 2. Check if the current route is protected or public

  const path = req.nextUrl.pathname;
  const isProtectedRoute = path.includes(protectedRoutes);
  const isPublicRoute = publicRoutes.includes(path);

  // 3. Decrypt the session from the cookie
  const local = await getLocale();

  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  // 5. Redirect to /login if the user is not authenticated
  console.log(session);
  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // 6. Redirect to /dashboard if the user is authenticated
  console.log(req);
  if (
    isPublicRoute &&
    session?.userId &&
    !req.nextUrl.pathname.includes(`dashboard`)
  ) {
    return NextResponse.redirect(
      new URL(`/${local}/dashboard/home`, req.nextUrl)
    );
  }

  return NextResponse.next();
}

export default async function middleware(req) {
  const intlResponse = intlMiddleware(req);

  if (intlResponse?.ok) {
    return intlResponse;
  }
  return authenticated(req);
}

// Routes Middleware should not run on
export const config = {
  matcher: [
    "/",
    "/(en|ar)/:path*",
    // "/dashboard/:path*",
    // "/((?!api|_next/static|_next/image|.*\\.png$).*)",
  ],
};
