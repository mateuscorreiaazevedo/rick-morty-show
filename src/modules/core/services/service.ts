import { settings } from '@/main/config'
import axios, { AxiosInstance, AxiosResponse } from 'axios'

type HttpRequest = {
  url: string
  method?: 'get' | 'post' | 'put' | 'delete'
  body?: any
  headers?: any
  params?: any
}

export type HttpResponse<T = any> = {
  code: number
  body: T
}

export class Service {
  private api: AxiosInstance

  constructor () {
    this.api = axios.create({
      baseURL: settings.BASE_URL
    })
  }

  async request<T> (data: HttpRequest): Promise<HttpResponse<T>> {
    const { url, body, headers, method, params } = data
    let response: AxiosResponse

    try {
      response = await this.api({
        url,
        method: method || 'get',
        data: body || {},
        headers: {
          ...headers,
          'Content-Type': 'application/json'
        },
        params: params || {}
      })
    } catch (error) {
      response = (error as any).response
    }

    return {
      code: response.status,
      body: response.data
    }
  }
}
