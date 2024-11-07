'use client';

import React, { useEffect, useRef, useState } from 'react';
import animeData from '/src/data/animeData.json';
import Hls from 'hls.js';
import { useParams } from 'next/navigation';
import { RippleButton } from '@/src/components/ui/ripple-button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function PlayerPage() {
  const { id } = useParams();
  const videoRef = useRef(null);
  const AnimeData = animeData.list.find(
    (anime) => anime.id === parseInt(id as string)
  );
  const animeEpisodeList = AnimeData?.player.list;
  const sortedEpisodeListKeys =
    animeEpisodeList &&
    Object.keys(animeEpisodeList).sort((a, b) => Number(a) - Number(b));

  const [episodeNumber, setEpisodeNumber] = useState(
    Number(sortedEpisodeListKeys && sortedEpisodeListKeys[0])
  );
  const [quality, setQuality] = useState<'fhd' | 'hd' | 'sd'>('fhd');

  const getAvailableQuality = () => {
    if (AnimeData?.player.list[episodeNumber]?.hls.fhd) {
      return 'fhd';
    } else if (AnimeData?.player.list[episodeNumber]?.hls.hd) {
      return 'hd';
    } else if (AnimeData?.player.list[episodeNumber]?.hls.sd) {
      return 'sd';
    }
    return null;
  };

  useEffect(() => {
    const availableQuality = getAvailableQuality();
    if (availableQuality) {
      setQuality(availableQuality);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [AnimeData, episodeNumber]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const videoSrc =
      'https://cache-rfn.libria.fun' +
      AnimeData?.player.list[episodeNumber]?.hls[quality];

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
    } else if (
      (video as HTMLVideoElement).canPlayType('application/vnd.apple.mpegurl')
    ) {
      (video as HTMLVideoElement).src = videoSrc;
    }
  }, [videoRef, episodeNumber, quality, AnimeData]);

  useEffect(() => {
    if (AnimeData) {
      document.title = `${AnimeData.names.ru} | Otakuri`;
    }
  }, [AnimeData]);

  const handleSetEpisode = (index: number) => {
    setEpisodeNumber(index);
  };

  const handleNextEpisode = () => {
    if (
      AnimeData?.player?.episodes?.last !== undefined &&
      episodeNumber < AnimeData.player.episodes.last
    ) {
      setEpisodeNumber(episodeNumber + 1);
    }
  };

  const handlePrevEpisode = () => {
    if (episodeNumber > 1) {
      setEpisodeNumber(episodeNumber - 1);
    }
  };

  const handleSetQualitySD = () => {
    if (
      quality !== 'sd' &&
      AnimeData?.player?.list[episodeNumber]?.hls.sd !== null
    ) {
      setQuality('sd');
    } else {
      alert('SD недоступно для этой серии!');
    }
  };

  const handleSetQualityHD = () => {
    if (
      quality !== 'hd' &&
      AnimeData?.player?.list[episodeNumber]?.hls.hd !== null
    ) {
      setQuality('hd');
    } else {
      alert('HD недоступно для этой серии!');
    }
  };

  const handleSetQualityFHD = () => {
    if (
      quality !== 'fhd' &&
      AnimeData?.player?.list[episodeNumber]?.hls.fhd !== null
    ) {
      setQuality('fhd');
    } else {
      alert('FullHD недоступно для этой серии!');
    }
  };

  return (
    <>
      <div className='flex flex-col justify-center items-center gap-4 my-4'>
        <Link href={`/anime/${id}`} passHref>
          <RippleButton
            size='md'
            startContent={<ArrowLeft className='size-6' />}
            className='font-medium px-6'>
            На страницу аниме
          </RippleButton>
        </Link>
        <video
          ref={videoRef}
          controls
          playsInline
          disablePictureInPicture
          className='w-[50%] aspect-video'></video>
        <h1 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-primary-500'>
          {AnimeData?.names.ru}
        </h1>
        <div className='flex items-center justify-center gap-4'>
          <RippleButton
            onClick={handlePrevEpisode}
            isDisabled={episodeNumber === 1}>
            Пред. серия
          </RippleButton>
          <p className='w-40 text-center'>текущая серия: {episodeNumber}</p>
          <RippleButton
            onClick={handleNextEpisode}
            isDisabled={
              AnimeData?.player?.episodes?.last !== undefined &&
              episodeNumber === AnimeData.player.episodes.last
            }>
            След. серия
          </RippleButton>
        </div>
        <div className='flex items-center justify-center gap-4'>
          <p className='w-52 text-center'>текущее качество: {quality}</p>
          <RippleButton
            onClick={handleSetQualitySD}
            isDisabled={
              quality === 'sd' ||
              AnimeData?.player?.list[episodeNumber]?.hls.sd === null
            }>
            SD
          </RippleButton>
          <RippleButton
            onClick={handleSetQualityHD}
            isDisabled={
              quality === 'hd' ||
              AnimeData?.player?.list[episodeNumber]?.hls.hd === null
            }>
            HD
          </RippleButton>
          <RippleButton
            onClick={handleSetQualityFHD}
            isDisabled={
              quality === 'fhd' ||
              AnimeData?.player?.list[episodeNumber]?.hls.fhd === null
            }>
            FullHD
          </RippleButton>
        </div>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] w-full justify-items-center gap-4 px-6'>
          {sortedEpisodeListKeys && sortedEpisodeListKeys.length > 0 ? sortedEpisodeListKeys.map((index) => (
            <RippleButton
              variant='sortButton'
              onClick={() => handleSetEpisode(Number(index))}
              isDisabled={Number(index) === episodeNumber}
              key={index}
              className='group min-h-28 px-0 aspect-video w-full bg-transparent rounded-xl'>
              <Image
                width={100}
                height={100}
                alt='episode preview'
                src={
                  AnimeData?.player?.list[Number(index)].preview
                    ? 'https://anilibria.top' +
                      AnimeData?.player?.list[Number(index)].preview
                    : 'https://i.pinimg.com/originals/77/81/dd/7781dde14911b9440dc865b94aba0af1.jpg'
                }
                className='absolute object-cover w-full h-full brightness-[.6] group-hover:scale-105 group-hover:brightness-[.35] transition-[transform,_filter] duration-300 will-change-transform'
              />
              <span className='z-10 text-lg font-bold text-titanium-200 text-center'>
                {index} серия
              </span>
            </RippleButton>
          )) : (
            <span className='text-4xl text-rose-400 font-extrabold'>
              Нет доступных эпизодов.
            </span>
          )}
        </div>
      </div>
    </>
  );
}
