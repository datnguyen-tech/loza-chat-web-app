import { useBaseStore } from './base'
import { useAuthStore } from './auth'
import { useChatStore } from './chat'

const baseStore = useBaseStore()
const chatStore = useChatStore()
const authStore = useAuthStore()

export { baseStore, chatStore, authStore }
