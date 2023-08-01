"use client";

import Heading from '@/components/Heading';
import * as z from 'zod';
import axios from 'axios';
import { VideoIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from './constants';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import EmptyChat from '@/components/EmptyChat';
import Loader from '@/components/Loader';
import { useProModal } from '@/hooks/useProModal';

function VideoPage() {
  const router = useRouter();
  const proModal = useProModal();
  const [video, setVideo] = useState<string>();
  const form = useForm<Zod.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        prompt: ""
    }
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
        setVideo('');

        const response = await axios.post("/api/video-generation", values);

        setVideo(response.data[0]);

        form.reset();
    } catch (error: any) {
        if(error?.response?.status === 403) {
            proModal.onOpen();
        }
        console.error(error);
    } finally {
        router.refresh();
    }
  }

  return (
    <div className='w-full'>
        <Heading title='Video Generation' description='Turn your prompt into video.' icon={VideoIcon} iconColor='text-red-500' bgColor='bg-red-300' />
        <div className='px-4 lg:px-8'>
            <div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2'>
                        <FormField name='prompt' render={({ field }) => (
                            <FormItem className='col-span-12 lg:col-span-10'>
                                <FormControl className='m-0 p-0'>
                                    <Input className='border-0 outlinenone focus-visible:ring-0 focus-visible:ring-transparent' disabled={isLoading} placeholder='Clown fish swimming around a coral reef' {...field}/>
                                </FormControl>
                            </FormItem>
                        )}/>
                        <Button className='col-span-12 lg:col-span-2' disabled={isLoading}>Generate</Button>
                    </form>
                </Form>
            </div>
            <div className='space-y-4 mt-4'>
                {isLoading && (
                    <Loader />
                )}
                {!video && !isLoading && (
                    <EmptyChat label='Oops! No video generated!'/>
                )}
                <div className='flex flex-col-reverse gap-y-4'>
                    {video && (
                        <video className='w-full aspect-video mt-8 rounded-lg border bg-black' controls>
                            <source src={video} />
                        </video>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default VideoPage;