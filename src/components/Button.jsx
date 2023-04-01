import React from 'react'

const Button = ({title,styles,btnType}) => {
  return (
    <div>
        <button className={styles} type={btnType}>
            {title}
        </button>
    </div>
  )
}

export default Button