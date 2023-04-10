import type { IConversation } from './../interface/index'

export const useChatStore = defineStore('chat', () => {
  const listConversation = ref<IConversation[]>([])
  const conversation = ref<IConversation>({} as IConversation)

  return { listConversation, conversation }
})
