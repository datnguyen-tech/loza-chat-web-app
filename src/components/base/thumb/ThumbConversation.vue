<template>
  <div v-if="conversation._id" class="thumb-conversation mr-[10px] h-12 w-12">
    <div
      v-if="conversation.conversationType === 'GROUP'"
      class="h-full w-full"
      :class="conversation.members.length > 3 ? 'group-four' : 'group-three'"
    >
      <img
        v-if="conversation.conversationThumb"
        :src="conversation.conversationThumb"
        alt=""
        class="h-full w-full rounded-full object-cover"
      />
      <div v-else class="h-full w-full">
        <div v-for="index in 3" :key="index" class="avatar">
          <img :src="getAvatar(index)" alt="" class="rounded-full object-cover" />
        </div>
        <div v-if="conversation.members.length > 3" class="avatar">
          <span class="text-xs font-medium text-description">{{ conversation.members.length }}</span>
        </div>
      </div>
    </div>
    <img v-else :src="getAvatarReceiver" alt="" class="h-full w-full rounded-full object-cover" />
  </div>
</template>

<script setup lang="ts">
  import type { IConversation } from '@/interface'
  import { authStore } from '@/stores'
  import { filter } from 'lodash-es'

  interface IProps {
    conversation: IConversation
  }
  const props = withDefaults(defineProps<IProps>(), {
    conversation: () => ({} as IConversation)
  })

  const { user } = storeToRefs(authStore)

  const getAvatarReceiver = computed(() => {
    if (props.conversation.conversationType === 'DM') {
      const receiver = filter(props.conversation.members, member => member._id !== user.value._id)
      return receiver[0].avatar
    }

    return ''
  })

  const getAvatar = (index: number) => {
    return props.conversation.members[index - 1].avatar
  }
</script>

<style scoped lang="scss">
  .thumb-conversation {
    .avatar {
      width: 28px;
      height: 28px;
      position: absolute;
      img {
        @apply border border-white;
      }
    }
    .group-three {
      position: relative;
      .avatar:nth-child(1) {
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
      }
      .avatar:nth-child(2) {
        bottom: 0;
        left: 0;
      }
      .avatar:nth-child(3) {
        bottom: 0;
        right: 0;
      }
    }
    .group-four {
      position: relative;
      .avatar:nth-child(1) {
        top: 0;
        left: 0;
      }
      .avatar:nth-child(2) {
        top: 0;
        right: 0;
      }
      .avatar:nth-child(3) {
        bottom: 0;
        left: 0;
      }
      .avatar:nth-child(4) {
        bottom: 0;
        right: 0;
        background: linear-gradient(rgb(232, 234, 239), rgb(232, 234, 239), rgb(232, 234, 239));
        border-radius: 50%;
        border: 1px solid #fff;
        text-align: center;
      }
    }
  }
</style>
