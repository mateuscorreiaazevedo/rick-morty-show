import { BsSun, BsMoon } from 'react-icons/bs'
import { useTheme } from '..'
import React from 'react'

const SwitchTheme = () => {
  const { handleTheme, isLight } = useTheme()
  return (
    <div
      onClick={handleTheme}
      className={`
        mx-1
        text-2xl
        transition-all
        cursor-pointer
        hover:text-secondary
        dark:hover:text-primary
        ${isLight ? 'hover:animate-spin' : 'hover:animate-ping'}
      `}
    >
      {isLight ? <BsSun /> : <BsMoon />}
    </div>
  )
}

export default SwitchTheme
