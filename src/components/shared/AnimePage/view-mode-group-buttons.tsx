import { cn } from '@/src/lib/utils';
import { ButtonGroup } from '@nextui-org/button';
import { Grip, LayoutGrid, LayoutList } from 'lucide-react';
import React from 'react';
import { RippleButton } from '../../ui/ripple-button';

interface Props {
  activeViewMode: string;
  setActiveViewMode: (ViewMode: string) => void;
  className?: string;
}

export const ViewModeGroupButtons: React.FC<Props> = ({
  activeViewMode,
  setActiveViewMode,
  className,
}) => {
  const handleChangeViewMode = (component: 'grip' | 'grid' | 'list') => {
    setActiveViewMode(component);
  };

  return (
    <div className={cn('flex gap-1', className)}>
      <ButtonGroup size='lg' className='flex-row-reverse'>
        <RippleButton
          size='2xs'
          variant={activeViewMode === 'list' ? 'sortButton' : 'mode'}
          onClick={() => handleChangeViewMode('list')}>
          <LayoutList size={20} />
        </RippleButton>
        <RippleButton
          size='2xs'
          variant={activeViewMode === 'grid' ? 'sortButton' : 'mode'}
          onClick={() => handleChangeViewMode('grid')}>
          <LayoutGrid size={20} />
        </RippleButton>
        <RippleButton
          size='2xs'
          variant={activeViewMode === 'grip' ? 'sortButton' : 'mode'}
          onClick={() => handleChangeViewMode('grip')}>
          <Grip size={20} />
        </RippleButton>
      </ButtonGroup>
    </div>
  );
};
