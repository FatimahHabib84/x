
import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from '../page/Home';
import Login from '../page/Login';
import Signup from '../page/Signup';
import Profile from '../page/Profile';

export default function Router() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home/>,
        },
        {
            path:'/Login',
            element:<Login/>
        },
        {
            path:'/Signup',
            element:<Signup/>
        },
        {
            path:'/Profile',
            element:<Profile/>
        }
      ]);

  return (
    <RouterProvider router={router} />
  )
}