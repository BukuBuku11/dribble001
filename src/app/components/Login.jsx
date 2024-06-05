"use client"
import React from 'react'
import Link from 'next/link'
import { useGoogleLogin } from '@react-oauth/google';

const Login = () => {
  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
  });
  return (
    <div>
      <ul className='flex gap-4 text-sm font-sans font-semibold'>
        <li className='hidden md:block hover:animate-pulse'><Link href="" onClick={login}>Login</Link></li>
        <li><Link href="/signup" className='bg-black text-white rounded-full p-4 hover:animate-pulse'>Signup</Link></li>
      </ul>
    </div>
  )
}

export default Login
