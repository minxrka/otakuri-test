import { cn } from '@/src/lib/utils';
import Link from 'next/link';
import React from 'react';

interface Props {
  id: number;
  name: string;
  nameRu: string;
  genres: string[];
  year: number;
  description: string;
  activeViewMode: string;
  className?: string;
}

export const CardDescriptionTest: React.FC<Props> = ({
  id,
  name,
  nameRu,
  genres,
  year,
  description,
  activeViewMode,
  className,
}) => {
  return (
    <>
      <div
        className={cn(
          `max-w-[600px] flex flex-col self-start text-titanium-100`,
          className
        )}>
        <div>
          <Link
            href={`/anime/${id}`}
            className='text-clamp-xl font-bold hover:text-primary-400 hover:underline transition-colors'>
            {nameRu}
          </Link>
        </div>
        <span className='text-clamp text-neutral-400'>{name}</span>
        <div className='py-4 text-clamp font-light text-titanium-200'>
          <span className='underline underline-offset-4 hover:no-underline decoration-[0.5px] cursor-pointer hover:text-primary-400 transition-colors'>
            {year}
          </span>{' '}
          /{' '}
          {genres
            .slice(0, genres.length >= 3 ? 4 : genres.length + 1)
            .map((genre, index) => (
              <>
                <span
                  className='underline underline-offset-4 hover:no-underline decoration-[0.5px] cursor-pointer hover:text-primary-400 transition-colors'
                  key={index}>
                  {genre}
                </span>
                <span key={index}>
                  {index < (genres.length > 3 ? 3 : genres.length - 1) && ', '}
                </span>
              </>
            ))}
        </div>
        {activeViewMode === 'list' ? (
          <p
            className={`text-clamp text-balance line-clamp-5 max-md:line-clamp-4 text-titanium-300`}>
            {description}
          </p>
        ) : null}
      </div>
    </>
  );
};