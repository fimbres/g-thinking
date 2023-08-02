"use client";

import React from 'react'
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const font = Montserrat({
    weight: '600',
    subsets: ['latin']
});

const LandingNavBar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className='p-4 bg-transparent flex items-center justify-between'>
        <Link href='/' className='flex items-center'>
            <div className='relative h-12 w-12 mr-4'>
                <Image fill alt='Logo' src='/logo.png' />
            </div>
            <h1 className={cn('text-xl font-bold text-red-500', font.className)}>
                G Thinking
            </h1>
        </Link>
        <div className='flex items-center gap-x-2'>
            <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
                <Button variant='secondary' className='rounded-ful text-red-500 border-2 border-red-500 rounded-full hover:opacity-70 hover:bg-red-500/10'>
                    Get Started
                </Button>
            </Link>
        </div>
    </nav>
  )
}

export default LandingNavBar;