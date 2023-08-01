import React from 'react'
import { UserButton } from '@clerk/nextjs'
import MobileSideBar from './MobileSideBar'
import { getAPILimitCount } from '@/lib/api-limit'

async function NavBar() {
  const apiLimitCount = await getAPILimitCount();

  return (
    <div className='flex items-center p-4'>
        <MobileSideBar apiLimitCount={apiLimitCount}/>
        <div className='flex w-full justify-end'>
          <UserButton afterSignOutUrl='/' />
        </div>
    </div>
  )
}

export default NavBar