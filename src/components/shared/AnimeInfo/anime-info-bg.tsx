import { cn } from '@/src/lib/utils';
import React from 'react';
import Image from 'next/image';

interface Props {
  anime: animesData;
  className?: string;
}

export const AnimeInfoBg: React.FC<Props> = ({ anime, className }) => {
  return (
    <div
      className={cn(
        'absolute top-0 w-full left-0 h-[88vh] items-center justify-center pl-80',
        className
      )}>
      <div className='relative w-full h-screen after:w-full after:h-full after:block after:absolute after:top-0 after:bg-gradient-to-r after:from-[#111111] after:to-[#1111113f] after:via-[#1111119b]'>
        <div className='relative w-full h-screen after:w-full after:h-full after:block after:absolute after:top-0 after:bg-gradient-to-t after:from-[#111111] after:via-[#11111117] after:to-transparent'>
          <div className='relative w-full h-screen after:w-full after:h-full after:block after:absolute after:top-0 after:bg-gradient-to-b after:from-[#111111] after:via-[#1111110d] after:to-transparent'>
            <Image
              width={300}
              height={300}
              src={
                anime.posters.original.wide === null
                  ? 'https://anilibria.top' + anime.posters.original.url
                  : anime.posters.original.wide
              }
              alt={anime.names.ru}
              className='w-full absolute top-0 left-0 right-0 h-screen object-cover object-top select-none pl-3 blur-sm'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
