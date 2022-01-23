export default function Track(track) {
  return (
    <div className='flex flex-row items-baseline border-b border-gray-200 dark:border-gray-800 max-w-3xl w-full mt-8'>
      <p className='text-sm font-bold text-gray-400 dark:text-gray-600'>
        {track.ranking}
      </p>
      <div className='flex flex-col pl-3'>
        <a classname='font-medium' href={track.songUrl}>
          {track.title}
        </a>
        <p>{track.artist}</p>
        <img src={track.cover} />
      </div>
    </div>
  );
}
