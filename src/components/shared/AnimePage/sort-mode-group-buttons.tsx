import { cn } from '@/src/lib/utils';
import { ButtonGroup } from '@nextui-org/button';
import { Flame, Sparkles } from 'lucide-react';
import React from 'react';
import { RippleButton } from '../../ui/ripple-button';

interface Props {
  activeSortMode: string;
  setActiveSortMode: (ViewMode: string) => void;
  className?: string;
}

export const SortModeGroupButtons: React.FC<Props> = ({
  activeSortMode,
  setActiveSortMode,
  className,
}) => {
  const handleChangeSortMode = (component: 'raw' | 'hot') => {
    setActiveSortMode(component);
  };

  return (
    <div className={cn('flex gap-1', className)}>
      <ButtonGroup size='lg' className='flex-row-reverse'>
        <RippleButton
          size='2xs'
          variant={activeSortMode === 'hot' ? 'sortButton' : 'mode'}
          onClick={() => handleChangeSortMode('hot')}>
          <Flame size={20} />
        </RippleButton>
        <RippleButton
          size='2xs'
          variant={activeSortMode === 'raw' ? 'sortButton' : 'mode'}
          onClick={() => handleChangeSortMode('raw')}>
          <Sparkles size={20} />
        </RippleButton>
      </ButtonGroup>
    </div>
  );
};
