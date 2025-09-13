import React from 'react'

const BtnSubmit = ({type='text',btnText,className}) => {
  return <>
  <button className={`${className} || bg-blue-500 p-2 mt-5 text-lg font-bold rounded text-center cursor-pointer`} type={type} >{btnText}</button>
  </>
}

export default BtnSubmit