import { useTheme } from '@/modules/core'
import { BsSun, BsMoon } from 'react-icons/bs'
import Head from 'next/head'
import React from 'react'

function Home () {
  const { isLight, handleTheme } = useTheme()
  return (
    <>
      <Head>
        <title>Rick & Morty Show | Mateus Azevedo</title>
      </Head>
      <div onClick={handleTheme} className="text-2xl">
      {isLight ? <BsSun /> : <BsMoon />}
      </div>
    </>
  )
}

export default Home
