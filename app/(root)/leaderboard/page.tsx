import React from 'react';
import { Beer } from 'lucide-react';

export default async function Home() {
  return (
    <>
      <div className='h-[92vh] flex flex-col justify-center items-center'>
        <h1 className='px-2 py-1 text-lg font-medium text-primary-300 hover:text-fuchsia-300 active:text-red-800 cursor-pointer active:translate-x-1 will-change-transform transition-colors-transform duration-300 active:duration-100 select-none'>
          ЛИДЕРЫ ПО УПОТРЕБЛЕНИЮ ПИВА
        </h1>
        <Beer className='size-16 m-2 text-white hover:text-amber-200 hover:drop-shadow-[0_2px_30px_rgba(252,211,77,0.65)] hover:translate-y-0.5 will-change-transform transition-colors-transform duration-500' />
        <h1 className='px-2 text-3xl font-extrabold text-primary-300 hover:text-fuchsia-300 active:text-red-800 cursor-pointer active:translate-x-1 will-change-transform transition-colors-transform duration-300 active:duration-100 select-none'>
          1. минорка
        </h1>
      </div>
    </>
  );
}
