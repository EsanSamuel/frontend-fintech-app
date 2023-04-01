import React, { useState } from 'react'
import { FormField2 } from '../components'
import { Button, Loader } from '../components'

const Form = () => {
    const [form, setForm] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        setLoading(true)
    }

    return (
        <div className='flex justify-center items-center w-full flex-col sm:p-10  '>

            <form onSubmit={handleSubmit} className='w-full flex flex-col gap-[30px] mt-[65px]'>
                <div className='flex flex-wrap gap-[40px] '>
                    <FormField2
                        labelName='Enter F-Name'
                        placeholder='John Doe'

                    />

                    <FormField2
                        labelName='Enter L-Name'
                        placeholder='John Doe'

                    />



                </div>

                <div className='flex flex-wrap gap-[40px] mt-[30px]'>
                    <FormField2
                        labelName='Enter Message'
                        placeholder='John Doe'
                        isTextArea

                    />

                </div>

                <div className='flex flex-wrap gap-[40px] mt-[30px]'>
                    <FormField2
                        labelName='Enter Name'
                        placeholder='John Doe'

                    />

                    <FormField2
                        labelName='Enter Name'
                        placeholder='John Doe'

                    />



                </div>

                <div className='flex flex-wrap gap-[40px] mt-[30px]'>
                    <FormField2
                        labelName='Enter Name'
                        placeholder='John Doe'
                        isTextArea

                    />

                </div>
                <Button
                    title={loading ? (
                        <Loader />
                    ) : (
                        'Submit'
                    )}
                    styles='bg-[#1dc071] px-3 p-2 rounded text-white'
                    onClick={() => setLoading(true)}
                   
                />
            </form>
        </div>
    )

}

export default Form