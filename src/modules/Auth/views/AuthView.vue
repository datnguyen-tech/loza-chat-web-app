<template>
  <div class="auth-page flex h-screen">
    <div class="left w-1/4 bg-cover bg-center"></div>
    <div class="right flex flex-1 items-center justify-center">
      <div class="form w-full max-w-lg bg-white p-10 shadow-lg">
        <h2 class="mb-4 text-center text-3xl font-semibold">{{ type === 'LOGIN' ? 'Đăng nhập' : 'Đăng ký' }}</h2>
        <el-form class="base-form" label-position="top">
          <el-form-item v-if="type === 'SIGNUP'" label="Họ Tên">
            <el-input v-model="form.fullName" placeholder="Nhập hộ tên" />
          </el-form-item>
          <el-form-item label="Tài khoản">
            <el-input v-model="form.email" placeholder="Nhập email" />
          </el-form-item>
          <el-form-item label="Mật khẩu">
            <el-input v-model="form.password" type="password" placeholder="Nhập mật khẩu" />
          </el-form-item>
          <el-form-item v-if="type === 'SIGNUP'" label="Nhập lại mật khẩu">
            <el-input v-model="form.rePassword" type="password" placeholder="Nhập mật khẩu" />
          </el-form-item>
          <!-- <div
            class="btn cursor-pointer border-0 border-none bg-blue-500 text-base font-medium text-white hover:bg-blue-700"
            @click="handleSubmitAuth"
          >
            {{ type === 'LOGIN' ? 'Đăng nhập' : 'Đăng ký' }}
          </div> -->

          <base-button class="w-full" @click="handleSubmitAuth">
            {{ type === 'LOGIN' ? 'Đăng nhập' : 'Đăng ký' }}
          </base-button>
          <p v-if="type === 'LOGIN'" class="text-md mt-2 text-center text-gray-400">
            Chưa có tài khoản?
            <span class="cursor-pointer text-blue-400" @click="type = 'SIGNUP'"> Tạo tài khoản</span>
          </p>
          <p v-else class="text-md mt-2 text-center text-gray-400">
            Đã có tài khoản?
            <span class="cursor-pointer text-blue-400" @click="type = 'LOGIN'"> Đăng nhập</span>
          </p>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const form = ref<Record<string, any>>({
    fullName: '',
    email: '',
    password: '',
    rePassword: ''
  })
  const type = ref<'LOGIN' | 'SIGNUP'>('LOGIN')

  const handleSubmitAuth = () => {
    console.log('aaa')
  }
</script>

<style scoped lang="scss">
  .auth-page {
    .left {
      background-image: url('/public/images/auth/banner-authpage.webp');
    }
    .right {
      background-color: #f6f7fc;
    }
  }
</style>
