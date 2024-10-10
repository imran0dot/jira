import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
interface IAuthLayoutProps {
    children: React.ReactNode
}
const AuthLayout = ({ children }: IAuthLayoutProps) => {
    return (
        <div className='bg-neutral-100 min-h-screen'>
            <div className='mx-auto max-w-screen-2xl p-4'>
                <nav className='flex justify-between items-center'>
                    <Image width={150} height={55} src={"/logo.svg"} alt={'logo'} />
                    <div className='flex items-center gap-2'>
                        <Button variant={'secondary'}>Sign Up</Button>
                    </div>
                </nav>

                <div className='flex flex-col justify-center pt-4 md:pt-14'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;