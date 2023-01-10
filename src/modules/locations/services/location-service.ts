import { Service } from '@/modules/core'
import { locationConstants } from '..'

type GetAllProps = {
  name?: string
  type?: string
  dimension?: string
  page?: number
}

class LocationService extends Service {
  async getAll (props: GetAllProps) {
    const { page = 1, dimension, name, type } = props
    const response = await this.request<{ info: Info; results: Localization[]; error?: string }>({
      url: locationConstants.GET_URL,
      params: {
        page,
        ...(dimension && { dimension }),
        ...(name && { name }),
        ...(type && { type })
      }
    })

    switch (response.code) {
      case 200:
        return response.body
      case 404:
        throw new Error(response.body.error)
      case 422:
        throw new Error(response.body.error)
      case 500:
        throw new Error(response.body.error)
      default:
        throw new Error('Erro no sistema, tente novamente mais tarde')
    }
  }

  async getById (id: string) {
    const response = await this.request<any | Localization>({
      url: locationConstants.GET_BY_ID.replace(':LOCATION_ID', id)
    })

    switch (response.code) {
      case 200:
        return response.body
      case 404:
        throw new Error(response.body.error)
      case 422:
        throw new Error(response.body.error)
      case 500:
        throw new Error(response.body.error)
      default:
        throw new Error('Erro no sistema, tente novamente mais tarde')
    }
  }
}

export const locationService = new LocationService()
