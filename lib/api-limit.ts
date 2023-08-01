import { auth } from '@clerk/nextjs';

import prismadb from './prismadb';
import { MAX_FREE_COUNTS } from '@/constants';

export const increaseApiLimit = async () => {
    const { userId } = auth();

    if (!userId) {
        return;
    }

    const userApiLimit = await prismadb.userAPILimit.findUnique({
        where: {
            userId
        }
    });

    if(userApiLimit) {
        await prismadb.userAPILimit.update({
            where: {
                userId
            },
            data: {
                count: userApiLimit.count + 1
            }
        });
    }
    else {
        await prismadb.userAPILimit.create({
            data: {
                userId, count: 1
            }
        })
    }
}

export const checkAPILimit = async () => {
    const { userId } = auth();

    if(!userId) {
        return false;
    }

    const userAPILimit = await prismadb.userAPILimit.findUnique({
        where: {
            userId
        }
    });

    if(!userAPILimit || userAPILimit.count < MAX_FREE_COUNTS) {
        return true;
    }
    else return false;
}

export const getAPILimitCount = async () => {
    const { userId } = auth();

    if (!userId) {
        return 0;
    }

    const userAPILimit = await prismadb.userAPILimit.findUnique({
        where: {
            userId
        }
    });

    if(!userAPILimit) {
        return 0;
    }

    return userAPILimit.count;
}