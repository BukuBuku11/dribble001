import React from 'react'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { options } from '../api/auth/[...nextauth]/options';

const Login = async() => {
  const session = await getServerSession(options);
  return (
    <div className='font-mono'>
      {session ? (<Link href="/api/auth/signout?callbackUrl=/">Logout</Link>) 
            : 
      (<Link href="/api/auth/signin">Login</Link>) }
      <Link href="/signup" className='bg-black text-white rounded-full p-4 hover:animate-pulse'>Signup</Link>
    </div>
  )
}

export default Login
