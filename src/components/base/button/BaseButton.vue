<template>
  <div
    class="base-button"
    :class="[
      { 'base-button--loading': props.loading, 'base-button--disabled': props.disabled },
      `base-button-${props.type}`
    ]"
  ></div>
</template>

<script setup lang="ts">
  interface IProps {
    type: 'primary' | 'neutral'
    disabled: boolean
    loading: boolean
  }
  const props = withDefaults(defineProps<IProps>(), {
    type: 'primary',
    disabled: false,
    loading: false
  })
</script>

<style scoped></style>
