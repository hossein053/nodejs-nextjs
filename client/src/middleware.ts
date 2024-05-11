import { NextRequest, NextResponse } from 'next/server';

const auth = [
    '/auth'
];
export function middleware(request: NextRequest) {
    const url = request.nextUrl.pathname;
    const token = request.cookies.get('token')

    if (token) {
        if (auth.find(path => url.includes(path))) {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }
        if (url === '/') {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }
    }

    if (!token && !auth.find(path => url.includes(path))) {
        return NextResponse.redirect(new URL('/auth/sign-in', request.url))
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
