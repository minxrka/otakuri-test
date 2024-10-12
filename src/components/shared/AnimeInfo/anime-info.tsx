import { cn } from '@/src/lib/utils';
import React from 'react';
import { Folder, Heart, Play } from 'lucide-react';
import { RippleButton } from '../../ui/ripple-button';

interface Props {
  anime: Anime;
  className?: string;
}

export const AnimeInfo: React.FC<Props> = ({ anime, className }) => {
  return (
    <>
      <section className={cn(`flex flex-col gap-1`, className)}>
        <h1 className='text-clamp-5.5xl text-pretty leading-none font-extrabold text-titanium-100 tracking-[5px]'>
          {anime.nameRu}
        </h1>
        <div className='flex items-center gap-3'>
          <span className='text-xl font-extralight text-titanium-400 tracking-wide'>
            {anime.name}
          </span>
          <RippleButton size='3xs'>{anime.status}</RippleButton>
        </div>
      </section>
      <section className='grid grid-cols-[25%_60%] gap-y-3'>
        <h3 className='text-titanium-200 text-xl'>Жанры:</h3>
        <h3 className='text-titanium-300 text-xl font-extralight'>
          {anime.genres}
        </h3>
        <h3 className='text-titanium-200 text-xl'>Эпизоды:</h3>
        <h3 className='text-titanium-300 text-xl font-extralight'>
          {anime.episodesReleased} / {anime.episodesTotal}
        </h3>
        <h3 className='text-titanium-200 text-xl'>Год выпуска:</h3>
        <h3 className='text-titanium-300 text-xl font-extralight'>
          <span className='hover:text-primary-400 hover:underline transition-colors cursor-pointer'>
            {anime.year} г.
          </span>
        </h3>
        <h3 className='text-titanium-200 text-xl'>Студия:</h3>
        <h3 className='text-titanium-300 text-xl font-extralight'>
          <span className='hover:text-primary-400 hover:underline transition-colors cursor-pointer'>
            {anime.studio}
          </span>
        </h3>
      </section>
      <section className='flex gap-3'>
        <RippleButton
          size='md'
          startContent={<Play size={18} fill='white' />}
          className='text-lg font-medium px-8'>
          Смотреть
        </RippleButton>
        <RippleButton size='md' className='text-lg font-medium px-8'>
          Трейлер
        </RippleButton>
        <RippleButton isIconOnly size='icon'>
          <Heart size={18} fill='white' />
        </RippleButton>
        <RippleButton isIconOnly size='icon'>
          <Folder size={18} fill='white' />
        </RippleButton>
      </section>
    </>
  );
};
