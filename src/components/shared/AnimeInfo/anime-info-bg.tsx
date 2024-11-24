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
      <div className='relative w-full h-screen after:w-full after:h-full after:block after:absolute after:top-0 after:bg-gradient-to-r after:from-[#0e0e0e] after:to-[#0e0e0e3f] after:via-[#0e0e0e9b]'>
        <div className='relative w-full h-screen after:w-full after:h-full after:block after:absolute after:top-0 after:bg-gradient-to-t after:from-[#0e0e0e] after:via-[#0e0e0e17] after:to-transparent'>
          <div className='relative w-full h-screen after:w-full after:h-full after:block after:absolute after:top-0 after:bg-gradient-to-b after:from-[#0e0e0e] after:via-[#0e0e0e0d] after:to-transparent'>
            <Image
              width={300}
              height={300}
              loading='lazy'
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
