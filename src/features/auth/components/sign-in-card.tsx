
'use client'
import { z } from 'zod';
import { DottedSeparator } from '@/components/dotted-separator'
import { Button } from '@/components/ui/button';
import { FaGoogle, FaGithub } from 'react-icons/fa'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';


const singInZodSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, "Required").max(16)
})
export const SignInCard = () => {
    const form = useForm<z.infer<typeof singInZodSchema>>({
        resolver: zodResolver(singInZodSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const handleSignInSubmit = (data: z.infer<typeof singInZodSchema>) => {
        console.log(data);
    }

    return (
        <Card className='w-full h-full md:w-[480px] mx-auto border-none shadow-none px-4'>

            <CardHeader className='flex items-center justify-center text-center'>
                <CardTitle className='text-2xl'>
                    Sign in
                </CardTitle>


                <CardDescription>

                </CardDescription>
            </CardHeader>

            <div className='mx-7'>
                <DottedSeparator />
            </div>

            <CardContent className='space-y-7'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSignInSubmit)} className="space-y-5">
                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            type='email'
                                            placeholder='Enter Email Address'
                                            {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name='password'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            type='password'
                                            placeholder='Enter Your Password'
                                            {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormMessage />
                        <Button className='w-full'> Login </Button>

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
    )
}