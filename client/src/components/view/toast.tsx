'use client'

import { deleteCookie, getCookie } from "cookies-next"
import { useEffect, useMemo, useState } from "react";
import { cssTransition, toast } from "react-toastify";

export const Toasting = () => {
    const storedMessage = getCookie('toast');
    const [data, setData] = useState<string[] | string>();
    
    const bounce = cssTransition({
        enter: "animate__animated animate__bounceIn",
        exit: "animate__animated animate__bounceOut"
    });

    useMemo(() => {
        if (storedMessage) {
            setData(JSON.parse(storedMessage))
        }
    }, [setData, storedMessage])

    useEffect(() => {

        if (Array.isArray(data)) {
            data.forEach((message: string) => {
                toast(message, {
                    theme: 'dark',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    transition: bounce
                });
            });
        } else {
            toast(data, {
                theme: 'dark',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition: bounce
            })
        }
        deleteCookie('toast');
    }, [data]);

    return null;
}
