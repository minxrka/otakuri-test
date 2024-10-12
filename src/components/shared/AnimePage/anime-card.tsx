import { MousePointerClick } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface Props {
  id: number;
  name: string;
  genres: string;
  imageUrlRoblox: string;
  imageUrl: string;
  activeSorting: string;
  className?: string;
}

export const AnimeCard: React.FC<Props> = ({
  id,
  name,
  genres,
  imageUrlRoblox,
  imageUrl,
  activeSorting,
  className,
}) => {
  return (
    <div className={className}>
      <Link
        href={`/anime/${id}`}
        className={`group relative flex justify-center items-center overflow-hidden rounded-md active:scale-[.97] transition-transform will-change-transform cursor-pointer ${
          activeSorting === 'grip' ? 'hover:translate-y-0.5' : null
        }`}>
        <img
          className={`relative object-cover transition-transform will-change-transform select-none ${
            activeSorting === 'grip'
              ? 'group-hover:scale-105 aspect-video w-full'
              : activeSorting === 'grid'
              ? 'w-28 min-w-28 aspect-[9/14]'
              : 'w-40 min-w-40 aspect-[9/14]'
          } `}
          src={activeSorting === 'grip' ? imageUrlRoblox : imageUrl}
          alt='anime thumbnail'
        />
        <div
          className={`absolute bottom-0 w-full h-full flex flex-col justify-center items-center bg-transparent transition-colors ${
            activeSorting !== 'grip'
              ? 'group-hover:bg-black/40'
              : 'group-hover:bg-black/60'
          }`}>
          {activeSorting === 'grip' ? (
            <div className='flex flex-col justify-center items-center'>
              <h2 className='text-transparent transition-colors font-medium text-clamp-lg group-hover:text-titanium-100 select-none'>
                {name}
              </h2>
              <p className='text-transparent transition-colors text-clamp-sm text-center group-hover:text-neutral-400 select-none'>
                {genres}
              </p>
            </div>
          ) : (
            <div className='flex justify-center items-center gap-2'>
              {activeSorting === 'list' ? (
                <>
                  <h2
                    className={`text-transparent text-clamp transition-colors font-medium group-hover:text-titanium-100 select-none`}>
                    Подробнее
                  </h2>
                  <MousePointerClick
                    className={`transition-colors text-transparent group-hover:text-titanium-100 select-none}`}
                  />
                </>
              ) : null}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};
