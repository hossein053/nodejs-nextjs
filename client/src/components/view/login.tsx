'use client'

import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { Inputs, Svg } from '@/components';
import { URL } from '@/utils/config';

export const Login = ({ setShow }: { setShow: (value: boolean) => void }) => {

    const handler = () => setShow(false)

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await fetch(`${URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            }).then(response => {
                if (response.status === 200) {
                    console.log(response)
                    toast.success('Your Welcome', { theme: 'dark' })
                }
            });
        } catch (error) {
            toast.error('Server error', { theme: 'dark' })
        }
    };

    return (
        <div className="z-[1] h-full relative p-7 pt-12">
            <form className="w-10/12 grid grid-cols-4 gap-2" onSubmit={handleSubmit}>
                <h2 className='col-span-3 text-start font-semibold text-lg py-5'>
                    Enter your account information
                </h2>
                <Inputs.Text
                    name='username'
                    title='username'
                    type='text'
                    className='col-span-4'
                    onChange={handleChange}
                    icon={<Svg.userFilled className='w-full h-full stroke-black' />}
                />
                <Inputs.Text
                    name='password'
                    title='password'
                    type='password'
                    className='col-span-4'
                    onChange={handleChange}
                    icon={<Svg.lock className='w-full h-full stroke-black fill-none' />}
                />
                <button type='submit' className="row shadow-sx border border-purple_25 px-10 py-2 bg-purple_75 text-white font-semibold text-lg col-span-3 whitespace-nowrap rounded-md mt-5">
                    <span className="button__text">Login</span>
                    <Svg.chevronRight className='w-6 h-6 stroke-white fill-none' />
                </button>
                <button onClick={handler} type='button' className="row gap-x-2 shadow-sx border border-purple_25 px-10 py-2 bg-white text-purple_75 font-semibold text-lg col-span-3 whitespace-nowrap rounded-md mt-2">
                    <span className="button__text">Register</span>
                    <Svg.registered className='w-6 h-6 stroke-purple_75 fill-none' />
                </button>
            </form>
        </div>
    )
}
