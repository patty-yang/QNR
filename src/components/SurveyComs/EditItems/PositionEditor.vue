<template>
  <ButtonGroup title="居中设置" :status="status[currentStatus]">
    <el-button-group>
      <el-button
        :class="{
          select: currentStatus === 0
        }"
        @click="changePosition(0)"
      >
        <font-awesome-icon icon="align-left" />
      </el-button>
      <el-button
        :class="{
          select: currentStatus === 1
        }"
        @click="changePosition(1)"
      >
        <font-awesome-icon icon="align-center" />
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

const changePosition = (position: number) => {
  updateStatus(props.configKey, position)
}
</script>
