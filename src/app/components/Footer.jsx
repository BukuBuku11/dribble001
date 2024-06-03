import React from 'react'
import { DribbleLogo,XIcon,FbIcon,InstaIcon,PinIcon } from '../svgs'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center md'>
      <DribbleLogo className='size-24'/>
      <div className='sm:flex flex-row md:gap-8'>
      <ul className='flex gap-3 text-sm justify-center pb-3 font-bold lg:gap-12'>
        <li><a className='hover:opacity-70' href='#'>For designers</a></li>
        <li><a className='hover:opacity-70' href='#'>Hire talent</a></li>
        <li><a className='hover:opacity-70' href='#'>Inspiration</a></li>
      </ul>
      <ul className='flex gap-3 text-sm justify-center pb-3 font-bold lg:gap-12'>
        <li><a className='hover:opacity-70' href='#'>Advertising</a></li>
        <li><a className='hover:opacity-70' href='#'>Blog</a></li>
        <li><a className='hover:opacity-70' href='#'>About</a></li>
        <li><a className='hover:opacity-70' href='#'>Careers</a></li>
      </ul>
      <div className='flex justify-center text-sm font-bold pb-3'>
        <a className='hover:opacity-70'>Support</a>
      </div>
      <div className='flex justify-center gap-4 items-center'>
        <a className='hover:opacity-70' href='https://x.com/' target='_blank'><XIcon/></a>
        <a className='hover:opacity-70' href='https://www.facebook.com/' target='_blank'><FbIcon/></a>
        <a className='hover:opacity-70' href='https://www.instagram.com/' target='_blank'><InstaIcon/></a>
        <a className='hover:opacity-70' href='https://in.pinterest.com/' target='_blank'><PinIcon/></a>
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
