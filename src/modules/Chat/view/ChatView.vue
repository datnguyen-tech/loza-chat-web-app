<template>
  <div class="flex w-full">
    <the-nav v-if="listConversation.length"></the-nav>
    <intro-chat />
  </div>
</template>

<script setup lang="ts">
  import { chatStore } from '@/stores'
  import IntroChat from '../components/IntroChat.vue'

  const { listConversation } = storeToRefs(chatStore)
  const { getListConversation } = chatStore

  getListConversation()
</script>

<style scoped></style>
