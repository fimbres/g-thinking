import Heading from '@/components/Heading';
import SubscriptionButton from '@/components/SubscriptionButton';
import { checkSubscription } from '@/lib/subscription';
import { GearIcon } from '@radix-ui/react-icons';
import React from 'react'

const SettingsPage = async () => {
    const isPro = await checkSubscription();

  return (
    <div>
        <Heading
            title='Settings'
            description='Manage account settings.'
            icon={GearIcon}
            iconColor='text-red-500'
            bgColor='bg-red-300'
        />
        <div className='px-4 lg:px-8 space-y-4'>
            <div className='text-muted-foreground text-sm'>
                You are currently on a {isPro ? 'Pro' : 'Free'} plan.
            </div>
            <SubscriptionButton isPro={isPro} />
        </div>
    </div>
  )
}

export default SettingsPage;