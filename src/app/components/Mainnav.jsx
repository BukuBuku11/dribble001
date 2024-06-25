"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Hamburger } from '../svgs'

const Mainnav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className='font-sans font-semibold'>
      <button onClick={handleClick}
      className={`md:hidden transition-all duration-300 ease-out 
      ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}
      >
        <Hamburger/>
      </button>
        <ul className="hidden md:flex justify-between gap-4 pl-4 z-10 lg:gap-8">
          <li ><a href="/search-up" className='hover:opacity-65'>Find designers</a></li>
          <li className='hover:opacity-65'><a href="/search-up" >Inspiration</a></li>
          <li ><a href="/search-up" className='hover:opacity-65'>Courses </a></li>
          <li className='hover:opacity-65'><Link href="/search-up">Jobs</Link></li>
          <li className='hover:opacity-65'><a href="/search-up">GoPro</a></li>
        </ul>
        <ul className={`flex md:hidden z-50 flex-col w-[100%] border-t-2 bg-[#f8f7f4] py-4 pl-8 gap-4 fixed top-[6rem] shadow-inner transition-transform duration-500 ease-in-out left-0 ${isOpen ? '-translate-x-0' : '-translate-x-full'}`}>
          <li ><a href="#" className='hover:opacity-65'>Find designers</a></li>
          <li className='hover:opacity-65'><a href="#" >Inspiration</a></li>
          <li ><a href="#" className='hover:opacity-65'>Courses </a></li>
          <li className='hover:opacity-65'><Link href="">Jobs</Link></li>
          <li className='hover:opacity-65'><a href="#">GoPro</a></li>
        </ul>
    </div>
  )
}

export default Mainnav
