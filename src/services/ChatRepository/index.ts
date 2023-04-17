import type { IApiResponse, IConversation, IMessage, IRequestBodyConversation, IRequestBodyMessage } from '@/interface'
import request from '@/plugins/request'

export default class RelationRepository {
  url = 'api/v1/chat'

  async createConversation(body: IRequestBodyConversation): Promise<IApiResponse<Array<Record<string, any>>>> {
    try {
      const result = await request.post(`${this.url}/create`, body)
      return Promise.resolve(result.data.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async getListConversation(): Promise<IApiResponse<IConversation[]>> {
    try {
      const result = await request.get(`${this.url}/conversation`)
      return Promise.resolve(result.data.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async getListMessage(params?: Record<string, any>): Promise<IApiResponse<Array<Record<string, any>>>> {
    try {
      const result = await request.get(`${this.url}/conversation/message`, { params })
      result.data.data.content = (result.data.data.content as IMessage[]).reverse()
      return Promise.resolve(result.data.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async sendMessage(body: IRequestBodyMessage): Promise<IMessage> {
    try {
      const result = await request.post(`${this.url}`, body)
      return Promise.resolve(result.data.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async getListFile(
    conversationId: string,
    params?: Record<string, any>
  ): Promise<IApiResponse<Array<Record<string, any>>>> {
    try {
      const result = await request.get(`${this.url}/conversation/${conversationId}/file`, { params })
      return Promise.resolve(result.data.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async getListChatGroup(id: string): Promise<IApiResponse<IConversation[]>> {
    try {
      const result = await request.get(`${this.url}/chat-group/${id}`)
      return Promise.resolve(result.data.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
