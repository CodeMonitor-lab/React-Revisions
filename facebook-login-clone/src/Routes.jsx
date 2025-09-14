import React from 'react'
import {Login,SignUp} from './Components/index'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const Routes = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/signUp',
            element:<SignUp/>
        },
        {},
    ])
  return (
    <RouterProvider router={router} />
  )
}

export default Routes