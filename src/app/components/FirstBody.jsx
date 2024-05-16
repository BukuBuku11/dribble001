import React from 'react'

const FirstBody = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
     <div className='flex justify-center items-center bg-rose-400 m-10 h-14 leading-5 rounded-full'>
      <a className='p-2 text-center'>Over 3 million ready-to-work creatives!</a>
     </div>
     <h1 className='text-5xl text-center mx-4'>The world's destination for design</h1>
     <p className='text-center my-5 mx-10'>Get inspired by the work of millions of top-rated designers & agencies around the world.</p>
     <div className='bg-black text-white flex justify-center items-center w-28 rounded-full'>
      <a className='p-3'>Get started</a>
     </div>
    </div>
  )
}

export default FirstBody
