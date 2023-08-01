"use client";

import Heading from '@/components/Heading';
import * as z from 'zod';
import axios from 'axios';
import { ChatBubbleIcon, DownloadIcon, ImageIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { amountOptions, formSchema, resolutionOptions } from './constants';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { ChatCompletionRequestMessage } from 'openai';
import EmptyChat from '@/components/EmptyChat';
import Loader from '@/components/Loader';
import { cn } from '@/lib/utils';
import UserAvatar from '@/components/UserAvatar';
import BotAvatar from '@/components/BotAvatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select';
import { Card, CardFooter } from '@/components/ui/card';
import Image from 'next/image';

function ConversationPage() {
  const router = useRouter();
  const [images, setImages] = useState([]);
  const form = useForm<Zod.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        prompt: "",
        amount: "1",
        resolution:  "256x256"
    }
  });
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
        setImages([]);

        const response = await axios.post("/api/image-generation", values);
        const urls = response.data.map((image: { url: string }) => image.url);

        setImages(urls);
        form.reset();
    } catch (error) {
        console.error(error);
    } finally {
        router.refresh();
    }
  }

  return (
    <div className='w-full'>
        <Heading title='Image Generation' description='Turn your prompt into an image.' icon={ImageIcon} iconColor='text-red-500' bgColor='bg-red-300' />
        <div className='px-4 lg:px-8'>
            <div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2'>
                        <FormField name='prompt' render={({ field }) => (
                            <FormItem className='col-span-12 lg:col-span-10'>
                                <FormControl className='m-0 p-0'>
                                    <Input className='border-0 outlinenone focus-visible:ring-0 focus-visible:ring-transparent' disabled={isLoading} placeholder='A picture of a duck with cowboy hat.' {...field}/>
                                </FormControl>
                            </FormItem>
                        )}/>
                        <FormField name='amount' control={form.control} render={({ field }) => (
                            <FormItem className='col-span-12 lg:col-span-2 bg-red-400'>
                                <Select
                                    disabled={isLoading}
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue defaultValue={field.value}/>
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {amountOptions.map(option => (
                                            <SelectItem key={option.value} value={option.value}>
                                                {option.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )}/>
                        <FormField name='resolution' control={form.control} render={({ field }) => (
                            <FormItem className='col-span-12 lg:col-span-2 bg-red-400'>
                                <Select
                                    disabled={isLoading}
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue defaultValue={field.value}/>
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {resolutionOptions.map(option => (
                                            <SelectItem key={option} value={option}>
                                                {option}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
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
                {images.length === 0 && !isLoading && (
                    <EmptyChat label='Oops! No images generated!'/>
                )}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8'>
                    {images.map(src => {
                        return (
                            <Card
                                key={src}
                                className='round-lg overflow-hidden'
                            >
                                <div className='aspect-square relative'>
                                    <Image alt='image' fill src={src}/>
                                </div>
                                <CardFooter className='p-2'>
                                    <Button className='w-full' variant='secondary' disabled={isLoading} onClick={() => window.open(src)}>
                                        <DownloadIcon className='w-4 h-4 mr-2' />
                                        Download
                                    </Button>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ConversationPage;