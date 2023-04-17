<template>
  <div
    class="h-14 px-4 flex items-center cursor-pointer hover:bg-background-hover"
    :class="{ 'bg-background-selected': tabActive === 'FRIEND' }"
    @click="emit('change', 'FRIEND')"
  >
    <base-icon name="user" size="24" />
    <p class="ml-[14px] text-base font-medium">Danh sách bạn bè</p>
  </div>
  <div
    class="h-14 px-4 flex items-center cursor-pointer hover:bg-background-hover"
    :class="{ 'bg-background-selected': tabActive === 'GROUP' }"
    @click="emit('change', 'GROUP')"
  >
    <base-icon name="user-three" size="24" />
    <p class="ml-[14px] text-base font-medium">Danh sách nhóm</p>
  </div>
  <div
    class="h-14 px-4 flex items-center cursor-pointer hover:bg-background-hover"
    :class="{ 'bg-background-selected': tabActive === 'REQUEST' }"
    @click="emit('change', 'REQUEST')"
  >
    <base-icon name="letter" size="24" />
    <p class="ml-[14px] text-base font-medium">Lời mời kết bạn</p>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    tabActive: 'FRIEND' | 'GROUP' | 'REQUEST'
  }>()
  const emit = defineEmits<{
    (e: 'change', tab: 'FRIEND' | 'GROUP' | 'REQUEST'): void
  }>()
</script>

<style scoped>
  .bg-background-selected:hover {
    background-color: #e5efff;
  }
</style>
