import type { IUser } from '../../interface/index'

import request from '@/plugins/request'

export default class AuthRepository {
  url = 'api/v1/user'

  async login(body: Record<string, any>): Promise<Record<string, any>> {
    try {
      const result = await request.post(`${this.url}/login`, body)
      return Promise.resolve(result.data.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async signUp(body: Record<string, any>): Promise<Record<string, any>> {
    try {
      const result = await request.post(`${this.url}`, body)
      return Promise.resolve(result.data.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async getMyInfo(): Promise<IUser> {
    try {
      const result = await request.get(`${this.url}/info`)
      return Promise.resolve(result.data.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async getUserInfo(params: Record<string, any>): Promise<IUser> {
    try {
      const result = await request.get(`${this.url}/search`, { params })
      return Promise.resolve(result.data.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
  async updateUserInfo(data: Record<string, any>): Promise<IUser> {
    try {
      const result = await request.post(`${this.url}/info`, data)
      return Promise.resolve(result.data.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
