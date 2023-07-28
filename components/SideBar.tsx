"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function SideBar() {
  return (
    <div className='space-y-4 py-4 flex flex-col h-full text-red-700 text-white'>
       <div className='px-3 py-2 flex-1'>
        <Link href="dashboard" className='flex items-center pl-3 mb-14'>
            <div className='relative w-12 h-12 mr-4'>
                <Image fill alt='logo' src="/../public/logo.png"/>
            </div>
            <h1 className='font-bold text-2xl text-white'>G Thinking</h1>
        </Link>
       </div>
    </div>
  )
}

export default SideBar