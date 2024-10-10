'use client';

import { AnimeCardWithDescription, AnimeSort } from '@/src/components/shared';
import { Clock, Flame, Sparkles } from 'lucide-react';
import React, { useState } from 'react';
import animes from '/src/data/animes.json';

export default function AnimePage() {
  const [activeSorting, setActiveSorting] = useState('list');

  return (
    <>
      <div className='flex flex-col max-w-[1220px] mx-auto gap-8 mb-6 mt-20'>
        <div className='flex items-center justify-between text-clamp-2xl'>
          {activeSorting === 'grip' ? (
            <div className='flex items-center gap-2 select-none'>
              <h1 className='font-bold text-titanium-200'>Лучшие</h1>
              <Flame className='size-7 text-orange-400 drop-shadow-[0_1px_7px_rgba(249,115,22,0.95)]' />
            </div>
          ) : activeSorting === 'grid' ? (
            <div className='flex items-center gap-2 select-none'>
              <h1 className='font-bold text-titanium-200'>Новинки</h1>
              <Clock className='size-6 text-emerald-500 drop-shadow-[0_1px_7px_rgba(16,185,129,0.95)]' />
            </div>
          ) : (
            <div className='flex items-center gap-2 select-none'>
              <h1 className='font-bold text-titanium-200'>Список аниме</h1>
              <Sparkles className='size-6 text-primary-400 drop-shadow-[0_1px_7px_rgba(116,89,255,0.95)]' />
            </div>
          )}
          <AnimeSort
            activeSorting={activeSorting}
            setActiveSorting={setActiveSorting}
          />
        </div>
        <div
          className={`flex flex-col justify-center items-center ${
            activeSorting === 'grip'
              ? 'grid grid-cols-4 max-md:grid-cols-2 gap-6'
              : activeSorting === 'grid'
              ? 'grid grid-cols-2 max-md:grid-cols-1 gap-6'
              : 'gap-9'
          }`}>
          {[...Array(6)].map(() =>
            animes.map((anime: Anime) => (
              <AnimeCardWithDescription
                key={anime.id}
                id={anime.id}
                nameRu={anime.nameRu}
                name={anime.name}
                year={anime.year}
                description={anime.description}
                genres={anime.genres}
                imageUrlRoblox={anime.imageUrlRoblox}
                imageUrl={anime.imageUrl}
                activeSorting={activeSorting}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}
