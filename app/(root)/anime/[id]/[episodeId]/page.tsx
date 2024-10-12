'use client';

import React, { useEffect, useRef } from 'react';
import animeData from '/src/data/animeData.json';
import Hls from 'hls.js';
import { useParams } from 'next/navigation';

export default function PlayerPage() {
  const { id, episodeId } = useParams();
  const AnimeData = animeData.list.find(
    (anime) => anime.id === parseInt(id as string)
  );
  const EpisodeId = parseInt(episodeId as string);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const videoSrc =
      'https://cache-rfn.libria.fun' + AnimeData?.player.list[EpisodeId].hls.hd;
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
    } else if (
      (video as HTMLVideoElement).canPlayType('application/vnd.apple.mpegurl')
    ) {
      (video as HTMLVideoElement).src = videoSrc;
    }
  }, [videoRef]);

  return (
    <>
      <div className='h-[89vh] flex flex-col justify-center items-center gap-4'>
        <div className='max-h-full w-2/3 max-w-full aspect-video overflow-hidden rounded-xl [-webkit-mask-image:_url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC)]'>
          <video
            ref={videoRef}
            controls
            playsInline
            disablePictureInPicture
            className='h-full w-full'></video>
        </div>
      </div>
    </>
  );
}
