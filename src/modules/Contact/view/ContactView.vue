<template>
  <div class="flex w-full">
    <the-nav>
      <nav-contact :tab-active="tabActive" @change="handleChangeTab" />
    </the-nav>
    <div class="w-full bg-[#f7f7f8]">
      <div
        class="h-16 text-base font-medium px-[19px] border-b border-solid bg-white border-[#c5c9ce] flex items-center"
      >
        <base-icon :name="getIconTitle" size="24" class="mr-[11px]" />
        {{ getTitle }}
      </div>

      <div class="px-4 h-16 flex items-center text-sm font-medium">{{ getTitleCount }} ({{ total }})</div>
      <list-contact v-if="tabActive !== 'REQUEST'" :data="listData" :tab="tabActive" />
      <invitation-received v-else :data="(listData as IUserRequest[])" :list-suggest-friend="listSuggestFriend" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { IConversation, IUser, IUserRequest } from '@/interface'
  import { apiChat, apiRelation } from '@/services'
  import { authStore } from '@/stores'
  import ListContact from '../components/ListContact.vue'
  import InvitationReceived from '../components/InvitationReceived.vue'
  import NavContact from '../components/NavContact.vue'

  const { user } = storeToRefs(authStore)
  const tabActive = ref<'FRIEND' | 'GROUP' | 'REQUEST'>('FRIEND')
  const listData = ref<IUser[] | IConversation[] | IUserRequest[]>([])
  const listSuggestFriend = ref<IUser[]>([])
  const total = ref(0)

  const getTitle = computed(() => {
    return tabActive.value === 'FRIEND'
      ? 'Danh sách bạn bè'
      : tabActive.value === 'GROUP'
      ? 'Danh sách nhóm'
      : 'Lời mời kết bạn'
  })

  const getIconTitle = computed(() => {
    return tabActive.value === 'FRIEND' ? 'user' : tabActive.value === 'GROUP' ? 'user-three' : 'letter'
  })

  const getTitleCount = computed(() => {
    return tabActive.value === 'FRIEND' ? 'Bạn bè' : tabActive.value === 'GROUP' ? 'Nhóm' : 'Lời mời đã nhận'
  })

  const getListFriend = async () => {
    try {
      const result = await apiRelation.getListFriend(user.value._id)
      listData.value = result.content
      total.value = result.total!
    } catch (error) {
      listData.value = []
      total.value = 0
    }
  }
  getListFriend()

  const getListChatGroup = async () => {
    try {
      const result = await apiChat.getListChatGroup(user.value._id)
      listData.value = result.content
      total.value = result.total!
    } catch (error) {
      listData.value = []
      total.value = 0
    }
  }
  const getListFriendRequest = async () => {
    try {
      const result = await apiRelation.getListRequestFriend()
      listData.value = result.content
      total.value = result.total!
    } catch (error) {
      listData.value = []
      total.value = 0
    }
  }
  const getListSuggestFriend = async () => {
    try {
      const result = await apiRelation.getListSuggestFriend()
      listSuggestFriend.value = result.content
    } catch (error) {
      listSuggestFriend.value = []
    }
  }

  const handleChangeTab = async (tab: 'FRIEND' | 'GROUP' | 'REQUEST') => {
    if (tab === 'FRIEND') {
      await getListFriend()
    } else if (tab === 'GROUP') {
      await getListChatGroup()
    } else {
      await Promise.all([getListFriendRequest(), getListSuggestFriend()])
    }
    tabActive.value = tab
  }
</script>

<style scoped lang="scss"></style>
