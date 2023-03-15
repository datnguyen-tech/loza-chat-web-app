import { IApiResponse } from '@/interface'
import request from '@/plugins/request'

export default class RelationRepository {
  url = 'api/v1/relation'

  async getListFriend(id: string, params?: Record<string, any>): Promise<IApiResponse> {
    try {
      const result = await request.get(`${this.url}/friend/${id}`, { params })
      return Promise.resolve(result.data.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async getListSuggestFriend(): Promise<IApiResponse> {
    try {
      const result = await request.get(`${this.url}/suggest`)
      return Promise.resolve(result.data.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async getListRequestFriend(): Promise<IApiResponse> {
    try {
      const result = await request.get(`${this.url}/request`)
      return Promise.resolve(result.data.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async requestFriend(body: Record<string, any>): Promise<IApiResponse> {
    try {
      const result = await request.post(`${this.url}`, body)
      return Promise.resolve(result.data.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async rejectFriend(body: Record<string, any>): Promise<IApiResponse> {
    try {
      const result = await request.post(`${this.url}/reject`, body)
      return Promise.resolve(result.data.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
