import React from 'react'

type Props = {
  label: string
  handleClick?: () => Promise<void>
  icon?: React.ReactNode
  type?: 'default' | 'success' | 'warning'| 'error'
}

export const Button = ({ handleClick, label, icon, type }: Props) => {
  let button = ''

  switch (type) {
    case 'success':
      button = 'bg-green-400 hover:bg-green-500 text-white'
      break
    case 'error':
      button = 'bg-red-400 hover:bg-red-500 text-white'
      break
    case 'warning':
      button = 'bg-orange-400 hover:bg-orange-500 text-white'
      break
    default:
      button = 'bg-primary hover:bg-blue-500 text-white dark:bg-secondary dark:hover:bg-pink-700'
  }

  return (
    <div className="lg:h-20 h-fit">
        <button
          onClick={handleClick}
          className={`
            ${button}
            flex
            items-center
            justify-around
            gap-2
            mt-7
            px-4
            h-10
            rounded-lg
            shadow-md
            font-normal
            transition-all
            duration-300
            `}
        >
          {icon} {label}
        </button>
    </div>
  )
}
