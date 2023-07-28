import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { currentUser } from '@clerk/nextjs';
import { ArrowRightIcon, ChatBubbleIcon, CodeIcon, ImageIcon, VideoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export default async function Home() {
  const user = await currentUser();
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

  return (
    <main className="flex h-min-screen flex-col items-center px-4 md:px-12 lg:px-20 py-5">
      <div className='flex flex-col justify-center align-center'>
        <div className='md:text-6xl text-4xl font-bold text-center'>Welcome back{user?.username && ', ' + user.username}!</div>
        <p className='mt-5 text-muted-foreground font-light text-md ms:text-lg text-center'>Interact with the smartest AI, and be aware of the power of the AI</p>
      </div>
      <div className='space-y-4 w-full py-20'>
        {tools.map(tool => (
          <Link key={tool.href} href={tool.href}>
            <Card className='p-2 border-black/5 flex items-center justify-between hover:shadow-lg transition cursor-pointer'>
              <div className={cn('p-2 w-fit rounded-md flex items-center', "text-gray-200")}>
                <div className='rounded-lg bg-red-300 p-3 mr-4'>
                  <tool.icon className={cn('w-8 h-8 text-red-700')} />
                </div>
                <p className='font-bold text-gray-500'>{tool.label}</p>
              </div>
              <ArrowRightIcon className='w-6 h-6' />
            </Card>
          </Link>
        ))}
      </div>
    </main>
  )
}
