<template>
  <div
    :class="{
      'text-center': status.position
    }"
  >
    <MaterialsHeader
      :desc="status.desc"
      :serialNum="serialNum"
      :title="status.title"
      :titleSize="status.titleSize"
      :descSize="status.descSize"
      :titleWeight="status.titleWeight"
      :descWeight="status.descWeight"
      :titleItalic="status.titleItalic"
      :descItalic="status.descItalic"
      :titleColor="status.titleColor"
      :descColor="status.descColor"
    />

    <div class="radio-group">
      <el-radio-group>
        <el-radio
          v-for="(item, index) in status.options"
          :value="item"
          :key="index"
          size="large"
        >
          {{ item }}
        </el-radio>
      </el-radio-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MaterialsHeader from '@/components/SurveyComs/Common/MaterialsHeader.vue'

import {
  getTextStatus,
  getStringStatus,
  getCurrentStatus,
  getStringStatusByCurrentStatus
} from '@/utils'

import type { OptionsStatus } from '@/types'

const props = defineProps<{
  serialNum: number
  status: OptionsStatus
}>()

const status = computed(() => ({
  title: getTextStatus(props.status.title),
  desc: getTextStatus(props.status.desc),
  options: getStringStatus(props.status.options),
  position: getCurrentStatus(props.status.position),
  titleSize: getStringStatusByCurrentStatus(props.status.titleSize) as string,
  descSize: getStringStatusByCurrentStatus(props.status.descSize) as string,
  titleWeight: getCurrentStatus(props.status.titleWeight),
  descWeight: getCurrentStatus(props.status.descWeight),
  titleItalic: getCurrentStatus(props.status.titleItalic),
  descItalic: getCurrentStatus(props.status.descItalic),
  titleColor: getTextStatus(props.status.titleColor),
  descColor: getTextStatus(props.status.descColor)
}))
</script>

<style scoped></style>
