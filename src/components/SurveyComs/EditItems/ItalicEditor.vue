<template>
  <ButtonGroup
    :title="`${configKey === 'titleSize' ? '标题' : '描述'}倾斜`"
    :status="`${status[currentStatus]}`"
  >
    <el-button-group>
      <el-button
        :class="{
          select: currentStatus === 0
        }"
        @click="changeSize(0)"
      >
        <font-awesome-icon icon="italic" size="lg" />
      </el-button>

      <el-button
        :class="{
          select: currentStatus === 1
        }"
        @click="changeSize(1)"
      >
        <font-awesome-icon icon="italic" size="sm" />
      </el-button>
    </el-button-group>
  </ButtonGroup>
</template>

<script setup lang="ts">
import ButtonGroup from './ButtonGroup.vue'

import type { VueComType } from '@/types'
const props = defineProps<{
  currentStatus: number
  status: string[]
  isShow: boolean
  configKey: string
  editCom: VueComType
}>()
const updateStatus = inject('updateStatus') as (
  configKey: string,
  payload?: string | number | boolean | object
) => void

const changeSize = (size: number) => {
  updateStatus(props.configKey, size)
}
</script>
