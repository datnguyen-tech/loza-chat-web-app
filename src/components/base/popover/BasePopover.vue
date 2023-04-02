<template>
  <el-popover
    :placement="placement"
    :width="props.width"
    :hide-after="0"
    :trigger="trigger"
    :show-arrow="false"
    :popper-class="`base-popper ${popperClass}`"
  >
    <div class="popper-content">
      <slot />
    </div>
    <template #reference>
      <slot name="reference" />
    </template>
  </el-popover>
</template>

<script setup lang="ts">
  interface IProp {
    trigger?: 'click' | 'hover'
    width?: number | string
    popperClass?: string
    placement?:
      | 'top'
      | 'top-start'
      | 'top-end'
      | 'bottom'
      | 'bottom-start'
      | 'bottom-end'
      | 'left'
      | 'left-start'
      | 'left-end'
      | 'right'
      | 'right-start'
      | 'right-end'
  }
  const props = withDefaults(defineProps<IProp>(), {
    trigger: 'click',
    width: 200,
    placement: 'bottom',
    popperClass: ''
  })
</script>

<style scoped></style>
