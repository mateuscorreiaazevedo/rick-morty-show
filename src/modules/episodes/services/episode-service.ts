import { Service } from '@/modules/core'
import { episodeConstants } from '..'

class EpisodeService extends Service {
  async getAll () {
    return null
  }

  async getByShowCharacter (id: string) {
    const response = await this.request<any | Episode[]>({
      url: episodeConstants.GET_BY_ID.replace(':EPISODE_ID', id)
    })

    switch (response.code) {
      case 200:
        return response.body
      case 404:
        throw new Error(response.body?.error)
      case 422:
        throw new Error(response.body?.error)
      case 500:
        throw new Error(response.body?.error)
      default:
        throw new Error('Tente novamente mais tarde')
    }
  }
}

export const episodeService = new EpisodeService()
