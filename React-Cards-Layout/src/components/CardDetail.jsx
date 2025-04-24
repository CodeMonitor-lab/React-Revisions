import React, { useEffect } from 'react'
import cardsData from './CardsData'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const CardDetail = () => {
    
    const {id} = useParams()
    const post = cardsData.find(data=>data.id === parseInt(id))

    const navigate = useNavigate()
    
    if(!post){
        return <div>
            <h1 className=' flex justify-center mt-20 text-3xl text-red-800 font-black' >Post Not Available</h1>
             </div>
    }

  return (
    <>
    <main className='bg-red-50 min-w-screen min-h-screen p-5'>
    <article  className='border-2 p-4 rounded-2xl min-h-screen ' >
    <p> Post Count: {post.id}</p>
    <h1 className='text-center font-black text-3xl' >{post.tittle}</h1>
    <h1 className='text-center mt-4' >{post.Content}</h1>
    <button onClick={()=>navigate('/')}  className=' text-white font-black bg-sky-700 px-4 py-2  mt-5 rounded hover:bg-sky-600 cursor-pointer' >Go Back!</button>
    </article>
    </main>
    </>
  )
}

export default CardDetail