<template>
  <div class="flex flex-1 flex-col justify-center intro-chat">
    <div class="m-[0_auto_50px] w-[415px] text-center">
      <p class="text-[22px]">Chào mừng đến với <span class="font-bold">Loza PC!</span></p>
      <p class="mt-[20px] text-sm">
        Khám phá những tiện ích hỗ trợ làm việc và trò chuyện cùng người thân, bạn bè được tối ưu hoá cho máy tính của
        bạn.
      </p>
    </div>
    <el-carousel indicator-position="outside" height="320px" arrow="always" class="slider">
      <el-carousel-item v-for="(item, index) in listIntro" :key="index" class="text-center">
        <img :src="item.image" alt="" class="m-auto w-[380px]" />
        <p class="mt-[20px] mb-[10px] text-lg font-medium text-active">{{ item.text }}</p>
        <p class="text-sm">{{ item.desc }}</p>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
  import { useChatStore } from '@/stores/chat'

  const chatStore = useChatStore()

  const listIntro = ref<Array<Record<string, any>>>([
    {
      image: 'https://chat.zalo.me/assets/quick-message-onboard.3950179c175f636e91e3169b65d1b3e2.png',
      text: 'Nhắn tin nhiều hơn, soạn thảo ít hơn',
      desc: 'Sử dụng tin nhắn nhanh để lưu sẵn các tin nhắn thường dùng và gửi nhanh trong hội thoại bất kỳ.'
    },
    {
      image: 'https://chat.zalo.me/assets/vanish_onboard.95edcd15d875cae4d6d504d739eaa977.png',
      text: 'Tin nhắn tự xóa',
      desc: 'Từ giờ tin nhắn đã có thể tự động tự xóa sau khoảng thời gian nhất định.'
    },
    {
      image: 'https://chat.zalo.me/assets/inapp-welcome-screen-e2ee-06.58e0949293cc655af6dfbb74ede92bf3.svg',
      text: 'Mã hóa đầu cuối',
      desc: 'Nội dung tin nhắn được mã hóa trong suốt quá trình gửi và nhận.'
    },
    {
      image: 'https://chat.zalo.me/assets/inapp-welcome-screen-0.19afb7ab96c7506bb92b41134c4e334c.jpg',
      text: 'Gọi nhóm và làm việc hiệu quả với Loza Group Call',
      desc: 'Trao đổi công việc mọi lúc mọi nơi'
    },
    {
      image: 'https://chat.zalo.me/assets/inapp-welcome-screen-02.7f8cab265c34128a01a19f3bcd5f327a.jpg',
      text: 'Chat nhóm với đồng nghiệp',
      desc: 'Tiện lợi hơn, nhờ các công cụ hỗ trợ chat trên máy tính'
    }
  ])

  const conversation = computed(() => {
    return chatStore.conversation
  })
</script>

<style scoped lang="scss">
  .intro-chat {
    :deep(.slider) {
      .el-carousel__arrow {
        background: transparent;
        i {
          font-size: 25px;
          color: #0a0b0d;
        }
        &:hover {
          i {
            color: #0068ff;
          }
        }
      }
      .el-carousel__indicators {
        .el-carousel__indicator.is-active {
          .el-carousel__button {
            background-color: #0068ff;
          }
        }
      }
    }
  }
</style>
