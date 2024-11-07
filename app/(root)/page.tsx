import React from 'react';
import { HomeIcon } from 'lucide-react';

export default async function Home() {
  return (
    <>
      <div className='h-[89vh] flex justify-center items-center'>
        <div className='group flex items-center justify-center gap-3 p-3 text-2xl font-bold text-primary-300 hover:text-fuchsia-300 active:text-red-800 cursor-pointer active:translate-x-1 will-change-transform transition-colors-transform duration-300 active:duration-100 select-none'>
          <HomeIcon className='size-10 text-primary-300 group-hover:text-fuchsia-300 group-active:text-red-800 cursor-pointer group-active:translate-x-1 will-change-transform transition-colors-transform duration-300 group-active:duration-100 select-none' />
          Homepage
        </div>
      </div>
    </>
  );
}
