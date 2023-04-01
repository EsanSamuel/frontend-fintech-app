import React, { useState } from 'react'
import { Navbar, Sidebar } from './components'
import { Home, Form ,Api,Chart} from './pages'
import { Routes, Route, BrowserRouter } from 'react-router-dom'


const App = () => {
return (
  <BrowserRouter>
    <div className='w-[100%] relative flex sm:8 bg-[#1b1c1e] min-h-screen flex-row h-[100%] p-10'>

      <div className=' sm:flex hidden mr-10 relative rounded-[20px]'>
        <Sidebar />
      </div>

      <div className='w-full flex-1 max-sm:w-full'>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/form' element={<Form />} />
          <Route path='/api' element={<Api />} />
          <Route path='/chart' element={<Chart />} />
        </Routes>

      </div>





    </div>
  </BrowserRouter>
)
}

export default App