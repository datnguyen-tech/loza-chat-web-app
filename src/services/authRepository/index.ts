import type { IUser } from '../../interface/index'
import request from '@/plugins/request'
import Cookies from 'js-cookie'

export default class AuthRepository {
  url = 'api/v1/user'

  async login(body: Record<string, any>): Promise<void> {
    try {
      const result = await request.post(`${this.url}/login`, body)
      request.defaults.headers.common['Authorization'] = `Bearer ${result.data.data.accessToken}`
      Cookies.set('access_token', result.data.data.accessToken, { expires: 7 })
      return Promise.resolve()
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
