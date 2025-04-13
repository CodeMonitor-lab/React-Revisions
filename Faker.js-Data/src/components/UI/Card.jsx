import React from 'react'

const Card = () => {
  return (
    <>
    <div>
        <div className=' grid items-center justify-center p-6  max-w-sm-auto border-2 bg-amber-300 '  >
            <div className='max-w-sm' >
                <img className='rounded-xl m-4' src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.webp?s=2048x2048&w=is&k=20&c=KTpY1O4d7-EuX-R_GR_44Upc-n9esJOZFpcqvA4CM0E=" alt="" />
            </div>
            {/*  */}
            <div>
                <p className='text-2xl ' >my paragraph</p>
            </div>
        </div>

    </div>
    <button className='bg-sky-500 text-5xl text-white rounded-xl mt-3 ' >Buy Now</button>
    </>
  )
}

export default Card