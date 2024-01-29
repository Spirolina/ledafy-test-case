import React, {useState, useEffect} from 'react'
import {redirect } from 'next/navigation';
import InputField from './InputField'
import { MdOutlineEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { InputType } from './InputField';
import SubmitButton from './SubmitButton';
import Divider from './Divider';
import GoogleSignup from './GoogleSignup';
import useSignup from '@/hooks/useSignup';
import FormLoading from './FormLoading';
import { setCookie } from 'cookies-next';

interface Props { 
  setForm: React.Dispatch<React.SetStateAction<string>>
}


export default function SignupSection({setForm}: Props) {
  const [email, setEmail] = useState('');
  const [fullName, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');
  const [signup, status, user, error] = useSignup();
 const [formErrors, setFormErrors] = useState<string[]>([]);

  
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // Check if any field is empty
    if(!email || !fullName || !password || !passwordConf) {
      setFormErrors(['Please fill all the fields.']);
      return;
    }

    // Check if email is valid
    if(!email.includes('@') || !email.includes('.') ){
      setFormErrors(['Please enter a valid email.']);
      return;
    }

    // Check if password and password confirmation match
    if(password !== passwordConf) {
      setFormErrors(['Password and password confirmation do not match.']);
      return;
    }

    await signup(email, fullName, password);
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
            Sign Up
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
      InputIcon={MdOutlineEmail} 
      type={InputType.email} />
      
      <InputField placeholder='Full Name' 
      value={fullName} 
      onChange={(e: any) => setFullname(e.target.value)} 
      InputIcon={FaRegUser} 
      type={InputType.text} />
      
      <InputField placeholder='Password' 
      value={password} 
      onChange={(e: any) => setPassword(e.target.value)} 
      InputIcon={RiLockPasswordLine} 
      type={InputType.password} />
      
      <InputField placeholder='Password Confirmation' 
      value={passwordConf} 
      onChange={(e: any) => setPasswordConf(e.target.value)} 
      InputIcon={RiLockPasswordLine} 
      type={InputType.password} />

      {
        status === 'pending' 
          ? <FormLoading /> 
          : <SubmitButton text='Sign up' onClick={handleSubmit} />
      }

      <Divider />
      <GoogleSignup />
          <div className='mt-8 text-center text-gray-400'>
              Already have an account? <span  onClick={() => setForm('login')} className='text-secondary hover:cursor-pointer' > Log In </span>
          </div>
      
    </form>
  )
}
