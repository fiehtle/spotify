import React from 'react';
import Track from 'components/Track';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function TrackList() {
  const { data } = useSWR('/api/top-tracks', fetcher);

  if (!data) {
    return null;
  }

  return (
    <>
      {data.tracks.map((track, index) => (
        <Track ranking={index + 1} key={track.songUrl} {...track} />
      ))}
    </>
  );
}
