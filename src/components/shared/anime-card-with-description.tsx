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
	imageUrl: string;
	imageUrlList: string;
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
	imageUrlList,
	activeSorting,
}) => {
	return (
		<>
			<div className='w-full flex gap-5'>
				<AnimeCard
					id={id}
					name={name}
					genres={genres}
					imageUrl={imageUrl}
					imageUrlList={imageUrlList}
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
