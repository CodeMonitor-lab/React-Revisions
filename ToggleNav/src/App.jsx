import { useState } from 'react'
import  './App.css'
import Header from './components/Header'
import MenuBTN from './components/MenuBTN'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    </>
  )
}

export default App
