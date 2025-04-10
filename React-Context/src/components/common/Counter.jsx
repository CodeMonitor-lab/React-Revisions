import React, { useState } from 'react'
import CounterProvider from '../../context/CounterContext'


const Counter = () => {
    const [value,setValue] = useState()

    return (
        <>
            <main style={{textAlign:'center',padding:'2rem',margin:'2rem'}} >
                <div style={{display:'flex',justifyContent:'center',gap:"2rem"}}>
                <section style={{display:'flex',gap:"0.5rem",padding:'1rem'}}>
                    <button  type="submit">Increment</button>
                    <button  type="submit">Increment</button>
                    <button  type="submit">Increment</button>
                </section>
                <section style={{display:'flex',gap:"1rem"}}>
                    <button  type="submit">Decrement</button>
                    <button  type="submit">Decrement</button>
                    <button  type="submit">Decrement</button>
                </section>
                </div>
                <button style={{padding:"1rem",margin:'2rem',color:'darkblue',fontWeight:'bold'}} > Counter Value : 0</button>
            </main>
        </>
    )
}

export default Counter