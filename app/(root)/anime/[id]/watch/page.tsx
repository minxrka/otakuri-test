'use client';

import React, { useEffect, useRef, useState } from 'react';
import animeData from '/src/data/animeData.json';
import Hls from 'hls.js';
import { useParams } from 'next/navigation';
import { RippleButton } from '@/src/components/ui/ripple-button';

export default function PlayerPage() {
  const { id } = useParams();
  const [episodeNumber, setEpisodeNumber] = useState(1);
  const [quality, setQuality] = useState<'fhd' | 'hd' | 'sd'>('fhd');
  const videoRef = useRef(null);
  const AnimeData = animeData.list.find(
    (anime) => anime.id === parseInt(id as string)
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (AnimeData?.player.list[episodeNumber].hls.fhd !== null) {
      setQuality('fhd');
    } else if (AnimeData?.player.list[episodeNumber].hls.hd !== null) {
      setQuality('hd');
    } else {
      setQuality('sd');
    }

    const videoSrc =
      'https://cache-rfn.libria.fun' +
      AnimeData?.player.list[episodeNumber].hls[quality];
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
    } else if (
      (video as HTMLVideoElement).canPlayType('application/vnd.apple.mpegurl')
    ) {
      (video as HTMLVideoElement).src = videoSrc;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoRef, episodeNumber, quality]);

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
      AnimeData?.player?.list[episodeNumber].hls.sd !== null
    ) {
      setQuality('sd');
    } else {
      alert('SD недоступно для этой серии!');
    }
  };
  const handleSetQualityHD = () => {
    if (
      quality !== 'hd' &&
      AnimeData?.player?.list[episodeNumber].hls.hd !== null
    ) {
      setQuality('hd');
    } else {
      alert('HD недоступно для этой серии!');
    }
  };
  const handleSetQualityFHD = () => {
    if (
      quality !== 'fhd' &&
      AnimeData?.player?.list[episodeNumber].hls.fhd !== null
    ) {
      setQuality('fhd');
    } else {
      alert('FullHD недоступно для этой серии!');
    }
  };

  return (
    <>
      <div className='h-[89vh] flex flex-col justify-center items-center gap-4'>
        <div className='max-h-full w-[60%] max-w-full aspect-video bg-primary-900/10 overflow-hidden rounded-xl [-webkit-mask-image:_url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC)]'>
          <video
            ref={videoRef}
            controls
            playsInline
            disablePictureInPicture
            className='h-full w-full'></video>
        </div>
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
              AnimeData?.player?.list[episodeNumber].hls.sd === null
            }>
            SD
          </RippleButton>
          <RippleButton
            onClick={handleSetQualityHD}
            isDisabled={
              quality === 'hd' ||
              AnimeData?.player?.list[episodeNumber].hls.hd === null
            }>
            HD
          </RippleButton>
          <RippleButton
            onClick={handleSetQualityFHD}
            isDisabled={
              quality === 'fhd' ||
              AnimeData?.player?.list[episodeNumber].hls.fhd === null
            }>
            FullHD
          </RippleButton>
        </div>
      </div>
    </>
  );
}
