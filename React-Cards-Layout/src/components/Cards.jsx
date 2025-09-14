import React, { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import cardsData from './CardsData'
import { useNavigate } from 'react-router-dom'

const Cards = () => {
  const navigate = useNavigate(false);
  const location = useLocation()
  const cardRefs = useRef({})
  
  const handleReadPost = (id)=>{
    navigate(`/post/${id}`)
    console.log("post id:",id)
  }
  
  useEffect(()=>{
    const scrollToId = location.state?.scrollToId
    if (scrollToId && cardRefs.current[scrollToId]) {
      cardRefs.current[scrollToId].scrollIntoView({ behavior: 'smooth' });
    }

  },[location])

  return (
    <>
      <main>
        <section className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-5 p-5 '>
          {
            cardsData.map((item) => (
              <article ref={(el)=>(cardRefs.current[item.id]==el)}  key={item.id} className='bg-amber-200  p-4 cursor-pointer hover:bg-amber-300 shadow-[0_0px_10px] '  >
                <img className='bg-cover bg-center h-80 w-full' src={item.img} alt="card-img" loading='lazy' />
                <h1  className='mt-2 mb-3 font-bold text-2xl '>{item.tittle}</h1>
                <hr className='bg-black border-t-2' />
                <p className='mt-2 font-sans font-semibold' >{item.description}</p>
                <button onClick={()=>handleReadPost(item.id)} className='bg-sky-600 text-white px-2 py-2 rounded mt-6 font-black hover:bg-sky-700 cursor-pointer' >Read Post</button>
              </article>
            ))
          }
        </section>
      </main>

    </>
  )
}

export default Cards