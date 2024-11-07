'use client';

import React, { useEffect } from 'react';
import animeData from '/src/data/animeData.json';
import { RippleButton } from '@/src/components/ui/ripple-button';
import Link from 'next/link';
import { AnimeInfoBg } from '@/src/components/shared/AnimeInfo/anime-info-bg';
import { AnimeInfo } from '@/src/components/shared/AnimeInfo/anime-info';
import { useParams } from 'next/navigation';

export default function AnimeInfoPage() {
  const { id } = useParams();
  const AnimeData = animeData.list.find(
    (anime) => anime.id === parseInt(id as string)
  );
  
  useEffect(() => {
    if (AnimeData) {
      document.title = `${AnimeData.names.ru} | Otakuri`;
    }
  }, [AnimeData]);

  return (
    <>
      <div>
        {!AnimeData ? (
          <div className='flex flex-col h-[89vh] items-center justify-center gap-3'>
            <div className='text-lg font-bold text-primary-300 hover:text-fuchsia-300 active:text-red-800 cursor-pointer active:translate-x-1 will-change-transform transition-colors-transform duration-300 active:duration-100 select-none'>
              Аниме не найдено (id: {id})
            </div>
            <Link
              href={`/anime/${
                animeData.list.map((anime) => anime.id)[
                  Math.floor(
                    Math.random() *
                      animeData.list.map((anime) => anime.id).length
                  )
                ]
              }`}
              passHref>
              <RippleButton>Random next?</RippleButton>
            </Link>
          </div>
        ) : (
          <>
            <AnimeInfoBg anime={AnimeData} />
            <main className='relative max-w-[820px] h-[88vh] flex flex-col justify-center gap-8'>
              <AnimeInfo anime={AnimeData} />
            </main>
          </>
        )}
      </div>
    </>
  );
}
