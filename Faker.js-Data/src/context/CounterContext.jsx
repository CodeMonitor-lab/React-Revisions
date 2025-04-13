import React, { createContext, useContext, useState } from 'react'

const CounterContext = createContext();

const useCount = ()=>{
    return useContext(CounterContext)
}

const CounterProvider = (props)=>{
    const [count,setCount] = useState('');
    
    const Increment = () =>(setCount(count-1))
    const Decrement = ()=>(setCount(count+1))

    const value = {
        count,setCount,
        Increment,
        Decrement
    }

    return<useCount.Provider value= {value}  >
        {props.children}
    </useCount.Provider>
}

export default CounterProvider