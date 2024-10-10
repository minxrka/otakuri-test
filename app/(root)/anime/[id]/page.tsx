'use client';

import { useParams } from 'next/navigation';
import React from 'react';
import animes from '/src/data/animes.json';
import { RippleButton } from '@/src/components/ui/ripple-button';
import Link from 'next/link';
import { CircleArrowRight } from 'lucide-react';

export default function WatchPage() {
  const { id } = useParams();
  const anime = animes.find((anime) => anime.id === parseInt(id as string));
  const random = Math.floor(Math.random() * 10);

  return (
    <>
      <div className='h-[92vh] flex flex-col items-center justify-center'>
        {!anime ? (
          <div className='flex flex-col items-center justify-center gap-3'>
            <div className='text-lg font-bold text-primary-300 hover:text-fuchsia-300 active:text-red-800 cursor-pointer active:translate-x-1 will-change-transform transition-colors-transform duration-300 active:duration-100 select-none'>
              Аниме не найдено (id: {id})
            </div>
            <Link href={`/anime/${random}`} passHref>
              <RippleButton>Random next?</RippleButton>
            </Link>
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center gap-2 p-8 rounded-2xl bg-gradient-to-r from-fuchsia-800 to-primary-800 bg-[length:400%_400%] animate-gradient'>
            <h1 className='px-3 pt-3 text-3xl font-extrabold text-primary-200 hover:text-fuchsia-300 active:text-red-800 cursor-pointer active:translate-x-1 will-change-transform transition-colors-transform duration-300 active:duration-100 select-none'>
              {anime.nameRu}
            </h1>
            <h2 className='px-3 pb-3 text-lg text-primary-200 hover:text-fuchsia-300 active:text-red-800 cursor-pointer active:translate-x-1 will-change-transform transition-colors-transform duration-300 active:duration-100 select-none'>
              anime id: {id}
            </h2>
            <img
              className='w-[500px] aspect-video rounded-3xl object-cover select-none mb-4'
              src={anime.imageUrl}
              alt={anime.nameRu}
            />
            <Link href={`/anime/${random}`} passHref>
              <RippleButton
                variant='header'
                className='hover:bg-red-500/90'
                endContent={<CircleArrowRight />}>
                Random next?
              </RippleButton>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
