import { font } from "@/utils/config"
import "../styles/globals.scss";
import "animate.css/animate.min.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { Toasting } from "@/components";


export const metadata = {
    title: 'Next.js',
    description: 'Generated by Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <html lang="en">
            <body suppressHydrationWarning={true} className={font.className}>
                {children}
                <Toasting />
                <ToastContainer position='top-right' className='text-sm font-medium' />
            </body>
        </html>
    )
}