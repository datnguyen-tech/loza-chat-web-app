<template>
  <div
    class="button"
    :class="[
      `button--${props.size}`,
      `button--${props.type}`,
      { 'button--loading': props.loading, 'button--disabled': props.disabled }
    ]"
    @click="emit('click')"
  >
    <el-icon v-if="props.loading" class="is-loading">
      <i-ep-loading />
    </el-icon>
    <div class="text-base font-semibold title">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
  interface IProps {
    size?: 'large' | 'medium' | 'small'
    type?: 'primary' | 'neutral' | 'secondary'
    disabled?: boolean
    loading?: boolean
  }
  const props = withDefaults(defineProps<IProps>(), {
    size: 'large',
    type: 'primary',
    disabled: false,
    loading: false
  })

  const emit = defineEmits(['click'])
</script>

<style scoped lang="scss">
  .button {
    border-radius: 3px;
    cursor: pointer;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    &--large {
      height: 40px;
    }
    &--medium {
      height: 32px;
    }
    &--small {
      height: 25px;
    }
    &--primary {
      background-color: var(--background-button-primary);
      color: var(--text-button-primary);
      &:hover {
        background-color: var(--background-button-primary-hover);
      }
    }
    &--secondary {
      background-color: var(--background-button-secondary);
      color: var(--text-button-secondary);
      &:hover {
        background-color: var(--background-button-secondary-hover);
      }
    }
    &--neutral {
      background-color: var(--background-button-neutral);
      color: var(--text-button-neutral);
      &:hover {
        background-color: var(--background-button-neutral-hover);
      }
    }

    .is-loading {
      margin-right: 6px;
    }
  }
</style>
