import { NextRequest, NextResponse } from "next/server";

const locales = ["es", "en"];
const defaultLocale = "es";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip if already has a locale prefix
  if (locales.some((loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`))) {
    return NextResponse.next();
  }

  // Skip static files and Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Check cookie for saved locale preference
  const savedLocale = request.cookies.get("locale")?.value;
  const locale = locales.includes(savedLocale ?? "") ? savedLocale! : defaultLocale;

  // Redirect / → /es or /en
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
