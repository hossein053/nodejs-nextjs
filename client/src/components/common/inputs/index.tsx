'use client'
import { ImageUploaderProps, TextProps, TextareaProps } from "@/types";
import Image from "next/image";
import { ReactNode } from "react";
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

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


export const Textarea: React.FC<TextareaProps> = ({ className, name, title, defaultValue, onChange, value, icon }) => {
    return (
        <div className={'inputs ' + className}>
            <textarea
                placeholder={title}
                name={name}
                id={name}
                className='peer'
                defaultValue={defaultValue}
                onChange={onChange}
                rows={4}
                value={value}
            />
            <label htmlFor={name} className='lable-peer'>
                {icon && <span className="icon">{icon}</span>}
                <span>{title}</span>
            </label>
        </div>
    );
};


export const ImageUploader: React.FC<ImageUploaderProps> = ({ className, name, onChange }) => {
    const [image, setImage] = useState<string | null>(null);

    const onDrop = (acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.onload = () => {
            if (typeof reader.result === 'string') {
                setImage(reader.result);
            }
        };
        reader.readAsDataURL(file);
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div className={className}>
            <div {...getRootProps()} className="bg-white outline-none border-b-2 border-b-purple_55 rounded-lg p-2.5 row h-[150px] cursor-pointer">
                <input name={name} onChange={onChange} {...getInputProps()} />
                {!image && <p>Drag or click the photo here to select.</p>}
                {image && <Image
                    src={image}
                    alt=""
                    width={1000}
                    height={0}
                    className="w-full h-full object-contain"
                />}
            </div>
        </div>
    );

}