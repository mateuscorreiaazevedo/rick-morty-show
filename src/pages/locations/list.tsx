import { CardLocation, FilterLocation, locationService } from '@/modules/locations'
import { Pagination, Spinner, useNotification } from '@/modules/core'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'

type Props = {
  data: {info: Info, results: Localization[], error?: string}
}

function Locations ({ data }: Props) {
  const [locations, setLocations] = React.useState(data)
  const [loading, setLoading] = React.useState(false)
  const { pathname, push, query } = useRouter()
  const { setNotification } = useNotification()
  const [page, setPage] = React.useState(1)

  const handlePage = async (pageNum: number) => {
    try {
      const response = await locationService.getAll({ page: pageNum })
      setPage(pageNum)
      push({ pathname, query: { ...query, page: pageNum } })
      setLocations(response)
    } catch (error) {
      setNotification((error as any).message)
    }
  }

  if (loading) return <Spinner />

  return (
    <>
      <Head>
        <title>Localizações - Rick & Morty Show | Mateus Azevedo</title>
      </Head>
      <article>
        <h1 className="text-4xl text-secondary first-letter:text-primary first-letter:text-5xl font-semibold my-2 dark:first-letter:text-secondary dark:text-primary">
          Localizações
        </h1>
        <section>
          <FilterLocation setData={setLocations} setPage={setPage} setLoading={setLoading} />
        </section>
        <section className="grid gap-4 my-6 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {locations?.results.map(local => (
            <CardLocation key={local.id} {...local} />
          ))}
        </section>
        <section>
          <Pagination
            currentPage={page}
            handlePage={handlePage}
            totalItems={locations.info.count}
          />
        </section>
      </article>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await locationService.getAll({})

  return {
    props: {
      data
    }
  }
}

export default Locations
