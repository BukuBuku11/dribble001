import React from 'react'
import datas from './datas.json'
import { HeartIcon } from '../svgs';

const Card = (props) => {
  console.log(datas);
  return (
    <div className='my-4 mx-4 flex flex-col justify-center items-center'>
    <div className=' rounded-md w-[20rem] h-[16rem]'>
      <img src={props.img} className='w-[20rem] h-[16rem] rounded-lg'></img>
    </div>
    <div className=' flex w-[20rem] p-2 justify-between'>
      <div className='flex justify-center gap-2'>
      <img className='rounded-full border-2 size-7' src={props.pimg}></img>
      <p>{props.name}</p>
      </div>
      <p className='flex items-center gap-2 '><HeartIcon className='cursor-pointer hover:fill-current hover:text-red-600'/>{props.likes}</p>
    </div>
    </div>
  )
}

export default Card
