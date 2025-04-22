import React from 'react'
import { Link } from 'react-router-dom'

const Cards = () => {
  const cardsData = [
    {
      id: 1,
      img: " https://random-image-pepebigotes.vercel.app/api/skeleton-random-image",
      tittle: "I am Creating a Card title",
      para: " this is an cards paragraph Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias modi, facere sequi architecto minus eum iste dolores quod aut corrupti!"
    },
    {
      id: 2,
      img: "https://random-image-pepebigotes.vercel.app/api/random-image",
      tittle: "I am Creating a Card title",
      para: " this is an cards paragraph Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias modi, facere sequi architecto minus eum iste dolores quod aut corrupti!"
    },
    {
      id: 3,
      img: " https://random-image-pepebigotes.vercel.app/api/swag-wallpaper ",
      tittle: "I am Creating a Card title",
      para: " this is an cards paragraph Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias modi, facere sequi architecto minus eum iste dolores quod aut corrupti!"
    },
    {
      id: 4,
      img: "https://random-image-pepebigotes.vercel.app/api/random-image",
      tittle: "I am Creating a Card title",
      para: " this is an cards paragraph Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias modi, facere sequi architecto minus eum iste dolores quod aut corrupti!"
    },
    {
      id: 5,
      img: "https://random-image-pepebigotes.vercel.app/api/random-image",
      tittle: "I am Creating a Card title",
      para: " this is an cards paragraph Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias modi, facere sequi architecto minus eum iste dolores quod aut corrupti!"
    },
    {
      id: 6,
      img: "https://random-image-pepebigotes.vercel.app/api/random-image",
      tittle: "I am Creating a Card title",
      para: " this is an cards paragraph Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias modi, facere sequi architecto minus eum iste dolores quod aut corrupti!"
    },
    {
      id: 7,
      img: " https://random-image-pepebigotes.vercel.app/api/skeleton-random-image",
      tittle: "I am Creating a Card title",
      para: " this is an cards paragraph Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias modi, facere sequi architecto minus eum iste dolores quod aut corrupti!"
    },
    {
      id: 8,
      img: " https://random-image-pepebigotes.vercel.app/api/skeleton-random-image",
      tittle: "I am Creating a Card title",
      para: " this is an cards paragraph Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias modi, facere sequi architecto minus eum iste dolores quod aut corrupti!"
    },
    {
      id: 9,
      img: " https://random-image-pepebigotes.vercel.app/api/skeleton-random-image",
      tittle: "I am Creating a Card title",
      para: " this is an cards paragraph Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias modi, facere sequi architecto minus eum iste dolores quod aut corrupti!"
    },
    {
      id: 10,
      img: " https://random-image-pepebigotes.vercel.app/api/swag-wallpaper ",
      tittle: "I am Creating a Card title",
      para: " this is an cards paragraph Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias modi, facere sequi architecto minus eum iste dolores quod aut corrupti!"
    },
    {
      id: 11,
      img: " https://random-image-pepebigotes.vercel.app/api/swag-wallpaper ",
      tittle: "I am Creating a Card title",
      para: " this is an cards paragraph Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias modi, facere sequi architecto minus eum iste dolores quod aut corrupti!"
    },
    {
      id: 11,
      img: " https://random-image-pepebigotes.vercel.app/api/swag-wallpaper ",
      tittle: "I am Creating a Card title",
      para: " this is an cards paragraph Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias modi, facere sequi architecto minus eum iste dolores quod aut corrupti!"
    },
  ]

  return (
    <>
      <main>
        <section className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-4 gap-y-5 p-5'>
          {
            cardsData.map((item) => (
              <article key={console.log(item.id)} className='bg-amber-200  p-4 '  >
                <img className='bg-cover bg-center h-80 w-full' src={item.img} alt="" loading='lazy' />
                <h1  className='mt-2 mb-3 font-bold text-2xl '>{item.tittle}</h1>
                <hr className='bg-black border-t-2' />
                <p className='mt-2 font-sans font-semibold' >{item.para}</p>
                <button className='bg-sky-600 text-white px-2 py-2 rounded mt-6 font-black hover:bg-sky-700 cursor-pointer' >Read Post</button>
              </article>
            ))
          }
        </section>
      </main>

    </>
  )
}

export default Cards