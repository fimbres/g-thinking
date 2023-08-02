"use client";

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const testimonials = [
    {
        name: 'Isaac',
        avatar: 'I',
        title: 'Software Engineer',
        description: 'This is amazing! It is the best app ever!'
    },
    {
        name: 'Andrea',
        avatar: 'A',
        title: 'Industrial Engineer',
        description: 'This is amazing! It is the best app ever!'
    },
    {
        name: 'Jonathan',
        avatar: 'J',
        title: 'Computer Engineer',
        description: 'This is amazing! It is the best app ever!'
    },
    {
        name: 'Miguel',
        avatar: 'M',
        title: 'Computer Engineer',
        description: 'This is amazing! It is the best app ever!'
    },
    {
        name: 'Alejandro',
        avatar: 'A',
        title: 'Bio Engineer',
        description: 'This is amazing! It is the best app ever!'
    },
    {
        name: 'Rafael',
        avatar: 'I',
        title: 'Waiter',
        description: 'This is amazing! It is the best app ever!'
    },
];

const LandingContent = () => {
  return (
    <div className='px-10 pb-20'>
        <h2 className='text-center text-4xl text-red-400 font-extrabold mb-10'>
            Testimonials
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {testimonials.map(testimonial => (
                <Card key={testimonial.avatar} className='border-2 border-red-500 text-red-400'>
                    <CardHeader>
                        <CardTitle className='flex items-center gap-x-2'>
                            <div>
                                <p className='text-lg'>{testimonial.name}</p>
                                <p className='text-gray-600 text-sm'>{testimonial.title}</p>
                            </div>
                        </CardTitle>
                        <CardContent className='pt-4 px-0 text-gray-400'>
                            {testimonial.description}
                        </CardContent>
                    </CardHeader>
                </Card>
            ))}
        </div>
    </div>
  )
}

export default LandingContent