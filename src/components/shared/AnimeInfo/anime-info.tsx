import { cn } from '@/src/lib/utils';
import React from 'react';
import Link from 'next/link';
import { Folder, Heart, Play } from 'lucide-react';
import { RippleButton } from '../../ui/ripple-button';

interface Props {
  anime: animesData;
  className?: string;
}

export const AnimeInfo: React.FC<Props> = ({ anime, className }) => {
  return (
    <>
      <section className={cn(`flex flex-col gap-1`, className)}>
        <h1 className='text-clamp-5.5xl text-pretty leading-none font-extrabold text-titanium-100 tracking-[5px]'>
          {anime.names.ru}
        </h1>
        <div className='flex items-center gap-3'>
          <span className='text-xl font-extralight text-titanium-400 tracking-wide'>
            {anime.names.en}
            <RippleButton size='3xs' className='ml-3 align-text-top'>
              {anime.status.code === 2 ? (
                <span>Завершён</span>
              ) : (
                <span>Онгоинг</span>
              )}
            </RippleButton>
          </span>
        </div>
      </section>
      <section className='grid grid-cols-[25%_60%] gap-y-3'>
        <h3 className='text-titanium-200 text-xl'>Жанры:</h3>
        <h3 className='text-titanium-300 text-xl font-extralight'>
          {anime.genres
            .slice(0, anime.genres.length >= 1 ? 2 : anime.genres.length + 1)
            .map((genre, index) => (
              <>
                <span
                  className='hover:text-primary-400 underline hover:no-underline underline-offset-4 decoration-[0.5px] transition-colors cursor-pointer select-none'
                  key={index}>
                  {genre}
                </span>
                <span key={index}>
                  {index <
                    (anime.genres.length > 1 ? 1 : anime.genres.length - 1) &&
                    ', '}
                </span>
              </>
            ))}
        </h3>
        <h3 className='text-titanium-200 text-xl'>Эпизоды:</h3>
        <h3 className='text-titanium-300 text-xl font-extralight select-none'>
          {anime.player.episodes.last > (anime.type.episodes ?? 0) &&
          anime.type.episodes !== null
            ? anime.type.episodes
            : anime.player.episodes.last !== null ? anime.player.episodes.last : '?'}{' '}
          /{' '}
          {anime.type.episodes !== null
            ? anime.type.episodes
            : anime.player.episodes.last ? anime.player.episodes.last : '?'}
        </h3>
        <h3 className='text-titanium-200 text-xl'>Год выпуска:</h3>
        <h3 className='text-titanium-300 text-xl font-extralight'>
          <span className='hover:text-primary-400 underline hover:no-underline underline-offset-4 decoration-[0.5px] transition-colors cursor-pointer select-none'>
            {anime.season.year} г.
          </span>
        </h3>
        <h3 className='text-titanium-200 text-xl'>Тип:</h3>
        <h3 className='text-titanium-300 text-xl font-extralight'>
          <span className='hover:text-primary-400 underline hover:no-underline underline-offset-4 decoration-[0.5px] transition-colors cursor-pointer select-none'>
            {anime.type.string}
          </span>
        </h3>
      </section>
      <section className='flex gap-3'>
        <Link href={`/anime/${anime.id}/watch`} passHref>
          <RippleButton
            size='md'
            startContent={<Play size={18} fill='white' />}
            className='text-lg font-medium px-8'>
            Смотреть
          </RippleButton>
        </Link>
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
