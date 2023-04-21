import type { IFile } from '@/interface'
import request from '@/plugins/request'

export default class UtilRepository {
  url = 'api/v1'
  async uploadFile(data: Record<string, any>): Promise<IFile> {
    try {
      const result = await request.post(`${this.url}/upload`, data)
      return result.data
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
