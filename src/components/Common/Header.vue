<template>
  <div class="header-container flex self-start align-items-center border-box">
    <div class="left flex justify-content-center align-items-center">
      <el-button icon="ArrowLeft" circle size="small" @click="linkToHome" />
    </div>
    <div class="center flex align-items-center space-between pl-15 pr-15"></div>
    <div class="right flex justify-content-center align-items-center">
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        :size="30"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const linkToHome = () => {
  localStorage.setItem('activeView', 'home')
  router.push('/')
}
</script>

<style lang="scss" scoped>
.header-container {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid var(--border-color);

  .left {
    width: 60px;
    height: 100%;
  }
  .center {
    flex: 1;
    height: 100%;
    border-left: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
  }

  .right {
    width: 80px;
    height: 100%;
  }
}
</style>
