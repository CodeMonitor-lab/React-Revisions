import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
        <main className='w-50 bg-red-300 '>
            <nav className='w-100 p-3 ' >
                <ul className='grid gap-5 text-black font-bold text-2xl '>
                    <NavLink to='/' ><li>Home</li></NavLink>
                    <NavLink to='/Contact' ><li>Contact</li></NavLink>
                </ul>
            </nav>
        </main>
        </>

    )
}

export default Sidebar