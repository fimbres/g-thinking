"use client";

import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import SideBar from './SideBar'

function MobileSideBar() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  
    return () => {
      setIsMounted(false);
    }
  }, []);
  
  if(!isMounted){
    return null;
  }
  
  return (
    <Sheet>
        <SheetTrigger>
            <Button variant='ghost' size='icon' className='md:hidden'>
                <HamburgerMenuIcon />
            </Button>
        </SheetTrigger>
        <SheetContent side='left' className='p-0 pt-5 bg-red-700 text-white'>
            <SideBar />
        </SheetContent>
    </Sheet>
  )
}

export default MobileSideBar