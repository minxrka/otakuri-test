import { cn } from '@/src/lib/utils';
import Image from 'next/image';
import React from 'react';

interface Props {
  anime: animesData;
  className?: string;
}

export const AnimeInfoBgTest: React.FC<Props> = ({ anime, className }) => {
  return (
    <div
      className={cn(
        'absolute top-0 w-full left-0 h-[88vh] items-center justify-center pl-80',
        className
      )}>
      <div className='relative w-full h-screen after:w-full after:h-full after:block after:absolute after:top-0 after:bg-gradient-to-r after:from-[#090315] after:to-[#0903153f] after:via-[#0903159b]'>
        <div className='relative w-full h-screen after:w-full after:h-full after:block after:absolute after:top-0 after:bg-gradient-to-t after:from-[#07021d] after:via-[#09031517] after:to-transparent'>
          <div className='relative w-full h-screen after:w-full after:h-full after:block after:absolute after:top-0 after:bg-gradient-to-b after:from-[#07021d] after:via-[#0903150d] after:to-transparent'>
            <Image
              width={300}
              height={300}
              src={
                anime.posters.original.wide === null
                  ? 'https://anilibria.top' + anime.posters.original.url
                  : anime.posters.original.wide
              }
              alt={anime.names.ru}
              className='w-full absolute top-0 left-0 right-0 h-screen aspect-vide object-cover object-top select-none pl-px'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
