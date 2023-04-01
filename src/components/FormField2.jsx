import React,{useState} from 'react'

const FormField2 = ({labelName,isTextArea}) => {
    
  return (

   
    <div className='flex-1 w-full flex flex-col'>
    {labelName && (
        <h1 className='text-[#aaaaaa]'>{labelName}</h1>
    )}
    {isTextArea ?(
        <textarea 
              className='w-full h-[150px] py-[15px] sm:px-[25px] px-[15px] text-white outline-none border-[1px] border-[#3a3a43] bg-transparent rounded'
              required
        />
    ):(
        <input
        className='w-full py-[15px] sm:px-[25px] px-[15px] outline-none text-white border-[1px] border-[#3a3a43] bg-transparent rounded'
        required
    />
    )}
    
    </div>
    
  )
}

export default FormField2