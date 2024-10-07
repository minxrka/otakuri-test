import { cn } from '@/src/lib/utils';
import Link from 'next/link';
import React from 'react';

interface Props {
	id: number;
	name: string;
	nameRu: string;
	year: number;
	description: string;
	activeSorting: string;
	className?: string;
}

export const CardDescription: React.FC<Props> = ({
	id,
	name,
	nameRu,
	year,
	description,
	activeSorting,
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
					<span className='underline hover:no-underline cursor-pointer hover:text-primary-400 transition-colors'>
						{year}
					</span>{' '}
					/{' '}
					<span className='underline hover:no-underline cursor-pointer hover:text-primary-400 transition-colors'>
						Сёнен
					</span>
					,{' '}
					<span className='underline hover:no-underline cursor-pointer hover:text-primary-400 transition-colors'>
						Экшен
					</span>
					,{' '}
					<span className='underline hover:no-underline cursor-pointer hover:text-primary-400 transition-colors'>
						Приключения
					</span>
					,{' '}
					<span className='underline hover:no-underline cursor-pointer hover:text-primary-400 transition-colors'>
						Фэнтези
					</span>
				</div>
				{activeSorting === 'list' ? (
					<p
						className={`text-clamp text-pretty max-md:line-clamp-4 text-titanium-300`}>
						{description}
					</p>
				) : null}
			</div>
		</>
	);
};
