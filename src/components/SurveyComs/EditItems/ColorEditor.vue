<template>
  <ButtonGroup
    :title="`${configKey === 'titleColor' ? '标题' : '描述'}颜色`"
    :status="`${status}`"
  >
    <el-color-picker v-model="color" show-alpha @change="changeColor" />
  </ButtonGroup>
</template>

<script setup lang="ts">
import ButtonGroup from './ButtonGroup.vue'

const props = defineProps<{
  status: string
  isShow: boolean
  configKey: string
  editCom: VueComType
}>()

const color = ref(props.status)
const updateStatus = inject('updateStatus')

const changeColor = (color: string) => {
  updateStatus(props.configKey, color)
}
</script>
