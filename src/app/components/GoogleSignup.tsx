"use client";

import { GoogleLogin } from '@react-oauth/google';
import jwt from 'jsonwebtoken';
import { setCookie } from 'cookies-next';
import React, { useEffect } from 'react'
import { RedirectType, redirect } from 'next/navigation';

export default function GoogleSignup() {
const [loggedIn, setLoggedIn] = React.useState(false);

useEffect(() => {
  if(loggedIn) {
    redirect('/protected', RedirectType.replace);
  }
},[loggedIn]);

  return (
    <div className='flex justify-center mt-2'>
        <GoogleLogin
        useOneTap
          onSuccess={async (credantialResponse) => {
            const token:any = credantialResponse.credential;
            const secret: any= process.env.GOOGLE_CLIENT_SECRET;
            
            const decodedToken = jwt.decode(token, secret);
            const { email, name, sub }:any = decodedToken;
            
            const user = { email, fullName: name, id: sub };

            setCookie('token', credantialResponse.credential);
            setCookie('user', JSON.stringify(user));
            setLoggedIn(true);
            
          }}
          onError={() => {console.log('error')}}
        />
    </div>
  )
}
