import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
import React from 'react'

function DashboardLayout({ children } : { children: React.ReactElement }) {
  return (
    <div className='h-full relative'>
        <div className='hidden h-screen md:flex md:flex-col md:fixed md:inset-y-0 z-[80] md:w-72 bg-red-700'>
            <SideBar />
        </div>
        <main className='md:pl-72'>
            <NavBar />
            {children}
        </main>
    </div>
  )
}

export default DashboardLayout