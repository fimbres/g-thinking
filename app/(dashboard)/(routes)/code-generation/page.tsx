"use client";

import Heading from '@/components/Heading';
import * as z from 'zod';
import axios from 'axios';
import { CodeIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from './constants';
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
import MarkDown from 'react-markdown';
import { useProModal } from '@/hooks/useProModal';

function CodePage() {
  const router = useRouter();
  const proModal = useProModal();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
  const form = useForm<Zod.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        prompt: ""
    }
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
        const userMessage: ChatCompletionRequestMessage = {
            role: 'user',
            content: values.prompt,
        };
        const newMessages = [...messages, userMessage];
        const response = await axios.post("/api/code-generation", {
            messages: newMessages,
        });

        setMessages(currentMessages => [...currentMessages, userMessage, response.data])

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
        <Heading title='Code Generation' description='Generate code using descriptive propmts.' icon={CodeIcon} iconColor='text-red-500' bgColor='bg-red-300' />
        <div className='px-4 lg:px-8'>
            <div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2'>
                        <FormField name='prompt' render={({ field }) => (
                            <FormItem className='col-span-12 lg:col-span-10'>
                                <FormControl className='m-0 p-0'>
                                    <Input className='border-0 outlinenone focus-visible:ring-0 focus-visible:ring-transparent' disabled={isLoading} placeholder='Simple toggle button using React hooks.' {...field}/>
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
                {messages.length === 0 && !isLoading && (
                    <EmptyChat label='Oops! There is no code to show!'/>
                )}
                <div className='flex flex-col-reverse gap-y-4'>
                    {messages.map((message, id) => (
                        <div key={id} className={cn('p-8 w-full flex item-start gap-x-8 rounded-lg', message.role === 'user' ? 'bg-white border border-red/20' : 'bg-muted')}>
                            {message.role === 'user' ? <UserAvatar /> : <BotAvatar />}
                            <MarkDown
                                components={{
                                    pre: ({ node, ...props}) => (
                                        <div className='overflow-auto w-full my.2 bg-black/10 p-2 rounded-lg'>
                                            <pre {...props} />
                                        </div>
                                    ),
                                    code: ({ node, ...props }) => (
                                        <code className='bg-black/10 rounded-lg p-1' {...props} />
                                    )
                                }}
                                className='text-sm overflow-hidden leading-7'
                            >
                                {message.content || ''}
                            </MarkDown>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default CodePage;