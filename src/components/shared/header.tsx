import { cn } from '@/src/lib/utils';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui';

interface Props {
	className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<header
			className={cn(
				'absolute flex py-4 gap-3 top-0 max-sm:left-0 max-sm:right-0 max-sm:w-full items-center max-sm:flex-col max-sm:justify-center',
				className
			)}>
			<Link href='/' passHref>
				<Button
					className='h-10 max-sm:h-7 px-8 rounded-[25px] bg-primary-500/40'
					variant='default'>
					Homepage
				</Button>
			</Link>
			<Link href='/anime' passHref>
				<Button
					className='h-10 max-sm:h-7 px-8 rounded-[25px] bg-primary-500/40'
					variant='default'>
					Anime Page
				</Button>
			</Link>
			<Link href='/anime/666' passHref>
				<Button
					className='h-10 max-sm:h-7 px-8 rounded-[25px] bg-primary-500/40'
					variant='default'>
					Watch Page
				</Button>
			</Link>
		</header>
	);
};
