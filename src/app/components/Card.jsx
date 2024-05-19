import React from 'react'
import datas from './datas.json'

const Card = (props) => {
  console.log(datas);
  return (
    <div className='my-4 mx-4 flex flex-col justify-center items-center'>
    <div className=' rounded-md w-[20rem] h-[16rem]'>
      <img src={props.img} className='w-[20rem] h-[16rem] rounded-lg'></img>
    </div>
    <div className=' flex gap-4 w-[20rem] p-2'>
      <img className='rounded-full border-2 size-7' src={props.pimg}></img>
      <p>{props.name}</p>
      <p className='pl-20'>{props.likes}</p>
    </div>
    </div>
  )
}

export default Card
