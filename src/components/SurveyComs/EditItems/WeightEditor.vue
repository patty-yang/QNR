<template>
  <ButtonGroup
    :title="`${configKey === 'titleWeight' ? '标题' : '描述'}加粗`"
    :status="`${status[currentStatus]}`"
  >
    <el-button-group>
      <el-button
        :class="{
          select: currentStatus === 0
        }"
        @click="changeWeight(0)"
      >
        <font-awesome-icon icon="bold" size="lg" />
      </el-button>

      <el-button
        :class="{
          select: currentStatus === 1
        }"
        @click="changeWeight(1)"
      >
        <font-awesome-icon icon="bold" size="sm" />
      </el-button>
    </el-button-group>
  </ButtonGroup>
</template>

<script setup lang="ts">
import ButtonGroup from './ButtonGroup.vue'

const props = defineProps<{
  currentStatus: number
  status: string[]
  isShow: boolean
  configKey: string
  editCom: VueComType
}>()
const updateStatus = inject('updateStatus')

const changeWeight = (index: number) => {
  updateStatus(props.configKey, index)
}
</script>
