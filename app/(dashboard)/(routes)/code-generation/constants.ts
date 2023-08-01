import * as z from 'zod';

export const formSchema = z.object({
    prompt: z.string().min(3, {
        message: 'Prompt is required',
    })
});
