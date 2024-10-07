'use client';

import { useParams } from 'next/navigation';
import React from 'react';

export default function WatchPage() {
	const { id } = useParams();

	return (
		<>
			<div className='h-screen flex flex-col items-center justify-center'>
				<h1 className='px-3 pt-3 text-3xl font-extrabold text-primary-300 hover:text-fuchsia-300 active:text-red-800 cursor-pointer active:translate-x-1 will-change-transform transition-colors-transform duration-300 active:duration-100 select-none'>
					{id === '0'
						? 'Наруто'
						: id === '1'
						? 'Блич'
						: id === '2'
						? 'Тетрадь Смерти'
						: id === '3'
						? 'Ван-Пис'
						: id === '4'
						? 'Магическая битва'
						: id === '5'
						? 'Токийский гуль'
						: null}
				</h1>
				<h2 className='p-1 text-lg font-light text-primary-300 hover:text-fuchsia-300 active:text-red-800 cursor-pointer active:translate-x-1 will-change-transform transition-colors-transform duration-300 active:duration-100 select-none'>
					anime id: {id}
				</h2>
			</div>
		</>
	);
}
