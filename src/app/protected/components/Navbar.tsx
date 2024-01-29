'use client'
import React , {useEffect, useState} from 'react'
import { IoMdLogOut } from "react-icons/io";
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export default function Navbar() {
    const [loggedOut, setLoggedOut] = useState(false);
    const router = useRouter();
    const handleSubmit = (e: any) => {
       e.preventDefault();
        setLoggedOut(true); 
        deleteCookie('token');
        deleteCookie('user');
    }

    useEffect(() => {
        if(loggedOut) {
            router.push('/');
        }
    }, [loggedOut, router]);

  return (
    <div className='mt-4 flex items-center lg:container container mx-auto'>
        <div className='flex'>
            <div className='bg-secondary w-[30px] h-[30px] rounded-full'></div>
            <div className='font-bold ml-2 text-2xl'> Ledafy </div>
        </div>
        <div className='ml-auto'>
            <button onClick={handleSubmit}  className='flex items-center font-bold  p-2 rounded-xl  '> <IoMdLogOut className='mr-2' size={30} color='DC4C64' />  Log Out</button>
        </div>
    </div>
  )
}
