"use client";

import React from 'react'
import { useAuth } from '@clerk/nextjs'
import TypewritterComponent from 'typewriter-effect'
import { Button } from './ui/button';
import Link from 'next/link';

const LandingHero = () => {
    const { isSignedIn } = useAuth();
  return (
    <div className='text-red-400 font-bold py-36 text-center space-y-5'>
        <div className='text-4xl sm:text-5xl md:text-6xl lg: text-7xl space-y-5 font-extrabold'>
            <h1>The Best AI Tool for</h1>
            <div className='text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-700'>
                <TypewritterComponent
                    options={{
                        strings: [
                            'Chatbot.',
                            'Photo Generation.',
                            'Video Generation.',
                            'Code Generation.',
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
        </div>
        <div className='text-sm md:text-xl font-light text-gray-700'>
            Create content using AI 10x faster.
        </div>
        <div>
            <Link href={isSignedIn ? '/dashboard' : 'sign-up'}>
                <Button variant={"destructive"} className='md:text-lg p-4 rounded-full font-semibold md:p-6'>
                    Start Generating For Free!
                </Button>
            </Link>
        </div>
        <div className='text-gray-400 text-sm md:text-sm font-normal'>
            No credit card required.
        </div>
    </div>
  )
}

export default LandingHero