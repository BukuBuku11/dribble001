import React from 'react'

const FirstBody = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-10 subpixel-antialiased'>
     <div className='flex justify-center items-center bg-rose-400 mt-20 h-10 rounded-full px-4'>
      <a href='#' className='text-center'>Over 3 million ready-to-work creatives!</a>
     </div>
     <h1 className='text-5xl text-center mx-4 lg:w-[50rem] lg:text-[4.5rem]'>The world's destination for design</h1>
     <p className='text-center mx-10 lg:text-xl font-sans'>Get inspired by the work of millions of top-rated designers & agencies around the world.</p>
     <div className='bg-black text-white flex justify-center items-center w-28 rounded-full'>
      <a href='#' className='p-3 font-sans font-semibold hover:animate-pulse'>Get started</a>
     </div>
    </div>
  )
}

export default FirstBody
