import React from 'react';
import { AnimeCard } from './anime-card';
import { CardDescription } from './card-description';

interface Props {
  id: number;
  name: string;
  nameRu: string;
  year: number;
  description: string;
  genres: string[];
  imageUrlRoblox: string;
  imageUrl: string;
  activeViewMode: string;
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
  activeViewMode,
}) => {
  return (
    <>
      <div className='w-full h-full flex gap-5'>
        <AnimeCard
          id={id}
          nameRu={nameRu}
          description={description}
          imageUrlRoblox={imageUrlRoblox}
          imageUrl={imageUrl}
          activeViewMode={activeViewMode}
        />
        {activeViewMode !== 'grip' ? (
          <CardDescription
            id={id}
            nameRu={nameRu}
            name={name}
            genres={genres}
            year={year}
            description={description}
            activeViewMode={activeViewMode}
          />
        ) : null}
      </div>
    </>
  );
};
