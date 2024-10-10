import React from 'react';
import { Beer } from 'lucide-react';
import { RippleButton } from '@/src/components/ui/ripple-button';
import Link from 'next/link';

export default async function Home() {
  return (
    <>
      <div className='h-[92vh] flex flex-col justify-center items-center gap-4'>
        <h1 className='text-3xl font-extrabold text-primary-300'>ЛОГИН!!!!!</h1>
        <Beer className='size-16 m-2 text-white hover:text-amber-200 hover:drop-shadow-[0_2px_30px_rgba(252,211,77,0.65)] hover:translate-y-0.5 will-change-transform transition-colors-transform duration-500' />
        <Link href='/login' passHref>
          <RippleButton variant='header'>Войти</RippleButton>
        </Link>
        <Link href='/register' passHref>
          <RippleButton variant='header'>Регистрация</RippleButton>
        </Link>
      </div>
    </>
  );
}
