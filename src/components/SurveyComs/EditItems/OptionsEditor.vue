<template>
  <div key="id">
    <div class="flex align-items-center mb-10">
      <div class="mr-10">题目选项</div>
      <el-button circle size="small" icon="Plus" @click="addOptions">
      </el-button>
    </div>
    <div v-for="(item, index) in status" class="flex align-items-center">
      <el-input class="mt-5 mb-5" placeholder="选项" v-model="textArr[index]" />
      <el-button
        circle
        type="danger"
        class="ml-10"
        size="small"
        icon="minus"
        @click="removeOption(index)"
      >
      </el-button>
    </div>
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

const textArr = ref(props.status)

const addOptions = () => {
  updateStatus(props.configKey)
}
const removeOption = (index: number) => {
  updateStatus(props.configKey, index)
}
</script>
