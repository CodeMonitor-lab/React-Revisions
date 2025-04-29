import React from 'react'

const Input = ({ type = 'text', name,email,password,placeholder}) => {
  return <input className='flex p-3 mb-3 w-full text-lg border-2 rounded border-gray-300' type={type} name={name} placeholder={placeholder} />
}

export default Input