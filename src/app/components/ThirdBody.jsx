import React from 'react'

const ThirdBody = () => {
  return (
    <div className='text-center bg-amber-300 py-[6rem] flex flex-col justify-center items-center'>
      <h1 className='text-4xl mx-4 mb-6 max-w-[35rem] md:text-[3.5rem] leading-snug'>Find your next designer today</h1>
      <p className='mx-10 text-lg mb-[3rem] max-w-[30rem] font-sans'>
        The world's leading brand use Dribble to hire creative talent. 
        Browse millions of top-rated portfolios to find your perfect creative match.
      </p>
      <div className='flex flex-col justify-center items-center text-white gap-4 md:flex-row'>
      <a href='#' className='rounded-full border-1 bg-black p-4 font-sans font-semibold hover:animate-pulse'>Get started now</a>
      <a href='#' className='border-1 rounded-full bg-white p-4 text-black font-sans font-semibold hover:animate-pulse'>Learn about hiring</a>
      </div>
      <div className='flex flex-row mt-[4rem] text-xl font-sans'>
      <p>Are you a designer?</p><a href='#' className='underline'>Join Dribble</a>
      </div>
    </div>
  )
}

export default ThirdBody
