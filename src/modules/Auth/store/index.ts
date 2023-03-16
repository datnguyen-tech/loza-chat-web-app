import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IUser } from '@/interface'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<IUser>({
    _id: '',
    fullName: '',
    avatar: '',
    banner: '',
    email: '',
    gender: '',
    birthday: ''
  })

  return { user }
})
