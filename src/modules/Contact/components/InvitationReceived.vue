<template>
  <div class="grid grid-cols-3 gap-[10px] mx-4">
    <div v-for="item in data" :key="item._id" class="h-[216px] bg-white rounded-md p-4 cursor-pointer shadow-sm">
      <div class="flex items-center">
        <img :src="item.fromId?.avatar" alt="avatar" class="w-12 h-12 rounded-full object-cover" />
        <div class="flex flex-col ml-2">
          <p class="text-base mb-[2px] font-medium">{{ item.fromId?.fullName }}</p>
          <p class="text-[13px] text-[#7589a3]">{{ formatDDMMYY(item.createdAt) }}</p>
        </div>
      </div>
      <div class="mt-[17px] mb-4 h-12 p-2 border border-solid border-[#d8dbdf] rounded bg-[#f9fafb] overflow-y-auto">
        <p class="mr-2 text-sm break-words">{{ item.message }}</p>
      </div>
      <div class="flex justify-between">
        <base-button class="flex-1 mr-2" type="neutral">Từ chối</base-button>
        <base-button type="secondary" class="flex-1">Đồng ý</base-button>
      </div>
    </div>
  </div>
  <div class="px-4 h-16 flex items-center text-sm font-medium">Gợi ý kết bạn ({{ listSuggestFriend.length }})</div>
  <div class="grid grid-cols-3 gap-[10px] mx-4">
    <div
      v-for="item in listSuggestFriend"
      :key="item._id"
      class="h-[138px] bg-white rounded-md p-4 cursor-pointer shadow-sm"
    >
      <div class="flex items-center">
        <img :src="item.avatar" alt="avatar" class="w-12 h-12 rounded-full object-cover" />
        <div class="flex flex-col ml-2">
          <p class="text-base mb-[2px] font-medium">{{ item.fullName }}</p>
          <p class="text-[13px] text-[#7589a3]">Có thể bạn quen</p>
        </div>
      </div>
      <div class="flex justify-between mt-[17px]">
        <base-button class="flex-1 mr-2" type="neutral">Bỏ qua</base-button>
        <base-button type="neutral" class="flex-1" @click="viewInfoUser(item)">Kết bạn</base-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { IUser, IUserRequest } from '@/interface'
  import { formatDDMMYY } from '@/utils/format'
  import { baseStore } from '@/stores'
  interface IProps {
    data: IUserRequest[]
    listSuggestFriend: IUser[]
  }
  const props = withDefaults(defineProps<IProps>(), {
    data: () => [],
    listSuggestFriend: () => []
  })

  const { setInfoUserToView } = baseStore

  const viewInfoUser = (user: IUser) => {
    setInfoUserToView(user._id, 'REQUEST')
  }
</script>

<style scoped></style>
