/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'
import InputField from './InputField'
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { InputType } from './InputField';
import SubmitButton from './SubmitButton';
import Divider from './Divider';
import GoogleSignup from './GoogleSignup';
import useLogin from '@/hooks/useLogin';
import FormLoading from './FormLoading';
import {redirect } from 'next/navigation';
import { setCookie } from 'cookies-next';

interface Props { 
  setForm: React.Dispatch<React.SetStateAction<string>>
}

export default function LoginSection({setForm}: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, status, user, error] = useLogin()
  const [formErrors, setFormErrors] = useState<string[]>([]);

  const handleSubmit = async (e: any) => { 
    e.preventDefault();
    setFormErrors([]);
    // Check if any field is empty
    if(!email || !password) {
      setFormErrors(['Please fill all the fields.']);
      return;
    }

    // Check if email is valid
    if(!email.includes('@') || !email.includes('.') ){
      setFormErrors(['Please enter a valid email.']);
      return;
    }
    await login(email, password);
  }

  useEffect(() => {
    // If user is logged in redirect to protected page
    if(status === 'resolved'){
      setCookie('token', 'ledafy');
      setCookie('user', JSON.stringify(user));
      redirect('/protected');
    }
  },[status, user])

  return (
    <form className='flex-col'>
        <div className='font-semibold text-2xl mt-16 mb-8'>
            Log in 
        </div>

  {/* If any form validation error exist display them here  */}
        {formErrors.length > 0 && (
          <div className='text-red-500 mb-4'>
            {formErrors.map((error, index) => (
              <div key={index}>{error}</div>
            ))}
          </div>
        )}
  
  
        {/* If any response error exist display here */
          error && 
            <div className='text-red-500 mb-4'>
              {error}
            </div>
            }

      <InputField placeholder='Email' 
      value={email} 
      onChange={(e: any) => setEmail(e.target.value)} 
      InputIcon={MdOutlineEmail} type={InputType.email} />
      
      <InputField placeholder='Password' 
      value={password} onChange={(e: any) => setPassword(e.target.value)} 
      InputIcon={RiLockPasswordLine} 
      type={InputType.password} />

  {/* Display Loading icon or submit button depends on request status */}    
    
    {
      status === 'pending' 
        ? <FormLoading />
        : <SubmitButton text='Log in' onClick={handleSubmit} />
        }
      
    <Divider />

    <GoogleSignup />
      
    <div className='mt-8 text-center text-gray-400'>
          Don't have an account? <span onClick={() => setForm('signup')} className='text-secondary hover:cursor-pointer' > Sign Up </span>
    </div>
      
    </form>
  )
}
