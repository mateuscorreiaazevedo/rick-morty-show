import { Button, Options, SeachBar, useNotification } from '@/modules/core'
import { BsSearch, BsXCircle } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { characterService } from '..'
import React from 'react'

type Props = {
  setData: React.Dispatch<React.SetStateAction<Characters>>
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const FilterCharacter = ({ setData, setLoading }: Props) => {
  const { query, pathname, push } = useRouter()
  const { setNotification } = useNotification()
  const [values, setValues] = React.useState({
    name: query.name,
    gender: query.gender,
    status: query.status
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setValues(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const response = await characterService.getAll({
        page: Number(query.page),
        gender: values.gender?.toString(),
        name: values.name?.toString(),
        status: values.status?.toString()
      })

      push({
        pathname,
        query: {
          ...query,
          ...(values.gender && { gender: values.gender }),
          ...(values.name && { name: values.name }),
          ...(values.status && { status: values.status }),
        }
      })
      setData(response)
    } catch (error) {
      setNotification((error as any).message)
    } finally {
      setLoading(false)
    }
  }

  const clearFilter = async () => {
    setLoading(true)
    try {
      const response = await characterService.getAll({})
      push({ pathname })
      setData(response)
    } catch (error) {
      setNotification((error as any).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="flex gap-3 items-center justify-between mx-6">
      <SeachBar
        name="name"
        label="Nome"
        placeholder="Insira o nome do personagem"
        setChange={handleChange}
      />
      <div className="flex gap-3 items-center">
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
        <Button
          icon={<BsSearch />}
          label="Pesquisar"
          handleClick={handleSubmit}
        />
        <Button
          icon={<BsXCircle />}
          label="Limpar"
          handleClick={clearFilter}
          type='error'
        />
      </div>
    </section>
  )
}

export default FilterCharacter
