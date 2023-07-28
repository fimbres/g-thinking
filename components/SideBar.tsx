"use client";

import { cn } from '@/lib/utils';
import { ChatBubbleIcon, CodeIcon, GearIcon, ImageIcon, LayoutIcon, VideoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const routes = [
  {
    label: "Dashboard",
    icon: LayoutIcon,
    href: "/dashboard",
    color: "text-gray-200"
  },
  {
    label: "Conversation",
    icon: ChatBubbleIcon,
    href: "/conversation",
    color: "text-gray-200"
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image-generation",
    color: "text-gray-200"
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video-generation",
    color: "text-gray-200"
  },
  {
    label: "Code Generation",
    icon: CodeIcon,
    href: "/code-generation",
    color: "text-gray-200"
  },
  {
    label: "Settings",
    icon: GearIcon,
    href: "/settings",
    color: "text-gray-200"
  },
];

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
        <div className='space-y-1'>
        {routes.map(route => (
          <Link href={route.href} key={route.href} className='text-sm group flex p-3 w-full justify-start font-medium cursor-pointer text-white rounded-lg transition hover:opacity-40'>
            <div className='flex items-center flex-1'>
              <route.icon className={cn('h-5 w-5 mr-3', route.color)}/>
              {route.label}
            </div>
          </Link>
        ))}
        </div>
       </div>
    </div>
  )
}

export default SideBar