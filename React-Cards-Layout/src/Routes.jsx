import React from 'react'
import Home from './pages/Home'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import CardDetail from './components/CardDetail'

export function PageNotFound(){
    const navigate = useNavigate()

    return (
        <div className="flex items-center justify-center min-w-screen min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Page Not Found</h1>
                <p className="text-lg text-gray-700 mb-6">Oops! The page you are looking for does not exist.</p>
                <button 
                    onClick={() => navigate('/')} 
                    className="bg-blue-500 font-black text-1xl cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                    Go to Home
                </button>
            </div>
        </div>
    )
}


const Routes = () => {

    const router = createBrowserRouter([
        {
            path:'/',
            element:<Home/>,
        },
        {
            path:'/post/:id',
            element:<CardDetail/>
        },
        {
            path:'*',
            element:<div>
                <PageNotFound/>
            </div>
        }
    ])

  return (
    <RouterProvider router = {router} />
  )
}

export default Routes