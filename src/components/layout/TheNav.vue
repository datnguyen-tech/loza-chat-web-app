<template>
  <div class="nav h-screen w-82">
    <div class="search flex items-center justify-between pr-4 pl-4 h-16">
      <el-input v-model="search" :prefix-icon="Search" placeholder="Tìm kiếm" />
      <div class="icon ml-2">
        <i-ant-design-user-add-outlined class="text-lg text-[#565050]" />
      </div>
      <div class="icon">
        <i-ant-design-usergroup-add-outlined class="text-lg text-[#565050]" />
      </div>

      <!-- <base-icon icon="add-user" class="" size="20" @click="handleOpen('popup-search-fr')" />
      <base-icon icon="add-group" class="" size="20" @click="handleOpen('popup-create-group')" /> -->
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
  import { Search } from '@element-plus/icons-vue'

  const search = ref('')

  const handleOpen = popupName => {
    //
  }
</script>

<style scoped lang="scss">
  .nav {
    border-right: 1px solid #dbdbdb;
    :deep(.search) {
      .el-input {
        width: 240px;
        .el-input__inner {
          color: var(--color-text);
        }
      }
    }
    .icon {
      padding: 6px;
      cursor: pointer;
      &:hover {
        background: #eeeff2;
        border-radius: 4px;
      }
    }
  }
</style>
