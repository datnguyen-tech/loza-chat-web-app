<template>
  <base-popup
    name="popup-detail-user"
    class="popup-detail-user"
    width="352px"
    :is-show-footer="false"
    @open="handleOpen"
  >
    <template #title> Thông tin tài khoản </template>
    <div class="content">
      <div class="h-[186px]">
        <img :src="infoUser.banner" alt="banner user" class="max-h-[152px] w-full object-cover" />
        <img
          :src="infoUser.avatar"
          alt="avatar user"
          class="w-18 h-18 rounded-full object-cover absolute bottom-0 left-[140px] border-2 border-solid border-white"
        />
        <el-upload
          v-if="isEditInfo"
          class="w-fit absolute top-2 right-2"
          action=""
          :auto-upload="false"
          list-type="picture"
          accept=".jpg, .jpeg, .png, .gif"
          :show-file-list="false"
          :on-change="handleSelectFileBanner"
        >
          <img src="/images/camera.png" alt="" />
        </el-upload>
        <el-upload
          v-if="isEditInfo"
          class="w-fit absolute bottom-0 left-[53%]"
          action=""
          :auto-upload="false"
          list-type="picture"
          accept=".jpg, .jpeg, .png, .gif"
          :show-file-list="false"
          :on-change="handleSelectFile"
        >
          <img src="/images/camera.png" alt="" />
        </el-upload>
      </div>

      <p class="mt-2.5 text-lg font-semibold text-center">{{ infoUser.fullName }}</p>
      <template v-if="isEditInfo">
        <el-form label-position="top" class="form-edit">
          <el-form-item class="px-5" label="Tên hiển thị">
            <el-input v-model="formUser.fullName" />
            <p class="text-secondary text-xs mt-1">Sử dụng tên thật để bạn bè dễ dàng nhận diện hơn</p>
          </el-form-item>
          <div class="h-2 my-4 bg-[#eef0f1]"></div>
          <div class="px-5 wrap">
            <p class="font-semibold text-sm mb-[18px]">Thông tin cá nhân</p>
            <el-form-item label="Giới tính" class="gender">
              <el-radio-group v-model="formUser.gender">
                <el-radio label="Nam" size="large">Nam</el-radio>
                <el-radio label="Nữ" size="large">Nữ</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="Ngày sinh" class="birthday">
              <el-select v-model="day">
                <el-option v-for="i in 31" :key="i" :label="i" :value="i" />
              </el-select>
              <el-select v-model="month">
                <el-option v-for="i in 12" :key="i" :label="i" :value="i" />
              </el-select>
              <el-select v-model="year">
                <el-option v-for="i in years" :key="i" :label="i" :value="i" />
              </el-select>
            </el-form-item>
            <div class="flex justify-end mt-4 pb-4">
              <base-button type="neutral" class="w-25 mr-4" @click="cancelEdit">Hủy</base-button>
              <base-button class="w-25" @click="handleUpdateUser">Cập nhật</base-button>
            </div>
          </div>
        </el-form>
      </template>
      <template v-else>
        <template v-if="typePopupInfo === 'INFO'">
          <template v-if="infoUser._id !== user._id">
            <base-button v-if="infoUser.isFriend" size="medium" type="neutral" class="w-40 my-4 mx-auto"
              >Nhắn tin</base-button
            >
            <base-button
              v-else
              size="medium"
              type="neutral"
              class="w-40 my-4 mx-auto"
              @click="typePopupInfo = 'REQUEST'"
              >Kết bạn</base-button
            >
          </template>
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
            <div v-if="infoUser._id === user._id" class="flex">
              <p class="text-sm text-secondary w-32 mb-3.5">Email</p>
              <p class="text-sm">{{ infoUser.email }}</p>
            </div>
          </div>

          <div v-if="infoUser._id === user._id" class="mx-5 py-4">
            <base-button type="neutral" @click="isEditInfo = true">Cập nhật thông tin</base-button>
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
      </template>
    </div>
  </base-popup>
</template>

<script setup lang="ts">
  import type { IUser } from '@/interface'
  import { apiAuth, apiUtil } from '@/services'
  import { authStore, baseStore } from '@/stores'
  import { formatDDMMYY } from '@/utils'

  const { infoUser, typePopupInfo } = storeToRefs(baseStore)
  const { user } = storeToRefs(authStore)
  const { setInfoUser } = authStore
  const { setOpenPopup } = baseStore

  const greetingMessage = ref('')
  const isEditInfo = ref(false)
  const formUser = ref<IUser>({
    _id: '',
    fullName: '',
    avatar: '',
    banner: '',
    email: '',
    gender: '',
    birthday: ''
  })
  const day = ref(0)
  const month = ref(0)
  const year = ref(0)
  const years = ref<number[]>([])

  const fileBanner = ref<Record<string, any>>({})
  const fileAvatar = ref<Record<string, any>>({})

  const handleOpen = () => {
    greetingMessage.value = `Xin chào, mình là ${user.value.fullName}. Làm bạn với mình nhé!`
    isEditInfo.value = false
    formUser.value = { ...user.value }
    const birthDay = new Date(user.value.birthday)
    day.value = birthDay.getDate()
    month.value = birthDay.getMonth() + 1
    year.value = birthDay.getFullYear()
    years.value = Array(102)
      .fill(0)
      .map((e, i) => i + 1900)
    fileBanner.value = {}
    fileAvatar.value = {}
  }

  const cancelEdit = () => {
    isEditInfo.value = false
    formUser.value = { ...user.value }
    const birthDay = new Date(user.value.birthday)
    day.value = birthDay.getDate()
    month.value = birthDay.getMonth() + 1
    year.value = birthDay.getFullYear()
  }

  const handleSelectFile = (file: Record<string, any>) => {
    infoUser.value.avatar = file.url
    file.type = 'AVATAR'
    fileAvatar.value = file
  }
  const handleSelectFileBanner = (file: Record<string, any>) => {
    infoUser.value.banner = file.url
    file.type = 'BANNER'
    fileBanner.value = file
  }

  const handleUploadFile = async (file: Record<string, any>) => {
    try {
      const formData = new FormData()
      formData.append('file', file.raw)
      const { url } = await apiUtil.uploadFile(formData)
      return Promise.resolve(url)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  const handleUpdateUser = async () => {
    try {
      if (fileAvatar?.value.type && fileBanner?.value.type) {
        const promiseArr = await Promise.all([handleUploadFile(fileAvatar.value), handleUploadFile(fileBanner.value)])
        formUser.value.avatar = promiseArr[0]
        formUser.value.banner = promiseArr[1]
      } else if (fileAvatar?.value.type || fileBanner?.value.type) {
        const type: 'BANNER' | 'AVATAR' = fileAvatar?.value.type ? fileAvatar?.value.type : fileBanner?.value.type
        const url = await handleUploadFile(type === 'BANNER' ? fileBanner.value : fileAvatar.value)
        if (type === 'BANNER') {
          formUser.value.banner = url
        } else {
          formUser.value.avatar = url
        }
      }

      const date = new Date(`${month.value}/${day.value}/${year.value}`).toISOString()

      const userUpdated = await apiAuth.updateUserInfo({ ...formUser.value, birthday: date })
      setInfoUser(userUpdated)
      fileBanner.value = {}
      fileAvatar.value = {}
      setOpenPopup('popup-detail-user', false)
    } catch (error) {
      console.log(error)
    }
  }
</script>

<style scoped lang="scss">
  .form-edit {
    :deep(.wrap) {
      .gender {
        .el-form-item__label {
          margin-bottom: 0;
        }
        .el-form-item__content {
          .el-radio.el-radio--large {
            height: 32px;
          }
        }
      }
      .birthday {
        .el-form-item__content {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 10px;
        }
      }
    }
  }
</style>
