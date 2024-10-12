'use client';

import React, { useEffect, useState, useRef } from 'react';
import animeData from '/src/data/animeData.json';
import { AnimeCardWithDescriptionTest } from '@/src/components/shared/Test/anime-card-with-description';
import { TopBarTest } from '@/src/components/shared/Test/top-bar';

export default function AnimePageTest() {
  const [activeSortMode, setActiveSortMode] = useState('hot');
  const [activeViewMode, setActiveViewMode] = useState('list');
  const [itemsToShow, setItemsToShow] = useState(10);
  const [sortedData, setSortedData] = useState(
    [...animeData.list].sort((a, b) => b.in_favorites - a.in_favorites)
  );
  const [listFullyRendered, setListFullyRendered] = useState(false);

  const loadMoreRef = useRef(null);

  const handleLazyLoad = () => {
    setItemsToShow(itemsToShow + 10);
  };

  useEffect(() => {
    if (activeSortMode === 'hot') {
      setSortedData(
        [...animeData.list].sort((a, b) => b.in_favorites - a.in_favorites)
      );
    } else {
      setSortedData(animeData.list);
    }
  }, [activeSortMode]);

  useEffect(() => {
    if (activeViewMode === 'grip') {
      setItemsToShow(12);
    } else {
      setItemsToShow(10);
    }
  }, [activeViewMode]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && listFullyRendered) {
          handleLazyLoad();
        }
      },
      {
        rootMargin: '100px',
      }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [itemsToShow, listFullyRendered]);

  useEffect(() => {
    setListFullyRendered(true);
  }, [sortedData]);

  return (
    <>
      <div className='flex flex-col max-w-[1220px] mx-auto gap-8 mb-6 mt-16'>
        <div className='flex items-center justify-between text-clamp-2xl'>
          <TopBarTest
            activeSortMode={activeSortMode}
            setActiveSortMode={setActiveSortMode}
            activeViewMode={activeViewMode}
            setActiveViewMode={setActiveViewMode}
          />
        </div>
        <div
          className={`flex flex-col justify-center items-center ${
            activeViewMode === 'grip'
              ? 'grid grid-cols-4 max-md:grid-cols-2 gap-6'
              : activeViewMode === 'grid'
              ? 'grid grid-cols-2 max-md:grid-cols-1 gap-6'
              : 'gap-9'
          }`}>
          {sortedData.slice(0, itemsToShow).map((data) => (
            <AnimeCardWithDescriptionTest
              key={data.id}
              id={data.id}
              nameRu={data.names.ru}
              name={data.names.en}
              year={data.season.year}
              description={data.description}
              genres={data.genres}
              imageUrlRoblox={
                data.posters.original.wide === null
                  ? 'https://anilibria.top' + data.posters.original.url
                  : data.posters.original.wide
              }
              imageUrl={'https://anilibria.top' + data.posters.original.url}
              activeViewMode={activeViewMode}
            />
          ))}
          {itemsToShow < sortedData.length && (
            <div ref={loadMoreRef} className='h-px' />
          )}
        </div>
      </div>
    </>
  );
}
