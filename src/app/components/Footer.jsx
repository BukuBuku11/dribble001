import React from 'react'
import { DribbleLogo } from '../svgs'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center md'>
      <DribbleLogo className='size-24'/>
      <div className='sm:flex flex-row md:gap-8'>
      <ul className='flex gap-3 text-sm justify-center pb-3 font-bold lg:gap-12'>
        <li><a href='#'>For designers</a></li>
        <li><a href='#'>Hire talent</a></li>
        <li><a href='#'>Inspiration</a></li>
      </ul>
      <ul className='flex gap-3 text-sm justify-center pb-3 font-bold lg:gap-12'>
        <li><a href='#'>Advertising</a></li>
        <li><a href='#'>Blog</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Careers</a></li>
      </ul>
      <div className='flex justify-center text-sm font-bold'>
        <a>Support</a>
      </div>
      </div>
      <div className='md:flex md:flex-row lg:gap-12'>
      <ul className='flex gap-3 text-sm justify-center items-center pb-3 mt-20 text-zinc-700 mr-20'>
        <li><a href='#'>&copy;2024 Dribble</a></li>
        <li><a href='#'>Terms</a></li>
        <li><a href='#'>Privacy</a></li>
        <li><a href='#'>Cookies</a></li>
      </ul>
      <ul className='flex gap-3 text-sm justify-center items-center pb-3 text-zinc-700 md:pt-20'>
        <li><a href='#'>Jobs</a></li>
        <li><a href='#'>Designers</a></li>
        <li><a href='#'>Freelancers</a></li>
        <li><a href='#'>Tags</a></li>
        <li><a href='#'>Places</a></li>
      </ul>
      <div className='flex justify-center text-sm text-zinc-700 md:pt-20'>
        <a>Resources</a>
      </div>
      </div>
    </div>
  )
}

export default Footer
