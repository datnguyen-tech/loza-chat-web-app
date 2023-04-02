<template>
  <div class="h-screen w-full flex items-center justify-center" v-if="isLoading">
    <LayoutLoading />
  </div>
  <div v-else class="w-full flex">
    <the-sidebar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
  import { useAuthStore } from '@/stores/auth'
  const authStore = useAuthStore()

  const isLoading = ref(false)

  onMounted(() => {
    authStore.getInfoUser()
  })
</script>

<style scoped></style>
