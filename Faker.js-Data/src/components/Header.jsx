import React from 'react'
import Styles from './Styles/Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <main className={Styles.Header_Container}>
        <nav>
            <ul className={Styles.Header_list}>
                <Link to='/' ><li>Home</li></Link>
                <Link to='/cart' ><li>Cart</li></Link>
                <Link to='/login' ><li>Login</li></Link>
            </ul>
        </nav>
    </main>
  )
}

export default Header