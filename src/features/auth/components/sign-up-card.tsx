'use client'
import { z } from 'zod';
import { DottedSeparator } from '@/components/dotted-separator';
import { Button } from '@/components/ui/button';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from '@/components/ui/input';

const signUpFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(16),
});

export const SignUpCard = () => {
    const form = useForm<z.infer<typeof signUpFormSchema>>({
        resolver: zodResolver(signUpFormSchema),
        defaultValues: {
            email: 'imran0dot@gmail.com',
            password: '12345678',
        },
    });

    const { handleSubmit, control } = form;

    const onSubmit = (data: z.infer<typeof signUpFormSchema>) => {
        console.log(data);
        // Handle the form submission logic here
    };

    return (
        <Card className='w-full h-full md:w-[480px] mx-auto border-none shadow-none px-4'>
            <CardHeader className='flex items-center justify-center text-center'>
                <CardTitle className='text-2xl'>
                    Sign up
                </CardTitle>
                <CardDescription>
                    By signing up, you agree to {""}
                    <Link href={"/privacy-policy"} className='text-purple-700 font-bold'>Privacy Policy</Link> and {" "}
                    <Link href={"/terms-of-service"} className='text-purple-700 font-bold'>Terms of Service</Link>
                </CardDescription>
            </CardHeader>

            <div className='mx-7'>
                <DottedSeparator />
            </div>

            <CardContent className='p-4 flex flex-col gap-6'>
                <Form {...form}>
                    <form className='space-y-5' onSubmit={handleSubmit(onSubmit)}>
                        <FormField
                            name='email'
                            control={control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            className="my-3"
                                            type='email'
                                            placeholder='enter email address'
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            name='password'
                            control={control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            className="my-3"
                                            type='password'
                                            placeholder='enter strong password'
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type='submit' className='w-full'>Sign Up</Button>
                    </form>
                </Form>

                <div className='mx-7'>
                    <DottedSeparator />
                </div>

                <div className='flex flex-col gap-3'>
                    <Button variant={'outline'}>Login with Google <FaGoogle className='ml-2 size-5' />
                    </Button>
                    <Button variant={'outline'}>Login with Github <FaGithub className='ml-2 size-5' />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};




