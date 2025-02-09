<template>
  <div class="flex align-items-center space-between">
    <!-- 标题及当前状态 -->
    <div class="flex align-items-center">
      <div class="mr-20">{{ title }}</div>
      <div class="current-status">{{ status }}</div>
    </div>
    <!-- 按钮组 -->
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  status: string
}>()
</script>

<style scoped lang="scss">
.current-status {
  color: var(--info-color);
  font-size: var(--font-size-base);
}
</style>
