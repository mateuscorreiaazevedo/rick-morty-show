import { CardEpisodes, episodeService, FilterEpisodes } from '@/modules/episodes'
import { Pagination, Spinner, useNotification } from '@/modules/core'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'

type Props = {
  data: Episodes
}

function Episodes ({ data }: Props) {
  const [episodes, setEpisodes] = React.useState(data)
  const [loading, setLoading] = React.useState(false)
  const { setNotification } = useNotification()
  const { pathname, push, query } = useRouter()
  const [page, setPage] = React.useState(1)

  const handlePage = async (pageNum: number) => {
    setPage(pageNum)
    try {
      const response = await episodeService.getAll({ page: pageNum })
      push({ pathname, query: { ...query, page: pageNum } })
      setEpisodes(response)
    } catch (error) {
      setNotification((error as any).message)
    }
  }

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <Head>
        <title>Personagens - Rick & Morty Show | Mateus Azevedo</title>
      </Head>
      <article>
        <h1 className="text-4xl text-secondary first-letter:text-primary first-letter:text-5xl font-semibold my-2 dark:first-letter:text-secondary dark:text-primary">
          Episódios
        </h1>
        <section>
          <FilterEpisodes
            setData={setEpisodes}
            setLoading={setLoading}
            setPage={setPage}
          />
        </section>
        <section className="grid my-10 mx-10 gap-10 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {episodes.results.map((episode) => (
            <CardEpisodes key={episode.id} {...episode} />
          ))}
        </section>
        <section>
          <Pagination currentPage={page} totalItems={episodes.info.count} handlePage={handlePage} />
        </section>
      </article>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await episodeService.getAll({})

  return {
    props: {
      data
    }
  }
}

export default Episodes
