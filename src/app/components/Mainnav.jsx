"use client"
import React from 'react'
import Link from 'next/link'

const Mainnav = () => {
  return (
    <div className='hidden md:block'>
        <ul className="flex justify-between gap-4 pl-4 z-10 lg:gap-8">
          <li><a href="#">Find designers</a></li>
          <li><a href="#">Inspiration</a></li>
          <li><a href="#">Courses</a></li>
          <li><Link href="/home">Jobs</Link></li>
          <li><a href="#">GoPro</a></li>
        </ul>
    </div>
  )
}

export default Mainnav
