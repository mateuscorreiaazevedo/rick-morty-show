import { characterService, EpisodeCharacter, ShowContent, ShowImage } from '@/modules/character'
import { Spinner, useNotification } from '@/modules/core'
import { GetStaticPaths, GetStaticProps } from 'next'
import { episodeService } from '@/modules/episodes'
import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import { FaBackspace } from 'react-icons/fa'

type Props = {
  data: Character
}

function ShowCharacter ({ data }: Props) {
  const [episodes, setEpisodes] = React.useState<Episode[]>([])
  const [singleEpisode, setSingleEpisode] = React.useState<Episode>()
  const [loading, setLoading] = React.useState(false)
  const { setNotification } = useNotification()
  const [character] = React.useState(data)

  React.useEffect(() => {
    (async () => {
      const episodesId = character.episode.map((item) => item.split('episode/')[1])

      const id = character.episode.length > 1 ? episodesId.join(',') : episodesId[0]

      setLoading(true)
      try {
        const response = await episodeService.getByShowCharacter(id)
        if (character.episode.length > 1) {
          setEpisodes(response)
        } else {
          setSingleEpisode(response)
        }
      } catch (error) {
        setNotification((error as any).message)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return (
    <>
      <Head>
        <title>{character.name} - Rick & Morty Show | Mateus Azevedo</title>
      </Head>
      <article className="relative min-h-min my-9 mb-32 dark:bg-gray-scale dark:shadow-darken py-16 px-10 bg-teal-200 rounded-xl shadow-lg shadow-teal-300">
        <div className="flex items-center justify-between">
          <h1 className="text-5xl mt-6 dark:first-letter:text-secondary dark:text-primary first-letter:text-primary text-secondary font-semibold">
            {character.name}
          </h1>
          <Link
            href="/characters"
            className="flex items-center justify-around gap-3 text-lg mr-10 px-8 py-2 rounded-lg text-white bg-primary dark:bg-secondary hover:bg-blue-300 dark:hover:bg-pink-600 transition-all"
          >
            <FaBackspace className="text-2xl" /> Voltar
          </Link>
        </div>
        <div className="absolute top-0 left-0 px-10 bg-secondary dark:bg-primary shadow-lg rounded-tl-lg text-white font-bold text-2xl rounded-br-xl">
          {character.id}
        </div>
        <div className="grid grid-cols-3 gap-8 mt-10">
          <ShowImage {...character} />
          <ShowContent {...character} />
          {loading
            ? (
            <Spinner notFull />
              )
            : (
            <section className="h-72 scrolling overflow-x-hidden w-fit overflow-y-auto">
              {episodes.length > 1
                ? episodes?.map(episode => (
                <EpisodeCharacter {...episode} key={episode.id} />
                ))
                : (
                <EpisodeCharacter
                  {...singleEpisode}
                />
                  )}
            </section>
              )}
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
