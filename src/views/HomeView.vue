<template>
  <img src="/favicon.png">
  <p>Home view</p>
  <p>{{ testStore.name }}</p>
  <p>{{ baseStore.count }}</p>

  <el-button class="text-5xl" @click="handleClick">I am ElButton</el-button>
</template>

<script setup lang="ts">
  // import { reactive, ref } from 'vue'
  import { useBaseStore } from '@/stores/base'
  import { useTestStore } from '@/modules/Test/store/test'

  const testStore = useTestStore()
  const baseStore = useBaseStore()

  // const count = ref(0)

  function handleClick(): void {
    baseStore.increment()
  }
</script>

<style lang="scss" scoped></style>
