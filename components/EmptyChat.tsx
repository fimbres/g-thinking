import React from 'react'
import Image from 'next/image'

interface EmptyChatProps {
    label: string;
}

const EmptyChat: React.FC<EmptyChatProps> = ({
    label
}) => {
  return (
    <div className='h-full p-20 flex flex-col items-center justify-center'>
        <div className='relative h-72 w-72'>
            <Image alt='Empty' fill src='/../public/empty.png'/>
        </div>
        <p className='text-muted-foreground text-sm text-center'>{label}</p>
    </div>
  )
}

export default EmptyChat;
