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
    <main className='bg-sky-200 min-w-screen min-h-screen'>
      <section className='bg-blue-500 min-h-screen p-5 flex  items-center justify-center ' >
        <article className='p-5 bg-red-400 ' >
          <p className='mb-5 font-black bg-center bg-cover ' > Post Id : {post.id}</p>
        <img className='w-full  h-80 '  src={post.img} alt="Content-image" loading='lazy' />
        <h1 className='font-bold text-3xl mt-5 text-black' >{post.tittle}</h1>
        <p className='text-2xl font-mono pt-2 pb-5' >{post.Content}</p>
        <button onClick={()=>navigate('/')} className='rounded hover:bg-sky-900 cursor-pointer bg-sky-800 text-white px-4 py-2 ' >|Back...|</button>
        </article>
      </section>
    </main>
    </>
  )
}

export default CardDetail