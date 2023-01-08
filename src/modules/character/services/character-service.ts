import { Service } from '@/modules/core'
import { characterConstants } from '..'

export type FilterProps = {
  page?: number
  name?: string
  status?: string
  gender?: string
}

class CharacterService extends Service {
  async getAll ({ gender, name, status, page = 1 }: FilterProps) {
    const response = await this.request<{ results: Character[]; info: Info; error?: string }>({
      url: characterConstants.GET_URL,
      params: {
        page,
        ...(name && { name }),
        ...(gender && { gender }),
        ...(status && { status })
      }
    })

    switch (response.code) {
      case 200:
        return response.body
      case 404:
        throw new Error(response.body.error)
      case 422:
        throw new Error(response.body.error)
      default:
        throw new Error('Erro no sistema, por favor, tente mais tarde')
    }
  }

  async getById (id: string) {
    const response = await this.request<{ results: Character[]; error?: string }>({
      url: characterConstants.GET_BY_ID.replace(':CHARACTER_ID', id)
    })

    switch (response.code) {
      case 200:
        return response.body
      case 404:
        throw new Error(response.body.error)
      case 422:
        throw new Error(response.body.error)
      default:
        throw new Error('Erro no sistema, por favor, tente mais tarde')
    }
  }
}

export const characterService = new CharacterService()
