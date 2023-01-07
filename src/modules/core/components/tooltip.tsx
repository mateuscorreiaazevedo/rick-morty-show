import React from 'react'

type Props = {
  children: React.ReactNode
  label: string,
  isNowrap?: boolean
}

const Tooltip = ({ children, label, isNowrap = false }: Props) => {
  return (
    <div
      className='relative flex w-fit items-center justify-center'
    >
      <div
        className='
          peer/tooltip
          m-0
          p-0
        '
      >
        {children}
      </div>
      <span
        className={`
          delay-200
          text-base
          max-w-xs
          z-50
          px-2
          mt-2.5
          rounded
          absolute
          top-full
          opacity-0
          self-center
          after:-ml-2
          bg-secondary
          dark:bg-primary
          text-center
          text-lighten
          transition-all
          after:border-8
          after:absolute
          after:left-2/4
          after:bottom-full
          after:border-solid
          after:border-transparent
          after:border-b-secondary
          dark:after:border-b-primary
          peer-hover/tooltip:opacity-100
          ${isNowrap ? 'whitespace-nowrap' : ''}
        `}
      >
        {label}
      </span>
    </div>
  )
}

export default Tooltip
