"use client";
import React, { useState } from 'react'
import LogoSection from './LogoSection'
import SignupSection from './SignupSection'
import LoginSection from './LoginSection'



export default function LeftPart() {
  const [form, setForm] = useState('signup');
  return (
    <div className='h-screen w-100 lg:w-2/5 shadow-2xl z-20'>
      <div className='container mx-auto px-8'>
      <LogoSection />
      {form === 'signup' ? <SignupSection setForm={setForm}/> : <LoginSection setForm={setForm} />}
      </div>

    </div>
  )
}

