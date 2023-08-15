import { defineStore } from 'pinia'
import type { IUser } from '@/interface'
import Cookies from 'js-cookie'
import { apiAuth } from '@/services'

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

  const isLogin = computed(() => {
    const access = Cookies.get('access_token') as string
    return !!access
  })

  const setInfoUser = (info: IUser) => {
    user.value = { ...info }
    console.log(user.value)
  }
  const getInfoUser = async () => {
    const info = await apiAuth.getMyInfo()
    user.value = { ...info }
    return Promise.resolve()
  }
  const logout = () => {
    Cookies.remove('access_token')
    location.href = '/login'
  }

  return { user, isLogin, getInfoUser, logout, setInfoUser }
})
