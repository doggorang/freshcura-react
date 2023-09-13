import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/Home' || request.nextUrl.pathname === '/home') {
    return NextResponse.redirect(`${request.nextUrl.origin}`);
  } else if (request.nextUrl.pathname === request.nextUrl.pathname.toLocaleLowerCase()){
    return NextResponse.next();
  }
  return NextResponse.redirect(`${request.nextUrl.origin}${request.nextUrl.pathname.toLocaleLowerCase()}${request.nextUrl.search}`);
}
