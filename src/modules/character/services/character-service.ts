import { Service } from '@/modules/core'
import { characterConstants } from '..'

class CharacterService extends Service {
  async getAll () {
    const response = await this.request<Characters>({
      url: characterConstants.GET_URL
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
