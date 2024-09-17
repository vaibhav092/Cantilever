import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from './Home'
import Cart from './Cart'

const Router= createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ]
    }
])
export default Router