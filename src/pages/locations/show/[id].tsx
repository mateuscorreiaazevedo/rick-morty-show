import { CardCharacter, characterService } from '@/modules/character'
import { Button, Spinner, useNotification } from '@/modules/core'
import { locationService } from '@/modules/locations'
import { GetStaticPaths, GetStaticProps } from 'next'
import { FaBackspace } from 'react-icons/fa'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

type Props = {
  data: Localization
}

function ShowLocation ({ data: location }: Props) {
  const [characterOnEp, setCharacterOnEp] = React.useState<Character[]>([])
  const [singleCharacter, setSingleCharacter] = React.useState<Character>()
  const [loading, setLoading] = React.useState(false)
  const { setNotification } = useNotification()

  React.useEffect(() => {
    if (location.residents.length) {
      (async () => {
        setLoading(true)
        const characterId = location.residents.map((character) => character.split('character/')[1])

        const id = characterId.length > 1 ? characterId?.join(',') : characterId![0]
        try {
          const response = await characterService.getByEpisode(id as string)
          if (location.residents.length > 1) {
            setCharacterOnEp(response)
          } else {
            setSingleCharacter(response)
          }
        } catch (error) {
          setNotification((error as any).message)
        } finally {
          setLoading(false)
        }
      })()
    }
  }, [])

  return (
    <>
      <Head>
        <title>{location.name} - Rick & Morty Show | Mateus Azevedo</title>
      </Head>
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
        <div className="absolute top-0 left-0 px-10 py-1 bg-secondary text-white text-2xl rounded-tl-2xl rounded-br-2xl dark:bg-primary shadow-md">
          {location.id}
        </div>
        <section className="flex  items-center justify-between">
          <h1 className="text-5xl font-bold first-letter:text-secondary text-primary dark:text-lighten dark:first-letter:text-primary">
            {location?.name}
          </h1>
          <Link href="/locations/list" className="pt-3">
            <Button label="Voltar" icon={<FaBackspace />} type="error" />
          </Link>
        </section>
        <section className="flex items-center justify-between">
          <h2 className="text-3xl text-gray-400 italic">{location.dimension}</h2>
          <h3 className="text-2xl text-gray-400">
            <strong className="mr-2 text-darken hover:text-secondary transition-all dark:text-lighten dark:hover:text-primary">
              Type:
            </strong>
            {location.type}
          </h3>
        </section>
        {!!location.residents.length && (
          <>
            {!loading && <h3 className="mt-10 text-3xl font-semibold">Habitantes</h3>}
            <section className="grid mt-4 gap-2 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
              {loading && (
                <div className="w-full flex justify-center">
                  <Spinner notFull />
                </div>
              )}
              {!loading && (
                <>
                  {characterOnEp.length > 1
                    ? (
                        characterOnEp.map((character) => <CardCharacter key={character.id} {...character} />)
                      )
                    : (
                    <CardCharacter {...singleCharacter!} />
                      )}
                </>
              )}
            </section>
          </>
        )}
      </article>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await locationService.getAll({})

  const paths = data.results.map((episode) => ({
    params: {
      id: episode.id?.toString()
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id
  const data = await locationService.getById(id as string)

  return {
    props: {
      data
    }
  }
}

export default ShowLocation
