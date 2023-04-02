<template>
  <div class="flex w-16 flex-col items-center justify-between bg-[#0091ff] pt-4 pb-4 h-screen">
    <base-popover placement="right">
      <div class="font-medium">
        <p class="px-3 text-lg pb-[6px] border-b border-solid border-border-primary mb-[6px]">
          {{ user.fullName }}
        </p>
        <p class="px-3 py-2 cursor-pointer hover:bg-gray-200">Hồ sơ của bạn</p>
        <p class="px-3 py-2 cursor-pointer hover:bg-gray-200" @click="authStore.logout">Đăng xuất</p>
      </div>
      <template #reference>
        <img :src="user.avatar" alt="avatar user" class="w-12 h-12 rounded-full object-cover cursor-pointer" />
      </template>
    </base-popover>
    <i-ep-add-location />
    <i-bx-bxs-message />
  </div>
</template>

<script setup lang="ts">
  import { useAuthStore } from '@/stores/auth'
  const authStore = useAuthStore()

  const user = computed(() => {
    return authStore.user
  })
</script>

<style scoped></style>
