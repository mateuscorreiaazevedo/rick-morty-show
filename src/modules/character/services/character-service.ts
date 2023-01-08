import { Service } from '@/modules/core'
import { characterConstants } from '..'

export type FilterProps = {
  page?: number
  name?: string
  status?: 'alive' | 'dead' | 'unknown'
  gender?: 'female' | 'male' | 'genderless' | 'unknown'
  species?: string
  type?: string
}

class CharacterService extends Service {
  async getAll ({ gender, name, status, page = 1, species, type }:FilterProps) {
    const response = await this.request<Characters>({
      url: characterConstants.GET_URL,
      params: {
        page,
        ...(name && { name }),
        ...(gender && { gender }),
        ...(status && { status }),
        ...(species && { species }),
        ...(type && { type }),
      }
    })

    switch (response.code) {
      case 200:
      case 201:
        return response.body
      default:
        throw new Error('Erro no sistema, por favor, tente mais tarde')
    }
  }
}

export const characterService = new CharacterService()
