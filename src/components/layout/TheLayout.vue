<template>
  <div v-if="isLoading" class="h-screen w-full flex items-center justify-center">
    <LayoutLoading />
  </div>
  <div v-else class="w-full flex">
    <the-sidebar />
    <router-view />
  </div>
  <popup-detail-user />
</template>

<script setup lang="ts">
  import { useAuthStore } from '@/stores/auth'
  import PopupDetailUser from '../popup/PopupDetailUser.vue'
  const authStore = useAuthStore()

  const isLoading = ref(true)

  onMounted(() => {
    authStore.getInfoUser().then(() => {
      isLoading.value = false
    })
  })
</script>

<style scoped></style>
