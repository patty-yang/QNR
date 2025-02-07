<template>
  <div class="container mb-15">
    <!-- 标题 -->
    <h2
      class="title font-weight-100 mb-15"
      :style="{
        fontSize: `${titleSize}px`,
        color: `${titleColor}`
      }"
    >
      <span class="mr-10"> {{ serialNum }}.</span>
      <span
        :class="{
          'font-bold': !titleWeight,
          'font-italic': !titleItalic
        }"
      >
        {{ title }}
      </span>
    </h2>
    <!-- 描述 -->
    <div
      class="desc"
      :class="{
        'font-bold': !descWeight,
        'font-italic': !descItalic
      }"
      :style="{
        fontSize: `${descSize}px`,
        color: `${titleColor}`
      }"
    >
      {{ desc }}
    </div>
  </div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    serialNum: number
    title: string
    desc: string
    titleSize: string
    descSize: string
    titleWeight: number
    descWeight: number
    descItalic: number
    titleItalic: number
    titleColor: string
    descColor: string
  }>(),
  {
    titleSize: '22',
    descSize: '16',
    titleWeight: 0,
    descWeight: 0
  }
)
</script>

<style scoped lang="scss">
.container {
  > h2 {
    font-size: 20px;
    > span {
      margin: 0 5px;
    }
  }
}

.desc {
  font-size: var(--font-size-base);
  color: var(--font-color-light);
  //   text-indent: 5px;
}
</style>
