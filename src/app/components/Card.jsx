import React from 'react'
import datas from './datas.json'
import { HeartIcon } from '../svgs';
import { useState } from 'react';

const Card = (props) => {
  console.log(datas);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  }
  return (
    <div className='my-4 mx-4 flex flex-col justify-center items-center'>
    <div className=' rounded-md w-[20rem] h-[16rem] relative drop-shadow-xl'>
      <img src={props.img} className='w-[20rem] h-[16rem] rounded-lg'></img>
      <div className='flex justify-between items-end font-mono font-semibold p-4 opacity-0 hover:opacity-100 hover:bg-opacity-50 hover:bg-gradient-to-b from-transparent via-transparent to-zinc-700 absolute size-full top-0 rounded-md text-white'>
        <p>{props.about}</p>
        <div className='flex flex-row justify-start gap-4'>
        <button className='bg-white p-2 rounded-full' >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6 hover:opacity-50">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
        </button>
        <button className='bg-white p-2 rounded-full'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="size-6 hover:opacity-50">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>
        </button>
        </div>
      </div>
    </div>
    <div className=' flex w-[20rem] p-2 justify-between'>
      <div className='flex justify-center gap-2'>
      <img className='rounded-full border-2 size-7' src={props.pimg}></img>
      <p className='font-sans font-medium'>{props.name}</p>
      </div>
      <p className='flex items-center gap-2 '>
        <button onClick={handleClick} >
        <svg xmlns="http://www.w3.org/2000/svg" fill="gray" viewBox="0 0 24 24" strokeWidth={1.2} stroke="none" className="size-5 hover:fill-rose-400">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
        </button>
        {props.likes}
      </p>
    </div>
    </div>
  )
}

export default Card
