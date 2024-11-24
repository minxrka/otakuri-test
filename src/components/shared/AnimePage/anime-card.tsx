import { MousePointerClick } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  id: number;
  nameRu: string;
  description: string;
  imageUrlRoblox: string;
  imageUrl: string;
  activeViewMode: string;
  className?: string;
}

export const AnimeCard: React.FC<Props> = ({
  id,
  nameRu,
  description,
  imageUrlRoblox,
  imageUrl,
  activeViewMode,
}) => {
  return (
    <>
      <Link
        href={`/anime/${id}`}
        className={`group relative flex h-full flex-col justify-center items-center overflow-hidden rounded-md active:scale-[.97] transition-transform will-change-transform cursor-pointer ${
          activeViewMode === 'grip'
            ? 'hover:translate-y-0.5 w-full'
            : activeViewMode === 'grid'
            ? 'min-w-28'
            : 'min-w-40'
        }`}>
        <Image
          width={300}
          height={300}
          loading='lazy'
          src={activeViewMode === 'grip' ? imageUrlRoblox : imageUrl}
          alt='anime thumbnail'
          className={`relative h-full aspect-[7/10] object-contain transition-transform will-change-transform select-none ${
            activeViewMode === 'grip'
              ? 'group-hover:scale-105 w-full aspect-video'
              : activeViewMode === 'grid'
              ? 'w-28 min-w-28'
              : 'w-40 min-w-40'
          } `}
        />
        <div
          className={`absolute bottom-0 w-full h-full flex flex-col justify-center bg-transparent transition-colors ${
            activeViewMode !== 'grip'
              ? 'items-center group-hover:bg-black/70'
              : 'items-start bg-gradient-to-t from-black/80 to-transparent group-hover:bg-black/60'
          }`}>
          {activeViewMode === 'grip' ? (
            <div className='h-full flex flex-col-reverse justify-between py-1.5 px-2.5'>
              <h2 className='text-clamp max-md:text-[16px] text-left font-medium line-clamp-1 text-pretty text-titanium-100 opacity-100 group-hover:opacity-0 transition-opacity duration-300 select-none'>
                {nameRu}
              </h2>
              <p className='max-md:hidden text-clamp-sm text-left line-clamp-5 my-2 mx-1 text-pretty tracking-wide text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 select-none'>
                {description}
              </p>
            </div>
          ) : (
            <>
              {activeViewMode === 'list' ? (
                <>
                  <div className='flex justify-center items-center gap-2'>
                    <h2
                      className={`text-transparent text-clamp transition-colors font-medium group-hover:text-titanium-100 select-none`}>
                      Подробнее
                    </h2>
                    <MousePointerClick
                      className={`transition-colors text-transparent group-hover:text-titanium-100 select-none}`}
                    />
                  </div>
                </>
              ) : null}
            </>
          )}
        </div>
      </Link>
    </>
  );
};
