<template>
  <div key="id">
    <div class="mb-10">描述内容2</div>
    <el-input
      placeholder="请输入描述内容"
      type="textarea"
      :rows="5"
      v-model="text"
      @update:modelValue="inputHandle"
    />
  </div>
</template>

<script setup lang="ts">
import type { VueComType } from '@/types'

const updateStatus = inject('updateStatus') as (
  configKey: string,
  payload?: string | number | boolean | object
) => void

const props = defineProps<{
  status: string
  isShow: boolean
  configKey: string
  editCom: VueComType
  id: string
}>()

const text = ref(props.status)

const inputHandle = (v: string) => {
  updateStatus(props.configKey, v)
}
</script>
