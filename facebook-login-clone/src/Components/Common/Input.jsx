import React from 'react'

const Input = ({ type = 'text', name, placeholder}) => {

  return <input className='flex mt-3 p-3 font-bold w-full border-gray-300 border-2'  name={name} placeholder={placeholder} />
}

export default Input