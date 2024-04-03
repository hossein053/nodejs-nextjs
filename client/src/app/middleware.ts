import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl.pathname;
    const user = request.cookies.get('your_cookie_name')?.value;
    if (user) {
        if (url === '/login') {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }
    } else {
        if (!user && url !== '/login') {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    return NextResponse.next();
}
