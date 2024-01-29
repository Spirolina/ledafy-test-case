'use client'
import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import { getCookie, hasCookie } from 'cookies-next'
import {redirect} from 'next/navigation';

interface Props { 
    user: {
        fullName: string,
        email: string,
        id: string,
    },
    token: string
}

export default function Welcome() {


    
    if(!hasCookie('token')) {
        redirect('/');
    }

    if(!hasCookie('user')) { 
        redirect('/');
    }

    const userStr : any = getCookie('user');
    
    const token = getCookie('token');
    const user = JSON.parse(userStr);
  return (
    <div className='h-screen bg-primary flex flex-col px-4'>
        <Navbar />
        <div className='bg-secondary w-full  lg:w-1/2 mx-auto p-16 my-auto rounded-xl font-bold text-2xl text-white text-center shadow-2xl'> 
            Welcome {user.fullName}!
        </div>
       
    </div>
  )
}
