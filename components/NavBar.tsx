import React from 'react'
import { Button } from './ui/button'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { UserButton } from '@clerk/nextjs'
import MobileSideBar from './MobileSideBar'

function NavBar() {
  return (
    <div className='flex items-center p-4'>
        <MobileSideBar />
        <div className='flex w-full justify-end'>
          <UserButton afterSignOutUrl='/' />
        </div>
    </div>
  )
}

export default NavBar