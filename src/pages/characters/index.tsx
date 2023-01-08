import { CardCharacter, characterService } from '@/modules/character'
import { Spinner, useNotification } from '@/modules/core'
import Pagination from 'react-js-pagination'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'

type Props = {
  data: Characters
}

function Characters ({ data }: Props) {
  const [characters, setCharacters] = React.useState(data.results)
  const [loading, setLoading] = React.useState(false)
  const { setNotification } = useNotification()
  const [page, setPage] = React.useState(1)

  const handleChangePage = async (pageNum: number) => {
    setLoading(true)

    try {
      const response = await characterService.getAll({ page: pageNum })
      setCharacters(response.results)
      setPage(pageNum)
    } catch (error) {
      setNotification((error as any).message)
    } finally {
      setLoading(false)
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
        <section className="flex justify-between items-center">
          <h1 className="text-4xl text-secondary first-letter:text-primary first-letter:text-5xl font-semibold my-2">
            Personagens
          </h1>
          <span className="text-xs italic font-light">
            Página {page}/{data.info.pages}
          </span>
        </section>
        <section>filter</section>
        <section className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 mt-4">
          {characters.map((character) => (
              <CardCharacter key={character.id} {...character} />
          ))}
        </section>
        <section
          className="flex items-center justify-center mt-10"
        >
          <Pagination
            innerClass="flex justify-center"
            itemClass="px-3 border-transparent rounded-full py-1 font-semibold"
            itemClassFirst="dark:border-l-primary border-l-secondary border-l-2"
            itemClassLast="dark:border-r-primary border-r-secondary border-r-2"
            activeClass="dark:bg-primary bg-secondary text-white"
            activePage={page}
            totalItemsCount={data.info.count}
            onChange={handleChangePage}
            itemsCountPerPage={20}
          />
        </section>
      </article>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await characterService.getAll({})

  return {
    props: {
      data
    }
  }
}

export default Characters
