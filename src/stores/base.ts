import { filter, union } from 'lodash-es'

export const useBaseStore = defineStore('base', () => {
  const popup = ref<string[]>(['popup-detail-user'])

  const setOpenPopup = (isOpen: boolean, popupName: string) => {
    if (isOpen) {
      popup.value = union(popup.value, [popupName])
    } else {
      popup.value = filter(popup.value, value => {
        return value !== popupName
      })
    }
  }

  return { popup, setOpenPopup }
})
