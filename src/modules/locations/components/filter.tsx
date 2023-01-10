import { Button, SeachBar, useNotification } from '@/modules/core'
import { BsSearch, BsXCircle } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { locationService } from '..'
import React from 'react'

type Props = {
  setData: React.Dispatch<React.SetStateAction<{info: Info, results: Localization[], error?: string}>>
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  setPage: React.Dispatch<React.SetStateAction<number>>
}

const FilterEpisodes = ({ setData, setLoading, setPage }: Props) => {
  const { query, pathname, push } = useRouter()
  const { setNotification } = useNotification()
  const [values, setValues] = React.useState({
    name: query.name,
    type: query.type,
    dimension: query.dimension
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setValues((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async () => {
    try {
      const response = await locationService.getAll({
        page: 1,
        name: values.name?.toString() || query.name?.toString(),
        type: values.type?.toString() || query.type?.toString(),
        dimension: values.dimension?.toString() || query.dimension?.toString(),
      })
      setPage(1)
      push({
        pathname,
        query: {
          ...query,
          ...(values.name && { name: values.name }),
          ...(values.type && { episode: values.type }),
          ...(values.dimension && { episode: values.dimension }),
          page: 1
        }
      })
      setData(response)
    } catch (error) {
      setNotification((error as any).message)
    }
  }

  const clearFilter = async () => {
    setLoading(true)
    try {
      push(pathname)
      const response = await locationService.getAll({})
      setData(response)
      setPage(1)
    } catch (error) {
      setNotification((error as any).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="flex gap-3 lg:items-center md:items-center lg:justify-between mx-6 xl:flex-row lg:flex-row md:flex-col flex-col justify-center items-stretch">
      <SeachBar
        name="name"
        label="Título"
        placeholder="Insira o título do episódio"
        setChange={handleChange}
      />
      <SeachBar
        name="type"
        label="Tipo"
        placeholder="Insira o tipo da Localização"
        setChange={handleChange}
      />
      <SeachBar
        name="dimension"
        label="Dimensão"
        placeholder="Insira a Dimensão"
        setChange={handleChange}
      />
      <div className="flex gap-1 items-center flex-col md:flex-row lg:flex-row">
        <div className="flex gap-1 lg:ml-1 md:ml-1 ml-0 md:mb-3 lg:mb-0 xl:mb-0">
          <Button icon={<BsSearch />} label="Pesquisar" handleClick={handleSubmit} />
          <Button icon={<BsXCircle />} label="Limpar" handleClick={clearFilter} type="error" />
        </div>
      </div>
    </section>
  )
}

export default FilterEpisodes
