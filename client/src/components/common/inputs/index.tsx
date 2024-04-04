'use client'
import { ReactNode } from "react";
interface TextProps {
    className?: string;
    type?: string;
    name: string;
    title: string;
    defaultValue?: any;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string | number;
    icon?: ReactNode
}

export const Text: React.FC<TextProps> = ({ className, type, name, title, defaultValue, onChange, value, icon }) => {
    return (
        <div className={'inputs ' + className}>
            <input
                onChange={onChange}
                placeholder={title}
                defaultValue={defaultValue}
                id={name}
                dir='rtl'
                type={type || "text"}
                className='peer'
                name={name}
                autoComplete="off"
                readOnly
                value={value}
                onClick={(e: any) => { e.target.readOnly = false }}
            />
            <label htmlFor={name} className='lable-peer'>
                {icon && <span className="icon">{icon}</span>}
                <span>{title}</span>
            </label>
        </div>
    )
}

interface TextareaProps {
    className?: string;
    name: string;
    title: string;
    defaultValue?: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    value?: string | number
}

export const Textarea: React.FC<TextareaProps> = ({ className, name, title, defaultValue, onChange, value }) => {
    return (
        <div className={'inputs ' + className}>
            <textarea
                placeholder={title}
                name={name}
                id={name}
                className='peer'
                defaultValue={defaultValue}
                onChange={onChange}
                rows={5}
                value={value}
            />
            <label htmlFor={name} className='lable-peer'>
                {title}
            </label>
        </div>
    );
};