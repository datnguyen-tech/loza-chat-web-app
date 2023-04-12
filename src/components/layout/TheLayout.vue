<template>
  <div v-if="isLoading" class="h-screen w-full flex items-center justify-center">
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

  const isLoading = ref(true)

  onMounted(() => {
    authStore.getInfoUser().then(() => {
      isLoading.value = false
    })
  })
</script>

<style scoped></style>
