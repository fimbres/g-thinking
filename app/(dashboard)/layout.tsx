import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
import React from 'react'
import { getAPILimitCount } from '@/lib/api-limit'

async function DashboardLayout({ children } : { children: React.ReactElement }) {
  const counter = await getAPILimitCount();

  return (
    <div className='h-full relative'>
        <div className='hidden h-screen md:flex md:flex-col md:fixed md:inset-y-0 md:w-72 bg-red-700'>
            <SideBar apiLimitCounter={counter}/>
        </div>
        <main className='md:pl-72'>
            <NavBar apiLimitCounter={counter} />
            {children}
        </main>
    </div>
  )
}

export default DashboardLayout