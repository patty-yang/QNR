<template>
  <div
    :class="{
      'text-center': status.position
    }"
  >
    <MaterialsHeader
      :desc="state.desc"
      :serialNum="serialNum"
      :title="state.title"
      :titleSize="state.titleSize"
      :descSize="state.descSize"
      :titleWeight="state.titleWeight"
      :descWeight="state.descWeight"
      :titleItalic="state.titleItalic"
      :descItalic="state.descItalic"
      :titleColor="state.titleColor"
      :descColor="state.descColor"
    />

    <div class="radio-group">
      <el-radio-group>
        <el-radio
          v-for="(item, index) in state.options"
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

const state = computed(() => ({
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
