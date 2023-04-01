import React, { useState } from 'react'
import { transact } from '../utils/index'
import { Card } from '../components'
import { BsDownload, BsSendCheck } from 'react-icons/bs'
import { VscArrowSwap } from 'react-icons/vsc'
import { RiVisaLine} from 'react-icons/ri'

const Home = () => {
  return (
    <div className=' p-12 sm:flex flex-col mt-10 p-3'>
      <div className='w-auto h-[250px] rounded-[20px] sm:min-w-[400px]  white-glassmorphism'>
        <h1 className='text-white text-[32px] ml-[30px] mt-20 sm:flex text-[20px]'>John Doe</h1>
        <RiVisaLine className='text-[40px] float-right mr-[20px] text-white mt-[50px]'/>
      </div>

      <div className='flex justify-center gap-20 text-white text-center items-center mt-10'>
        <label><BsDownload className='bg-[#252525] w-[40px] h-[40px] rounded-[8px] p-2' /><p className='text-[10px] mt-[5px]'>Receive</p></label>
        <label><BsSendCheck className='bg-[#252525] w-[40px] h-[40px] rounded-[8px] p-2' /><p className='text-[10px] mt-[5px]'>Send</p> </label>
        <label><VscArrowSwap className='bg-[#252525] w-[40px] h-[40px] rounded-[8px] p-2' /><p className='text-[10px] mt-[5px]'>Swap</p></label>
      </div>

      <div className='flex justify-around gap-3 mt-20 w-full h-[200px] transactx overflow-x: auto'>
        {transact.map((cardx) => (
          <Card key={cardx.id} {...cardx} />
        ))}
      </div>


    </div>
  )
}

export default Home