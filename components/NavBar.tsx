import React from 'react'
import { UserButton } from '@clerk/nextjs'
import MobileSideBar from './MobileSideBar'
import { getAPILimitCount } from '@/lib/api-limit'

interface NavBarProps {
  apiLimitCounter: number;
}

const NavBar: React.FC<NavBarProps> = ({ apiLimitCounter }) => {
  return (
    <div className='flex items-center p-4'>
        <MobileSideBar apiLimitCount={apiLimitCounter}/>
        <div className='flex w-full justify-end'>
          <UserButton afterSignOutUrl='/' />
        </div>
    </div>
  )
}

export default NavBar