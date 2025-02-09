<template>
  <div class="edit-panel-container">
    <div class="mb-20" v-for="(item, key) in com.status" :key="item.id">
      <component
        v-bind="item"
        v-if="item.isShow"
        :is="item.editCom"
        :config-key="key"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Status } from '@/types'

const props = defineProps<{
  com: Status
}>()
</script>

<style scoped lang="scss">
.edit-panel-container {
  padding: 30px;
  background-color: var(--bg-col);
}
</style>
