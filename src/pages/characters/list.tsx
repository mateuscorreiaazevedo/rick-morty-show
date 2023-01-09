import { CardCharacter, characterService, FilterCharacter } from '@/modules/character'
import { Spinner, useNotification, Pagination } from '@/modules/core'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import { useRouter } from 'next/router'

type Props = {
  data: Characters
}

function Characters ({ data }: Props) {
  const [characters, setCharacters] = React.useState(data)
  const [loading, setLoading] = React.useState(false)
  const { push, query, pathname } = useRouter()
  const { setNotification } = useNotification()
  const [page, setPage] = React.useState(1)

  const handleChangePage = async (pageNum: number) => {
    try {
      const response = await characterService.getAll({
        gender: query.gender?.toString(),
        page: pageNum,
        name: query.name?.toString(),
        status: query.status?.toString()
      })

      setPage(pageNum)
      setCharacters(response)
      push({ pathname, query: { ...query, page: pageNum } })
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
          Personagens
        </h1>
        <FilterCharacter
          setData={setCharacters}
          setLoading={setLoading}
          setPage={setPage}
        />
        <section className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 mt-4">
          {characters.results.map((character) => (
            <CardCharacter key={character.id} {...character} />
          ))}
        </section>
        <section className="flex items-center justify-center mt-10">
          <Pagination
            currentPage={page}
            totalItems={characters.info.count}
            handlePage={handleChangePage}
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
