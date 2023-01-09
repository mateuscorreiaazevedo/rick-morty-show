import { characterService, ShowContent, ShowImage } from '@/modules/character'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'

type Props = {
  data: Character
}

function ShowCharacter ({ data }: Props) {
  const [character] = React.useState(data)

  return (
    <>
      <Head>
        <title>{character.name} - Rick & Morty Show | Mateus Azevedo</title>
      </Head>
      <article className="relative min-h-min my-20 dark:bg-gray-scale dark:shadow-darken py-16 px-10 bg-teal-200 rounded-xl shadow-lg shadow-teal-300">
        <h1 className="text-5xl dark:first-letter:text-secondary dark:text-primary first-letter:text-primary text-secondary font-semibold">
          {character.name}
        </h1>
        <div className="absolute top-0 left-0 px-10 bg-secondary dark:bg-primary shadow-lg rounded-tl-lg text-white font-bold text-2xl rounded-br-xl">
          {character.id}
        </div>
        <div className="grid grid-cols-3 gap-8 mt-10">
          <ShowImage {...character} />
          <ShowContent {...character} />
          <section className='h-96 overflow-x-hidden w-fit overflow-y-auto'>
          </section>
        </div>
      </article>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await characterService.getAll({})

  const paths = data.results.map((character) => ({
    params: { id: character.id.toString() }
  }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const id = ctx.params?.id

  const data = await characterService.getById(id as string)

  return {
    props: {
      data
    }
  }
}

export default ShowCharacter
