import { ReactNode } from "react";

export interface TextProps {
    className?: string;
    type?: string;
    name: string;
    title: string;
    defaultValue?: any;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string | number;
    icon?: ReactNode
}

export interface TextareaProps {
    className?: string;
    name: string;
    title: string;
    defaultValue?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    value?: string | number;
    icon?: ReactNode
}

export interface ImageUploaderProps {
    className: string;
    name?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}