import { useState } from 'react'
import './App.css'
import Routes from './Routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='m-0 p-0' >
    <Routes/>
    </div>
    </>
  )
}

export default App
