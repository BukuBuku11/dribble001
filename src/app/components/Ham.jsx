"use client"
import React from 'react'
import Link from 'next/link'

const Ham = ({isOpen}) => {
  const visibility = isOpen ? '' : 'hidden';
  return (
    <div className={visibility}>
        <ul className="flex flex-col justify-between gap-4 z-10 absolute top-28 left-0 w-72 p-4 bg-zinc-100 border-t-2 md:hidden">
          <li><a href="#">Find designers</a></li>
          <li><a href="#">Inspiration</a></li>
          <li><a href="#">Courses</a></li>
          <li><Link href="/home">Jobs</Link></li>
          <li><a href="#">GoPro</a></li>
        </ul>
    </div>
  )
}

export default Ham
