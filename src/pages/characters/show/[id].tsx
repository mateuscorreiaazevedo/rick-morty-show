import { characterService } from '@/modules/character'
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
        <title>
          {character.name} - Rick & Morty Show | Mateus Azevedo
        </title>
      </Head>
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
