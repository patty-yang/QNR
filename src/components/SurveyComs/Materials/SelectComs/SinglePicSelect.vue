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

    <div class="flex wrap">
      <el-radio-group class="flex wrap" v-model="radioValue">
        <el-radio
          v-for="(item, index) in state.options"
          class="pic-option flex mb-15"
          :value="item.picTitle"
          :key="index"
        >
          <PicItem :key="index" v-bind="{ ...item, index }" />
        </el-radio>
      </el-radio-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MaterialsHeader from '@/components/SurveyComs/Common/MaterialsHeader.vue'
import PicItem from '@/components/SurveyComs/Common/PicItem.vue'

import {
  getTextStatus,
  getCurrentStatus,
  getStringStatusByCurrentStatus,
  getPicTitleDescStatusArr
} from '@/utils'

import type { OptionsStatus } from '@/types'

const props = defineProps<{
  serialNum: number
  status: OptionsStatus
}>()

const radioValue = ref('')
const state = computed(() => ({
  title: getTextStatus(props.status.title),
  desc: getTextStatus(props.status.desc),
  position: getCurrentStatus(props.status.position),
  options: getPicTitleDescStatusArr(props.status.options) as {
    picTitle: string
    picDesc: string
    value: string
  }[],
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

<style scoped lang="scss">
.pic-option {
  height: auto;
  flex-direction: column-reverse;
}
</style>
