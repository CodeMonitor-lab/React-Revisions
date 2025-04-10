import React, { createContext, useContext, useState } from 'react'

const CounterContext = createContext();

const useCount = ()=>{
    return useContext(CounterContext)
}

const AuthProvider = ()=>{
    const [count,setCount] = useState('');
    
    

    const value = {
        count,
        setCount,
    }

    return<AuthProvider.Provider value= {value}  >

    </AuthProvider.Provider>
}

export default AuthProvider