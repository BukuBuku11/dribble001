"use client"
import React from 'react'
import Link from 'next/link'

const Login = () => {
  return (
    <div>
      <ul className='flex gap-4 text-sm font-sans font-semibold'>
        <li className='hidden md:block hover:animate-pulse'><Link href="">Login</Link></li>
        <li><Link href="" className='bg-black text-white rounded-full p-4 hover:animate-pulse'>Signup</Link></li>
      </ul>
    </div>
  )
}

export default Login
