import React from 'react'
import { BsSearch } from 'react-icons/bs'
import Tooltip from '../tooltip'

type Props = {
  label: string
  handleClick: () => Promise<void>
  tooltip: string
}

export const Button = ({ handleClick, tooltip, label }: Props) => {
  return (
    <div className="h-20">
      <Tooltip label={tooltip}>
        <button
          onClick={handleClick}
          className="
        flex
        items-center
        justify-around
        gap-2
        mt-7
        px-4
        bg-primary
        dark:bg-secondary
        h-10
        rounded-lg
        text-white
        font-normal
        hover:bg-blue-300
        dark:hover:bg-pink-700
        transition-all
        "
        >
          <BsSearch className="text-lg" /> {label}
        </button>
      </Tooltip>
    </div>
  )
}
