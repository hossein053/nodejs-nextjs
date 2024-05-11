'use client';

import { Svg } from '../svg';
import Link from 'next/link';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export function Sidebar() {
    const { push } = useRouter()

    const logout = () => {
        deleteCookie('user');
        deleteCookie('token');
        push('/auth/sign-in')
    }

    return (
        <aside className="w-[80px] bg-white rounded-md shadow-xs relative">
            <nav className='flex flex-col justify-between items-center h-full'>
                <ul className='py-5 inline-block'>
                    <li className='row my-5 cursor-pointer' title='Dashboard'>
                        <Link href='/dashboard'>
                            <Svg.dashboard className='w-9 h-9' />
                        </Link>
                    </li>
                    <li className='row my-5 cursor-pointer' title='Add Post'>
                        <Link href='/dashboard/add-post'>
                            <Svg.add className='w-10 h-10' />
                        </Link>
                    </li>
                    <li className='row my-5 cursor-pointer' title='List Post'>
                        <Link href='/dashboard/list-post'>
                            <Svg.list className='w-10 h-10' />
                        </Link>
                    </li>
                </ul>
                <ul className='py-5 inline-block'>
                    <li className='row my-5 cursor-pointer' title='Setting'>
                        <Svg.setting className='w-10 h-10' />
                    </li>
                    <li className='row my-5 cursor-pointer' title='Log Out' onClick={logout}>
                        <Svg.exit className='w-10 h-10' />
                    </li>
                </ul>
            </nav>
        </aside>
    );
}



