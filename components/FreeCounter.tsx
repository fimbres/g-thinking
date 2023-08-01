"use client";

import React, { useEffect, useState } from 'react'
import { Card, CardContent } from './ui/card';
import { MAX_FREE_COUNTS } from '@/constants';
import { Progress } from './ui/progress';
import { Button } from './ui/button';
import { RocketIcon } from '@radix-ui/react-icons';

interface FreeCounterProps {
    apiLimitCounter: number;
}

const FreeCounter: React.FC<FreeCounterProps> = ({ apiLimitCounter }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  
    return () => {
      setMounted(false);
    }
  }, []);

  if(!mounted){
    return null;
  }
    
  return (
    <div className='px-3'>
        <Card className='bg-red-400/50 border-0'>
          <CardContent className='py-6'>
              <div className='text-center text-md text-white mb-4 space-y-2'>
                  <p>{apiLimitCounter} / {MAX_FREE_COUNTS} Free Generations</p>
              </div>
              <Progress className='h-3' value={(apiLimitCounter / MAX_FREE_COUNTS) * 100} />
            <Button className='w-full mt-2' >
              Upgrade
              <RocketIcon className='w-4 h-4 ml-2 fill-white'/>
            </Button>
          </CardContent>
        </Card>
    </div>
  )
}

export default FreeCounter;
