<template>
  <div class="bg-white mx-4 rounded-md">
    <div
      v-for="user in data"
      :key="user._id"
      class="user h-18 flex items-center px-4 cursor-pointer hover:bg-background-hover"
    >
      <img :src="user.avatar" alt="" class="w-12 h-12 rounded-full object-cover" />
      <p class="ml-3 text-base font-medium">{{ user.fullName }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { IUser } from '@/interface'

  interface IProps {
    data: IUser[]
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
