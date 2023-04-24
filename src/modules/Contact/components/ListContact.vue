<template>
  <div class="bg-white mx-4 rounded-md">
    <div v-if="tab === 'FRIEND'" class="w-full">
      <div
        v-for="user in (data as IUser[])"
        :key="user._id"
        class="user h-18 flex items-center px-4 cursor-pointer hover:bg-background-hover"
      >
        <img :src="user.avatar" alt="" class="w-12 h-12 rounded-full object-cover" />
        <p class="ml-3 text-base font-medium">{{ user.fullName }}</p>
        <base-popover placement="bottom">
          <p class="px-3 py-2 cursor-pointer font-medium hover:bg-gray-200">Thông tin</p>
          <p class="px-3 py-2 cursor-pointer font-medium hover:bg-gray-200">Chặn người này</p>
          <p class="px-3 py-2 cursor-pointer font-medium text-danger hover:bg-gray-200">Xóa bạn</p>
          <template #reference>
            <base-icon name="more" class="ml-auto p-2 text-[#7589a3] rounded hover:bg-[#dfe2e7]" />
          </template>
        </base-popover>
      </div>
    </div>
    <div v-if="tab === 'GROUP'">
      <div
        v-for="item in (data as IConversation[])"
        :key="item._id"
        class="conversation h-18 flex items-center px-4 cursor-pointer hover:bg-background-hover"
      >
        <thumb-conversation :conversation="item" />
        <div class="ml-3">
          <p class="text-base font-medium">{{ item.conversationName }}</p>
          <p class="text-[13px] mt-1 text-[#7589a3] hover:underline hover:decoration-hyperlink hover:text-hyperlink">
            {{ item.members.length }} thành viên
          </p>
        </div>
        <base-popover placement="bottom">
          <p class="px-3 py-2 cursor-pointer font-medium text-danger hover:bg-gray-200">Rời nhóm</p>
          <template #reference>
            <base-icon name="more" class="ml-auto p-2 text-[#7589a3] rounded hover:bg-[#dfe2e7]" />
          </template>
        </base-popover>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { IConversation, IUser, IUserRequest } from '@/interface'

  interface IProps {
    data: IUser[] | IConversation[] | IUserRequest[]
    tab: 'FRIEND' | 'GROUP' | 'REQUEST'
  }
  const props = withDefaults(defineProps<IProps>(), {
    data: () => []
  })
</script>

<style scoped lang="scss">
  .user:not(:last-child) {
    position: relative;
    &::after {
      content: '';
      width: calc(100% - 72px);
      position: absolute;
      right: 0;
      bottom: 0;
      border-bottom: 1px solid #d6dbe1;
    }
  }
</style>
