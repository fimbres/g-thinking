import React from 'react'
import { Button } from './ui/button'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

function NavBar() {
  return (
    <div className='flex items-center p-4'>
        <Button variant='ghost' size='icon' className='md:hidden'>
            <HamburgerMenuIcon />
        </Button>
    </div>
  )
}

export default NavBar