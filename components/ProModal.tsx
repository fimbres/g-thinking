"use client";

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogDescription, DialogTitle, DialogFooter } from './ui/dialog';
import { useProModal } from '@/hooks/useProModal';
import { Badge } from './ui/badge';
import { ChatBubbleIcon, CheckIcon, CodeIcon, ImageIcon, RocketIcon, VideoIcon } from '@radix-ui/react-icons';
import { Card } from './ui/card';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import axios from 'axios';

const ProModal = () => {
    const proModal = useProModal();
    const [isLoading, setIsLoading] = useState(false);
    const tools = [
        {
          label: "Conversation",
          icon: ChatBubbleIcon,
          href: "/conversation",
        },
        {
          label: "Image Generation",
          icon: ImageIcon,
          href: "/image-generation",
        },
        {
          label: "Video Generation",
          icon: VideoIcon,
          href: "/video-generation",
        },
        {
          label: "Code Generation",
          icon: CodeIcon,
          href: "/code-generation",
        },
      ];

    const onSubscribe = async () => {
        try{
            setIsLoading(true);
            const response = axios.get('/api/stripe');

            window.location.href = (await response).data.url;
        }
        catch(error){
            console.error('Client Error', error);
        }
        finally {
            setIsLoading(false);
        }
    }

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle className='flex justify-center items-center flex-col gap-y-4 pb-2'>
                    <div className='flex items-center gap-x-2 font-bold py-1'>
                        Upgrade to G Thinking
                        <Badge className='uppercase text-sm bg-red-500'>
                            Pro
                        </Badge>
                    </div>
                </DialogTitle>
                <DialogDescription className='text-center pt-2 space-y-2 text-zinc-900 font-medium'>
                    {tools.map(tool => (
                        <Card key={tool.label} className='p-3 border-black/5 flex items-center justify-between'>
                            <div className='flex items-center gap-x-4'>
                                <div className={cn('p-2 w-fit rounded-md bg-red-400/40')}>
                                    <tool.icon className={cn('w-6 h-6 text-red-600')} />
                                </div>
                                <div className='font-semibold text-sm'>
                                    {tool.label}
                                </div>
                            </div>
                            <CheckIcon className='text-primary w-5 h-5' />
                        </Card>
                    ))}
                </DialogDescription>
            </DialogHeader>
            <DialogFooter>
                <Button className='w-full mt-3' onClick={onSubscribe} disabled={isLoading}>
                    Upgrade
                    <RocketIcon className='w-4 h-4 ml-2 fill-white' />
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

export default ProModal