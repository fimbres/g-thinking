import { useUser } from '@clerk/nextjs';
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const UserAvatar = () => {
  const { user } = useUser();

  return (
    <Avatar className='h-12 w-12'>
        <AvatarImage src={user?.profileImageUrl}/>
        <AvatarFallback>
            {user?.username?.charAt(0)}
        </AvatarFallback>
    </Avatar>
  )
}

export default UserAvatar;