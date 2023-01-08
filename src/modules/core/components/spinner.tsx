import React from 'react'

const Spinner = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <div
        className='
          h-24
          w-24
          rounded-full
          border-transparent
          border-8
          border-solid
          border-t-8
          border-t-secondary
          dark:border-t-primary
          animate-spin
        '
      />
    </div>
  )
}

export default Spinner
