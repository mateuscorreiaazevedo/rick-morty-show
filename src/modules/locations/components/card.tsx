import Link from 'next/link'
import React from 'react'

const Card = (props: Localization) => {
  return (
    <div className="mx-3 relative flex flex-col py-4 px-3 h-56 rounded-xl shadow-md bg-teal-100 hover:bg-teal-200 dark:bg-gray-scale dark:hover:bg-teal-900 transition-all">
      <span className="absolute top-0 left-0 px-6 py-0.5 rounded-tl-xl rounded-br-xl bg-secondary text-white">
        {props.id}
      </span>
      <h1 className="mt-6 text-2xl font-bold text-ellipsis overflow-hidden whitespace-nowrap first-letter:text-primary text-secondary dark:first-letter:text-secondary dark:text-primary">
        {props.name}
      </h1>
      <div className="flex flex-col items-start w-full justify-between">
        <p className="text-lg hover:text-secondary dark:hover:text-primary transition-all">
          <strong className="mr-2">Tipo:</strong>
          {props.type}
        </p>
        <p className="text-xl font-light text-gray-500 w-full whitespace-nowrap overflow-hidden text-ellipsis dark:text-gray-300">
          <b className="mr-2">Dimensão:</b>
          {props.dimension}
        </p>
      </div>
      <Link
        className="group/link-ep text-xl self-center mt-4 hover:tracking-wide transition-all px-2 rounded-sm hover:text-secondary dark:hover:text-primary text-darken dark:text-lighten "
        href={`/locations/show/${props.id}`}
      >
        Ir para o episódio
        <div className="w-full scale-x-0 h-0.5 dark:bg-primary bg-secondary group-hover/link-ep:scale-x-100 transition-all" />
      </Link>
    </div>
  )
}

export default Card
