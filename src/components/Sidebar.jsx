import React from 'react'
import {Link } from 'react-router-dom'
import { RxDashboard } from 'react-icons/rx'
import { GoDashboard } from 'react-icons/go'
import { HiCube } from 'react-icons/hi'
import { BsFillBookmarkPlusFill, BsSave2 } from 'react-icons/bs'
import { BiLogOut } from 'react-icons/bi'

const Sidebar = () => {
    return (
        <div className='w-[48px] fixed text-white sm:flex hidden '>
            <div className='mt-[130px] sm:flex flex-col hidden '>
            <Link to ='/'><RxDashboard className='text-[25px] mt-[20px] hover:text-[#1dc071] ' /></Link>
                <Link to ='/form'><GoDashboard className='text-[25px] mt-[30px] hover:text-[#1dc071]' /></Link>
                <Link to ='/api'><HiCube className='text-[25px] mt-[30px] hover:text-[#1dc071]' /></Link> 
                <Link to ='/chart'><BsFillBookmarkPlusFill className='text-[25px] mt-[30px] hover:text-[#1dc071]' /></Link>
                <BsSave2 className='text-[25px] mt-[30px] hover:text-[#1dc071]' />
                <BiLogOut className='text-[25px] mt-[230px] hover:text-[#1dc071]' />
            </div>
        </div>
    )
}

export default Sidebar