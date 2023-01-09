import { Button, Options, SeachBar, useNotification } from '@/modules/core'
import { BsSearch, BsXCircle } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { characterService } from '..'
import React from 'react'

type Props = {
  setData: React.Dispatch<React.SetStateAction<Characters>>
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  setPage: React.Dispatch<React.SetStateAction<number>>
}

const FilterCharacter = ({ setData, setLoading, setPage }: Props) => {
  const { query, pathname, push } = useRouter()
  const { setNotification } = useNotification()
  const [values, setValues] = React.useState({
    name: query.name,
    gender: query.gender,
    status: query.status
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
      const response = await characterService.getAll({
        page: 1,
        gender: values.gender?.toString() || query.gender?.toString(),
        name: values.name?.toString() || query.name?.toString(),
        status: values.status?.toString() || query.status?.toString()
      })
      setPage(1)
      push({
        pathname,
        query: {
          ...query,
          ...(values.gender && { gender: values.gender }),
          ...(values.status && { status: values.status }),
          ...(values.name && { name: values.name }),
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
      const response = await characterService.getAll({})
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
        label="Nome"
        placeholder="Insira o nome do personagem"
        setChange={handleChange}
      />
      <div className="flex gap-1 items-center flex-col md:flex-row lg:flex-row">
        <Options
          setChange={handleChange}
          label="Gênero"
          name="gender"
          options={[
            { label: 'Masculino', value: 'Male' },
            { label: 'Feminino', value: 'Female' },
            { label: 'Sem gênero', value: 'genderless' },
            { label: 'Desconhecido', value: 'unknown' }
          ]}
        />
        <Options
          setChange={handleChange}
          label="Status"
          name="status"
          options={[
            { label: 'Vivo', value: 'Alive' },
            { label: 'Morto', value: 'Dead' },
            { label: 'Desconhecido', value: 'unknown' }
          ]}
        />
        <div className="flex gap-1 lg:ml-1 md:ml-1 ml-0 md:mb-3 lg:mb-0 xl:mb-0">
          <Button icon={<BsSearch />} label="Pesquisar" handleClick={handleSubmit} />
          <Button icon={<BsXCircle />} label="Limpar" handleClick={clearFilter} type="error" />
        </div>
      </div>
    </section>
  )
}

export default FilterCharacter
