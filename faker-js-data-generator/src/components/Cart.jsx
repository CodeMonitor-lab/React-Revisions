import React from 'react'
import {faker} from '@faker-js/faker'

const Cart = () => {

  const cartData = Array.from({length:10},()=>({
    id:faker.string.uuid(),
    name:faker.person.fullName(),
    username:faker.location.state(),
    avatar:faker.image.avatar(),
    email:faker.internet.email(),
    location:faker.location.country(),
    countryCode:faker.location.direction(),
    password:faker.internet.password(),
  }))
  console.log(cartData);

  return (
    <>
    <h1 className='text-center text-2xl text-red-300' >Fake data creation using faker js</h1>
    <div className='width-full h-100 flex justify-center  bg-blue-100 ' >
      <div className='grid grid-cols-4 gap-1.5 justify-center align-center '>
        {cartData.map((data)=>(
          <li key={data.id} className='flex flex-col border-1 text-center bg-amber-50 ' >
            <img src={data.avatar} alt="" />
            <p>{data.fullName}</p>
            <h1 className='text-2xl text-amber-700 font-black bg-red-200  ' >{data.username}</h1>
            <p>Email :{data.email}</p>
            <p>passwod: {data.password}</p>
            <p>Location:{data.countryCode}{data.location}</p>
          </li>
        ))}
      </div>
    </div>

    </>
  )
}

export default Cart