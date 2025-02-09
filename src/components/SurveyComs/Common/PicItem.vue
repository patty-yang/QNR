<template>
  <div @click.stop>
    <div class="container mb-10">
      <!-- 添加图片 -->
      <div class="top flex justify-content-center align-items-center">
        <el-upload
          :show-file-list="false"
          action=""
          :on-success="handleAvatarSuccess"
        >
          <img v-if="imgUrl" :src="imgUrl" alt="" />
          <div v-else>
            <el-icon>
              <Upload />
            </el-icon>
            <span>添加图片</span>
          </div>
        </el-upload>
      </div>
      <!-- 图片标题和描述 -->
      <div
        class="bottom flex justify-content-center align-items-center flex-direction-column font-weight"
      >
        <div class="item">{{ picTitle }}</div>
        <div class="desc mb-5 mt-5">{{ picDesc }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  picTitle: string
  picDesc: string
  value: string
  index: number
}>()

const imgUrl = ref('')
const handleAvatarSuccess = () => {}
</script>

<style scoped lang="scss">
.container {
  width: 200px;
  height: 300px;
  border: 1px solid var(--font-color-lightest);
  border-radius: var(--border-radius-md);
  color: var(--font-color-light);
  > .top {
    width: 100%;
    height: 200px;
    background-color: var(--font-color-lightest);
  }

  > .bottom {
    height: 100px;
    font-size: var(--font-size-lg);
    > .desc {
      font-size: var(--font-size-base);
      color: var(--font-color-light);
    }
  }
}

.avatar {
  width: 200px;
  height: 200px;
  object-fit: contain;
}
</style>
