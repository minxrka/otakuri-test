import React from 'react';
import { Clock, Flame, Sparkles } from 'lucide-react';
import { AnimeSort } from './anime-sort';

interface Props {
  activeSorting: string;
  setActiveSorting: (sorting: string) => void;
}

export const TopBar: React.FC<Props> = ({
  activeSorting,
  setActiveSorting,
}) => {
  return (
    <>
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
    </>
  );
};
