import Image from 'next/image';
import React from 'react'

const Loader = () => {
  return (
    <div className='h-full flex flex-col gap-y-4 items-center justify-center mt-20'>
        <div className='w-32 h-32 relative animate-spin'>
            <Image fill alt='Logo' src='/../public/logo.png'/>
        </div>
    </div>
  )
}

export default Loader;
