'use client'

import { deleteCookie, getCookie } from "cookies-next"
import { useEffect } from "react";
import { cssTransition, toast } from "react-toastify";

export const Toasting = () => {
    const bounce = cssTransition({
        enter: "animate__animated animate__bounceIn",
        exit: "animate__animated animate__bounceOut"
    });
    const storedMessage = getCookie('toast');
    useEffect(() => {
        if (storedMessage) {
            toast(JSON.parse(storedMessage), {
                theme:'dark',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition: bounce
            });
            deleteCookie('toast');
        }
    }, [storedMessage]);



    return null;
}
