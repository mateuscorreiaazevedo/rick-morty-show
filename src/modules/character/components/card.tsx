import { FaCross, FaQuestion, FaStar } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = (props: Character) => {
  const { id, gender, name, image, status } = props

  return (
    <Link href={`/characters/show/${id}`}>
      <div className="relative group/card flex flex-col items-center justify-center bg-slate-200 shadow-md hover:bg-teal-200 hover:shadow-sm h-72 transition-all py-4 mx-6 rounded-2xl dark:bg-gray-scale dark:hover:bg-teal-900 dark:shadow-teal-900">
        <div className="absolute top-0 left-0 px-4 text-white bg-secondary rounded-tl-2xl rounded-br-2xl shadow-md z-10 font-bold dark:bg-primary ">
          {id}
        </div>
        <Image
          className="w-36 mb-2 rounded-full duration-300 group-hover/card:scale-110 transition-all"
          src={image || '/favicon.ico'}
          alt={name || 'personagem de Rick & Morty'}
          width={100}
          height={100}
        />
        <h2 className="inline-block text-center text-xl my-0.5 text-secondary w-full px-2 whitespace-nowrap overflow-hidden  text-ellipsis dark:text-primary">
          {name}
        </h2>
        <p className="italic font-semibold first-letter:text-xl">{gender}</p>
        <div className="flex items-center gap-0.5">
          <span className="text-lg text-secondary dark:text-primary">
            {status === 'Alive' && <FaStar />}
            {status === 'Dead' && <FaCross />}
            {status === 'unknown' && <FaQuestion />}
          </span>
          <p className="text-xl transition-all">{status}</p>
        </div>
      </div>
    </Link>
  )
}

export default Card
