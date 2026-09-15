import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

export default function ProtectedLayout() {
    return (
        <>
            <Navbar />
            <div className='
            mb-15 p-2
            md:m-0 md:px-4
            '>
                <Outlet />
            </div>
        </>
    )
}
