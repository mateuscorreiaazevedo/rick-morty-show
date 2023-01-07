import { BsSun, BsMoon } from 'react-icons/bs'
import { useTheme } from '..'
import React from 'react'

const SwitchTheme = () => {
  const { handleTheme, isLight } = useTheme()
  return (
    <div
      onClick={handleTheme}
      className="
        mx-1
        text-2xl
        transition-all
        cursor-pointer
        hover:animate-spin
        hover:text-secondary
        dark:hover:text-secondary
      "
    >
      {isLight ? <BsSun /> : <BsMoon />}
    </div>
  )
}

export default SwitchTheme
