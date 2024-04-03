'use client';

import Link from 'next/link'
import React from 'react'
import { Svg } from '@/components'

export const Header = () => {

    return (
        <header className='row-between container py-3'>
            <nav className='w-1/2'>
                <ul className='flex items-center gap-x-10'>
                    <li className='text-center hover:bg-blue-100 text-sm font-semibold rounded-md px-4 py-1'>
                        <Link href='/'>
                            Home
                        </Link>
                    </li>
                    <li className='text-center hover:bg-blue-100 text-sm font-semibold rounded-md px-4 py-1'>
                        <Link href='/products'>
                            List Product
                        </Link>
                    </li>
                    <li className='text-center hover:bg-blue-100 text-sm font-semibold rounded-md px-4 py-1'>
                        <Link href='/add-product'>
                            Add Product
                        </Link>
                    </li>
                    <li className='text-center hover:bg-blue-100 text-sm font-semibold rounded-md px-4 py-1'>
                        <Link href='/'>
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
            <button className='bg-blue-500 text-white rounded-lg px-7 py-1 row gap-x-1'>
                <span className='text-sm font-semibold'>Login</span>
                <Svg.user className='w-6 h-6 stroke-white' />
            </button>
        </header>
    )
}
