import React from 'react'


const FormField = ({btnType,placeholder,styles,title}) => {
  return (
    <div className=''>
        <input 
        title={title}
            type={btnType}
            placeholder={placeholder}
            className={styles}
            
        />
    </div>

    
  )
}

export default FormField