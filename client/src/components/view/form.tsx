'use client'
import React, { useRef, FormEvent } from "react";


interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
    children?: React.ReactNode;
    onSend: (data: FormData) => Promise<void>;
}

export const Form: React.FC<Props> = (props) => {
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!formRef.current) return;

        const formData = new FormData(formRef.current);
        const data: Record<string, string> = {};

        for (const [key, value] of formData as any) {
            data[key] = value.toString();
        }

        if (formData) {
            try {
                await props.onSend(formData);
            } catch (error) {
                console.error("Error sending form data:", error);
            }
        }
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit} {...props}>
            {props.children}
        </form>
    );
};
