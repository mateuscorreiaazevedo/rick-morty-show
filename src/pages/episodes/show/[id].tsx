import { CardCharacter, characterService } from '@/modules/character'
import { Button, Spinner, useNotification } from '@/modules/core'
import { episodeService } from '@/modules/episodes'
import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'
import { FaBackspace } from 'react-icons/fa'

type Props = {
  data: Episode
}

function ShowEpisode ({ data: episode }: Props) {
  const [characterOnEp, setCharacterOnEp] = React.useState<Character[]>([])
  const [loading, setLoading] = React.useState(false)
  const { setNotification } = useNotification()

  React.useEffect(() => {
    (async () => {
      setLoading(true)
      const characterId = episode.characters?.map(character => character.split('character/')[1])

      const id = characterId?.join(',')
      try {
        const response = await characterService.getByEpisode(id as string)
        setCharacterOnEp(response)
      } catch (error) {
        setNotification((error as any).message)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return (
    <article
      className="
        my-24
        bg-teal-200
        py-6
        px-10
        shadow-md
        rounded-2xl
        dark:bg-teal-900
        relative
      "
    >
      <div className='absolute top-0 left-0 px-10 py-1 bg-secondary text-white text-2xl rounded-tl-2xl rounded-br-2xl dark:bg-primary shadow-md'>{episode.id}</div>
      <section className="flex  items-center justify-between">
        <h1 className="text-5xl font-bold first-letter:text-secondary text-primary dark:text-lighten dark:first-letter:text-primary">
          {episode?.name}
        </h1>
        <Link href='/episodes/list' className='pt-3'>
          <Button label="Voltar" icon={<FaBackspace />} type="error" />
        </Link>
      </section>
      <section className='flex items-center justify-between'>
        <h2 className='text-3xl text-gray-400 italic'>
          {episode.episode}
        </h2>
        <h3 className='text-2xl text-gray-400'>
          <strong className='mr-2 text-darken hover:text-secondary transition-all dark:text-lighten dark:hover:text-primary'>Primeira exibição:</strong>{episode.air_date}
        </h3>
      </section>
      <h3>
      </h3>
      {!loading && <h3 className='mt-10 text-3xl font-semibold'>Principais Personagens no Episódio</h3>}
      <section className='grid mt-4 gap-2 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
        {loading && <div className='w-full flex justify-center'><Spinner notFull /></div>}
        {!loading && characterOnEp?.map(character => (
          <CardCharacter key={character.id} {...character} />
        ))}
      </section>
    </article>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await episodeService.getAll({})

  const paths = data.results.map((episode) => ({
    params: {
      id: episode.id?.toString()
    }
  }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id
  const data = await episodeService.getById(id as string)

  return {
    props: {
      data
    }
  }
}

export default ShowEpisode
