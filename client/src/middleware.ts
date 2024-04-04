import { NextRequest, NextResponse } from 'next/server';

const auth = [
    '/auth'
];
export function middleware(request: NextRequest) {
    const url = request.nextUrl.pathname;
    const user = request.cookies.get('user')

    if (user && auth.find(path => url.includes(path))) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    
    if (!user && !auth.find(path => url.includes(path))) {
        return NextResponse.redirect(new URL('/auth/sign-in', request.url))
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
