import React from 'react'


const Card = ({id,name,date,price}) => {
  return (
    <div className='w-[170px] h-[100px] bg-[#252525] text-center text-white rounded-[20px] cd sm:w-[170px]'>
        <h1 className='mt-[10px]'>{name}</h1>
        <p className='text-[10px] text-[#aaaaaa]'>{date}</p>
        <p>${price}</p>
        <div className='flex justify-around ss'>
        <p className='text-[10px] text-[#ff2400]'>${price}</p>
        <p className='text-[10px] text-[lime]'>${price}</p>
        </div>
    </div>
  )
}

export default Card