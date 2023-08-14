<template>
  <base-popup name="popup-detail-user" width="352px" class="" :is-show-footer="false" @open="handleOpen">
    <template #title> Thông tin tài khoản </template>
    <div class="content">
      <div class="h-[186px]">
        <img :src="infoUser.banner" alt="banner user" class="max-h-[152px] w-full object-cover" />
        <img
          :src="infoUser.avatar"
          alt="avatar user"
          class="w-18 h-18 rounded-full object-cover absolute bottom-0 left-[140px] border-2 border-solid border-white"
        />
      </div>
      <p class="mt-2.5 text-lg font-semibold text-center">{{ infoUser.fullName }}</p>

      <template v-if="typePopupInfo === 'INFO'">
        <base-button v-if="infoUser.isFriend" size="medium" type="neutral" class="w-40 my-4 mx-auto"
          >Nhắn tin</base-button
        >
        <base-button v-else size="medium" type="neutral" class="w-40 my-4 mx-auto" @click="typePopupInfo = 'REQUEST'"
          >Kết bạn</base-button
        >
        <div class="h-2 my-4 bg-[#eef0f1]"></div>

        <div class="px-5">
          <p class="font-semibold text-sm mb-3.5">Thông tin cá nhân</p>
          <div class="flex">
            <p class="text-sm text-secondary w-32 mb-3.5">Giới tính</p>
            <p class="text-sm">{{ infoUser.gender }}</p>
          </div>
          <div class="flex">
            <p class="text-sm text-secondary w-32 mb-3.5">Ngày sinh</p>
            <p class="text-sm">{{ formatDDMMYY(infoUser.birthday) }}</p>
          </div>
        </div>
      </template>

      <template v-else>
        <el-form class="mt-4 pr-4 pl-4">
          <el-input v-model="greetingMessage" type="textarea" :rows="4"> </el-input>
        </el-form>
        <div class="flex justify-end mt-4 pr-4 pl-4 pb-4">
          <base-button type="neutral" class="w-25 mr-4" @click="typePopupInfo = 'INFO'">Thông tin</base-button>
          <base-button class="w-25">Kết bạn</base-button>
        </div>
      </template>
    </div>
  </base-popup>
</template>

<script setup lang="ts">
  import { authStore, baseStore } from '@/stores'
  import { formatDDMMYY } from '@/utils'

  const { infoUser, typePopupInfo } = storeToRefs(baseStore)
  const { user } = storeToRefs(authStore)

  const greetingMessage = ref('')

  const handleOpen = () => {
    greetingMessage.value = `Xin chào, mình là ${user.value.fullName}. Làm bạn với mình nhé!`
  }
</script>

<style scoped></style>
