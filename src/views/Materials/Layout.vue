<template>
  <div class="layout-container flex">
    <!-- 选择具体的业务组件 -->
    <div class="left flex wrap space-between">
      <slot />
    </div>
    <div class="center">
      <!-- 对应的业务组件 -->
      <RouterView v-slot="{ Component }">
        <component :is="Component" :status="currentCom" :serialNum="1" />
      </RouterView>
    </div>
    <div class="right">
      <!-- 编辑面板 -->
      编辑面板
    </div>
  </div>
</template>
<script setup lang="ts">
import { useMaterial } from '@/stores/useMaterial'

const store = useMaterial()
// 拿到当前选中组件的状态数据
const currentCom = computed(() => store.coms[store.currentMaterialCom].status)
</script>
<style lang="scss" scoped>
.layout-container {
  width: 100%;
  // header 50px  h1 50px 上下margin 20px 额外多减 20px 避免帖底
  height: calc(100vh - 100px - 40px - 20px);
  align-items: flex-start;
  border: 1px solid var(--border-color);
  border-top-right-radius: var(--border-radius-lg);
  border-bottom-left-radius: var(--border-radius-lg);
  border-bottom-right-radius: var(--border-radius-lg);
}

.left {
  width: 180px;
  text-align: center;
  align-items: flex-start;
  padding: 20px;
}
.center {
  width: 550px;
  // 多减 60 是上下的padding 20px 避免帖底
  height: calc(100vh - 100px - 40px - 60px - 20px);
  overflow-y: scroll;
  padding: 30px;
  border-left: 1px solid var(--border-color);
}
.right {
  width: 350px;
  height: calc(100vh - 100px - 40px - 20px);
  overflow-y: scroll;
  border-left: 1px solid var(--border-color);
}
</style>
