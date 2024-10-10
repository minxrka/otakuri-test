import { cn } from '@/src/lib/utils';
import { ButtonGroup } from '@nextui-org/button';
import { Grip, LayoutGrid, LayoutList } from 'lucide-react';
import React from 'react';
import { RippleButton } from '../ui/ripple-button';

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
          size='xxs'
          variant={activeSorting === 'list' ? 'default' : 'sort'}
          onClick={() => handleSortClick('list')}>
          <LayoutList size={20} />
        </RippleButton>
        <RippleButton
          size='xxs'
          variant={activeSorting === 'grid' ? 'default' : 'sort'}
          onClick={() => handleSortClick('grid')}>
          <LayoutGrid size={20} />
        </RippleButton>
        <RippleButton
          size='xxs'
          variant={activeSorting === 'grip' ? 'default' : 'sort'}
          onClick={() => handleSortClick('grip')}>
          <Grip size={20} />
        </RippleButton>
      </ButtonGroup>
    </div>
  );
};
