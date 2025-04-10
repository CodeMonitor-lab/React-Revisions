import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Cart from './components/Cart'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {

  return (
    <>
    <Router>
    <Header/>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>

    </Router>
    </>
  )
}

export default App
