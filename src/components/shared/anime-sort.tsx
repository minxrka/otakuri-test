import { cn } from '@/src/lib/utils';
import { Grip, LayoutGrid, LayoutList } from 'lucide-react';
import React from 'react';

interface Props {
	activeSorting: string;
	setActiveSorting: (sorting: string) => void;
	className?: string;
}

export const AnimeSort: React.FC<Props> = ({
	activeSorting,
	setActiveSorting,
	className,
}) => {
	const handleSortClick = (component: 'grip' | 'grid' | 'list') => {
		setActiveSorting(component);
	};

	return (
		<div className={cn('flex gap-1', className)}>
			<Grip
				className={`${
					activeSorting === 'grip'
						? 'bg-primary-500/40'
						: 'hover:text-neutral-400'
				} size-8 p-1.5 text-titanium-200 rounded-lg transition-colors cursor-pointer`}
				onClick={() => handleSortClick('grip')}
			/>
			<LayoutGrid
				className={`${
					activeSorting === 'grid'
						? 'bg-primary-500/40'
						: 'hover:text-neutral-400'
				} size-8 p-1.5 text-titanium-200 rounded-lg transition-colors cursor-pointer`}
				onClick={() => handleSortClick('grid')}
			/>
			<LayoutList
				className={`${
					activeSorting === 'list'
						? 'bg-primary-500/40'
						: 'hover:text-neutral-400'
				} size-8 p-1.5 text-titanium-200 rounded-lg transition-colors cursor-pointer`}
				onClick={() => handleSortClick('list')}
			/>
		</div>
	);
};
