import React, { useState } from 'react'
import { FormField } from './'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { CiMenuFries } from 'react-icons/ci'
import { Button } from './'
import { Link } from 'react-router-dom'


const NavbarItems = ({ title }) => (
    <ul>
       <Link to='/' ><li className='mt-[20px]'>{title}</li></Link>
    </ul>
)

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)

    const connect = 500
    return (
        <div className='flex md:flex-row flex-col-reverse'>
            <div className='flex justify-between w-[100%] gap-6 items-center text-white px-5 sm:flex p-0 md:flex-row flex-col '>
                <h1 className='md:flex hidden'>Dashboard</h1>


                <div>
                    <AiOutlineSearch className='mt-[20px] absolute ml-[7px] text-[#eaeaea]' />
                    <FormField

                        placeholder='Search for anything'
                        styles='bg-[#252525]  rounded-[100px] h-[20px] w-[100%] p-7 outline-none placeholder:ml-[20px]'

                    />




                    {!navbar && (
                        <CiMenuFries className='sm:hidden float-right mr-[-50px] mt-[-30px] relative' onClick={() => setNavbar(true)} />
                    )}

                </div>

                <div className='sm:flex hidden'>
                    <Button
                    btnType='button'
                        title={connect ? (
                            'Connected'

                        ) : (
                            'Connect'
                        )}

                        styles={connect ? (
                            'bg-[#8c6dfd] px-3 p-2 rounded'
                        ) : (
                            'bg-[#1dc071] px-3 p-2 rounded'
                        )}


                    />
                </div>



                {navbar && (
                    <div className='bg-[#1f1f1f] w-[100%] text-center p-10 rounded-[10px] sm:hidden'>
                        <AiOutlineClose className='' onClick={() => setNavbar(false)} />
                       {/*{['Home', 'Settings', 'Profile', 'Charts'].map((item, index) => (
                            <NavbarItems key={item + index} title={item} />
                        ))}*/}

                        <ul>
                           <Link to='/'><li className='mt-[20px]'>Home</li></Link> 
                           <Link to='/form'><li className='mt-[20px]'>Transact</li></Link>
                           <Link to='/api'><li className='mt-[20px]'>Coin Ranking</li></Link>
                            <li className='mt-[20px]'>Charts</li>
                        </ul>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Navbar