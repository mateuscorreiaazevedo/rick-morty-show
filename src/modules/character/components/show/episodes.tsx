import Link from 'next/link'
import React from 'react'

const Episodes = (episode: Episode) => {
  return (
    <Link title={episode.name} href={`/episodes/show/${episode.id}`} className="flex transition-all bg-teal-400 my-1 py-2 px-1 rounded-lg hover:bg-teal-500 dark:bg-darken dark:hover:bg-gray-800">
      <div>
        <h3 className="text-lg ml-2 overflow-hidden text-ellipsis w-60 whitespace-nowrap">{episode.name}</h3>
        <div className='flex gap-3 justify-between mx-2'>
          <span className="text-gray-500 text-sm">{episode.episode}</span>
          <p className='text-sm'>{episode.air_date}</p>
        </div>
      </div>
    </Link>
  )
}

export default Episodes
