import { Button, Options, SeachBar, useNotification } from '@/modules/core'
import { characterService } from '..'
import React from 'react'

type Props = {
  setData: React.Dispatch<React.SetStateAction<Character[]>>
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const FilterCharacter = ({ setData, setLoading }: Props) => {
  const [name, setName] = React.useState('')
  const [gender, setGender] = React.useState('')
  const [status, setStatus] = React.useState('')
  const { setNotification } = useNotification()

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const response = await characterService.getAll({
        gender,
        name,
        status
      })
      setData(response.results)
    } catch (error) {
      setNotification((error as any).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="flex gap-3 items-center justify-between mx-6">
      <SeachBar name="name" label="Nome" placeholder="Insira o nome do personagem" setChange={setName} />
      <div className="flex gap-3 items-center">
        <Options
          setChange={setGender}
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
          setChange={setStatus}
          label="Status"
          name="status"
          options={[
            { label: 'Vivo', value: 'Alive' },
            { label: 'Morto', value: 'Dead' },
            { label: 'Desconhecido', value: 'unknown' }
          ]}
        />
        <Button
          tooltip='Pesquisar Personagens'
          label='Pesquisar'
          handleClick={handleSubmit}
         />
      </div>
    </section>
  )
}

export default FilterCharacter
