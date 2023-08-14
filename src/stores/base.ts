import type { IUser } from '@/interface'
import { apiAuth } from '@/services'
import { filter, union } from 'lodash-es'

type TypePopupUser = 'INFO' | 'REQUEST'

export const useBaseStore = defineStore('base', () => {
  const popup = ref<string[]>([])
  const infoUser = ref<IUser>({
    _id: '',
    fullName: '',
    avatar: '',
    banner: '',
    email: '',
    gender: '',
    birthday: ''
  })
  const typePopupInfo = ref<TypePopupUser>('INFO')

  const setOpenPopup = (popupName: string, isOpen = true) => {
    if (isOpen) {
      popup.value = union(popup.value, [popupName])
    } else {
      popup.value = filter(popup.value, value => {
        return value !== popupName
      })
    }
  }

  const setInfoUserToView = async (_id: string, type: TypePopupUser) => {
    infoUser.value = await apiAuth.getUserInfo({ _id })
    typePopupInfo.value = type
    setOpenPopup('popup-detail-user')
  }

  return { popup, setOpenPopup, infoUser, setInfoUserToView, typePopupInfo }
})
