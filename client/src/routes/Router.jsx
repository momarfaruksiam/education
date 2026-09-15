import React from 'react'
import { createBrowserRouter } from 'react-router'


import ProtectedLayout from '../layouts/ProtectedLayout'
import Home from '../pages/Home'
import Profile from '../pages/Profile'


const Router = createBrowserRouter([
    {
        path: '/',
        element: <ProtectedLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'profile',
                element: <Profile />
            },
            {
                path: ':username',
                element: <Profile />
            },
            {
                path: ':username/:body',
                element: <Profile />
            },
            {
                path: '*',
                element: <>page not found</>
            }
        ]
    },
])

export default Router