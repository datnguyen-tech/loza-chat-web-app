<template>
  <div class="flex w-full">
    <the-nav>
      <div
        class="h-14 px-4 flex items-center cursor-pointer hover:bg-background-hover"
        :class="{ 'bg-background-selected': tabActive === 'FRIEND' }"
        @click="tabActive = 'FRIEND'"
      >
        <base-icon name="user" size="24" />
        <p class="ml-[14px] text-base font-medium">Danh sách bạn bè</p>
      </div>
      <div
        class="h-14 px-4 flex items-center cursor-pointer hover:bg-background-hover"
        :class="{ 'bg-background-selected': tabActive === 'GROUP' }"
        @click="tabActive = 'GROUP'"
      >
        <base-icon name="user-three" size="24" />
        <p class="ml-[14px] text-base font-medium">Danh sách nhóm</p>
      </div>
      <div
        class="h-14 px-4 flex items-center cursor-pointer hover:bg-background-hover"
        :class="{ 'bg-background-selected': tabActive === 'REQUEST' }"
        @click="tabActive = 'REQUEST'"
      >
        <base-icon name="letter" size="24" />
        <p class="ml-[14px] text-base font-medium">Lời mời kết bạn</p>
      </div>
    </the-nav>
    <div class="w-full bg-[#f7f7f8]">
      <div
        class="h-16 text-base font-medium px-[19px] border-b border-solid bg-white border-[#c5c9ce] flex items-center"
      >
        <base-icon :name="getIconTitle" size="24" class="mr-[11px]" />
        {{ getTitle }}
      </div>

      <div class="px-4 h-16 flex items-center text-sm font-medium">{{ getTitleCount }} ({{ total }})</div>
      <list-contact :data="listData" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { IUser } from '@/interface'
  import { apiRelation } from '@/services'
  import { authStore } from '@/stores'
  import ListContact from '../components/ListContact.vue'

  const { user } = storeToRefs(authStore)
  const tabActive = ref<'FRIEND' | 'GROUP' | 'REQUEST'>('FRIEND')
  const listData = ref<IUser[]>([])
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
</script>

<style scoped lang="scss">
  .bg-background-selected:hover {
    background-color: #e5efff;
  }
</style>
