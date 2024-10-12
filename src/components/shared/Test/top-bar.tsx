import React from 'react';
import { Clock, Flame, Sparkles } from 'lucide-react';
import { ViewModeGroupButtons } from './view-mode-group-buttons';
import { SortModeGroupButtons } from './sort-mode-group-buttons';

interface Props {
  activeSortMode: string;
  setActiveSortMode: (ViewMode: string) => void;
  activeViewMode: string;
  setActiveViewMode: (ViewMode: string) => void;
}

export const TopBarTest: React.FC<Props> = ({
  activeSortMode,
  setActiveSortMode,
  activeViewMode,
  setActiveViewMode,
}) => {
  return (
    <>
      {activeSortMode === 'raw' ? (
        <div className='flex items-center gap-2 select-none'>
          <h1 className='font-bold text-titanium-200'>Список аниме</h1>
          <Sparkles className='size-6 text-primary-400 drop-shadow-[0_1px_7px_rgba(116,89,255,0.95)]' />
        </div>
      ) : (
        <div className='flex items-center gap-2 select-none'>
          <h1 className='font-bold text-titanium-200'>Лучшие</h1>
          <Flame className='size-7 text-orange-400 drop-shadow-[0_1px_7px_rgba(249,115,22,0.95)]' />
        </div>
      )}
      <div className='flex gap-4'>
        <SortModeGroupButtons
          activeSortMode={activeSortMode}
          setActiveSortMode={setActiveSortMode}
        />
        <ViewModeGroupButtons
          activeViewMode={activeViewMode}
          setActiveViewMode={setActiveViewMode}
        />
      </div>
    </>
  );
};
