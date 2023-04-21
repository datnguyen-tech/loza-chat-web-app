<template>
  <div class="flex w-16 flex-col items-center bg-[#0091ff] pt-4 h-screen">
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

    <router-link v-slot="{ navigate, isActive }" :to="{ name: 'ChatPage' }" custom>
      <div
        role="link"
        class="text-2xl mt-4 text-white w-16 h-16 flex items-center justify-center hover:bg-[#0000001a] cursor-pointer"
        :class="{ 'active-link': isActive }"
        @click="navigate"
      >
        <i-bx-bxs-message />
      </div>
    </router-link>
    <router-link v-slot="{ navigate, isActive }" :to="{ name: 'ContactPage' }" custom>
      <div
        role="link"
        class="text-2xl text-white w-16 h-16 flex items-center justify-center hover:bg-[#0000001a] cursor-pointer"
        :class="{ 'active-link': isActive }"
        @click="navigate"
      >
        <i-bx-bxs-contact />
      </div>
    </router-link>

    <div
      class="text-2xl mt-auto text-white w-16 h-16 flex items-center justify-center hover:bg-[#0000001a] cursor-pointer"
    >
      <i-ep-setting />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useAuthStore } from '@/stores/auth'
  const authStore = useAuthStore()

  const user = computed(() => {
    return authStore.user
  })
</script>

<style scoped>
  .active-link {
    background-color: #006edc;
  }
</style>
