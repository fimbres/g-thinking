"use client";

import React, { useState } from 'react'
import { Button } from './ui/button';
import { RocketIcon } from '@radix-ui/react-icons';
import axios from 'axios';

interface SubscriptionButtonProps {
    isPro: boolean;
}

const SubscriptionButton: React.FC<SubscriptionButtonProps> = ({ isPro }) => {
    const [isLoading, setIsLoading] = useState(false);
    const handleClick = async () => {
        setIsLoading(true);

        try {
            const response = await axios.get('/api/stripe');
            window.location.href = response.data.url;
        } catch (error) {
            console.error('Billing error: ', error);
        }
        finally {
            setIsLoading(false);
        }
    }

  return (
    <Button variant={isPro ? 'default' : 'secondary'} disabled={isLoading} onClick={handleClick}>
        {isPro ? 'Manage Subscription' : 'Upgrade'}
        {!isPro && <RocketIcon className='w-4 h-4 ml-2 fill-white'/>}
    </Button>
  )
}

export default SubscriptionButton;