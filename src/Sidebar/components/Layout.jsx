import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function Layout() {
    return (

        <div className='flex flex-row bg-neutral-900 h-screen w-screen overflow-hidden rounded-3xl'>
            <div className='w-1/4'>
                <Sidebar />
            </div>
            <div className='flex flex-row bg-neutral-100 w-full overflow-auto rounded-3xl ml-[20px] mt-[20px] mb-[20px] mr-[20px]'>
                <Outlet />
            </div>
        </div>

    )
}