import { Svg, Text, Toasting } from '@/components'
import { URL } from '@/utils/config';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function Page() {

    async function submit(formData: FormData) {
        'use server'
        const data = {
            username: formData.get('username'),
            password: formData.get('password'),
        }

        await fetch(URL + '/login', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(async (response) => {
            const new_response = await response.json();
            cookies().set('toast', JSON.stringify(new_response.message))
            if (response.status === 200) {
                cookies().set({
                    name: 'user',
                    value: JSON.stringify(new_response)
                })
                cookies().set({
                    name: 'token',
                    value: JSON.stringify(new_response.token)
                })
                redirect('/dashboard')
            }
        })
    }


    return (
        <form action={submit} className="w-11/12 grid grid-cols-4 gap-2">
            <h2 className='col-span-3 text-start font-semibold text-lg py-5'>
                Enter your account information
            </h2>
            <Text
                name='username'
                title='username'
                type='text'
                className='col-span-4'
                icon={<Svg.userFilled className='w-full h-full stroke-black' />}
            />
            <Text
                name='password'
                title='password'
                type='password'
                className='col-span-4'
                icon={<Svg.lock className='w-full h-full stroke-black fill-none' />}
            />
            <button type='submit' className="row shadow-sx border border-purple_25 px-10 py-2 bg-purple_75 text-white font-semibold text-lg col-span-3 whitespace-nowrap rounded-md mt-5">
                <span className="button__text">Login</span>
                <Svg.chevronRight className='w-6 h-6 stroke-white fill-none' />
            </button>
            <Link href='/auth/sign-out' className="row gap-x-2 shadow-sx border border-purple_25 px-10 py-2 bg-white text-purple_75 font-semibold text-lg col-span-3 whitespace-nowrap rounded-md mt-2">
                <span className="button__text">Register</span>
                <Svg.registered className='w-6 h-6 stroke-purple_75 fill-none' />
            </Link>
        </form>
    )
}
