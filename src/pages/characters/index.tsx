import { characterService } from '@/modules/character'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'

// type Props = {
//   data: Characters
// }

function Characters () {
  return (
    <>
      <Head>
        <title>Personagens - Rick & Morty Show | Mateus Azevedo</title>
      </Head>
      <div>
        <h1
          className="
            text-4xl
            text-secondary
            first-letter:text-primary
            first-letter:text-5xl
            font-semibold
            my-2
          "
        >
          Personagens
        </h1>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await characterService.getAll()

  return {
    props: {
      data
    }
  }
}

export default Characters
