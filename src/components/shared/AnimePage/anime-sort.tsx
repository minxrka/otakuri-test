import { cn } from '@/src/lib/utils';
import { ButtonGroup } from '@nextui-org/button';
import { Grip, LayoutGrid, LayoutList } from 'lucide-react';
import React from 'react';
import { RippleButton } from '../../ui/ripple-button';

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
      <ButtonGroup size='lg' className='flex-row-reverse'>
        <RippleButton
          size='2xs'
          variant={activeSorting === 'list' ? 'default' : 'sortButton'}
          onClick={() => handleSortClick('list')}>
          <LayoutList size={20} />
        </RippleButton>
        <RippleButton
          size='2xs'
          variant={activeSorting === 'grid' ? 'default' : 'sortButton'}
          onClick={() => handleSortClick('grid')}>
          <LayoutGrid size={20} />
        </RippleButton>
        <RippleButton
          size='2xs'
          variant={activeSorting === 'grip' ? 'default' : 'sortButton'}
          onClick={() => handleSortClick('grip')}>
          <Grip size={20} />
        </RippleButton>
      </ButtonGroup>
    </div>
  );
};
