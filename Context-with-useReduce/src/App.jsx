import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
// compo
import Sidebar from './components/Sidebar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>

    <Router>
      <Sidebar/>
      <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/Contact'  element={<Contact/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
