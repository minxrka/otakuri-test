import React from 'react';
import { AnimeCard } from './anime-card';
import { CardDescription } from './card-description';

interface Props {
  id: number;
  name: string;
  nameRu: string;
  year: number;
  description: string;
  genres: string;
  imageUrlRoblox: string;
  imageUrl: string;
  activeSorting: string;
}

export const AnimeCardWithDescription: React.FC<Props> = ({
  id,
  name,
  nameRu,
  year,
  description,
  genres,
  imageUrl,
  imageUrlRoblox,
  activeSorting,
}) => {
  return (
    <>
      <div className='w-full flex gap-5'>
        <AnimeCard
          id={id}
          name={name}
          genres={genres}
          imageUrlRoblox={imageUrlRoblox}
          imageUrl={imageUrl}
          activeSorting={activeSorting}
        />
        {activeSorting !== 'grip' ? (
          <CardDescription
            id={id}
            nameRu={nameRu}
            name={name}
            year={year}
            description={description}
            activeSorting={activeSorting}
          />
        ) : null}
      </div>
    </>
  );
};
