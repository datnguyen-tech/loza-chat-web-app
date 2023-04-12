import { apiChat } from '@/services'
import type { IConversation } from './../interface/index'

export const useChatStore = defineStore('chat', () => {
  const listConversation = ref<IConversation[]>([])
  const conversation = ref<IConversation>({} as IConversation)

  const getListConversation = async () => {
    try {
      const rs = await apiChat.getListConversation()
      listConversation.value = rs.content!
    } catch (error) {
      listConversation.value = []
    }
  }

  return { listConversation, conversation, getListConversation }
})
