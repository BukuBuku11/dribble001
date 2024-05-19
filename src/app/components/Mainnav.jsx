"use client"
import React from 'react'
import Link from 'next/link'

const Mainnav = () => {
  return (
    <div className='hidden md:block font-sans font-semibold'>
        <ul className="flex justify-between gap-4 pl-4 z-10 lg:gap-8">
          <li ><a href="#" className='hover:opacity-65'>Find designers</a></li>
          <li className='hover:opacity-65'><a href="#" >Inspiration</a></li>
          <li ><a href="#" className='hover:opacity-65'>Courses </a></li>
          <li className='hover:opacity-65'><Link href="/home">Jobs</Link></li>
          <li className='hover:opacity-65'><a href="#">GoPro</a></li>
        </ul>
    </div>
  )
}

export default Mainnav
