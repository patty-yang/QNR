<template>
  <div class="materials">
    <Header />
    <div>
      <h1 class="font-weight-100 text-center m0 p0">组件市场</h1>
      <div class="container mc flex">
        <!-- 导航 -->
        <nav class="category">
          <RouterLink
            v-for="item in navList"
            :to="item.to"
            class="category-item"
          >
            <el-icon class="mc">
              <component :is="item.icon" />
            </el-icon>
            <div>{{ item.text }}</div>
          </RouterLink>
        </nav>
        <div class="coms">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Common/Header.vue'

import { navList } from './var'
</script>

<style scoped lang="scss">
h1 {
  height: 50px;
  margin: 20px 0;
  line-height: 50px;
}

.container {
  width: 1180px;
  height: 600px;
}
.category {
  width: 70px;
  height: 100%;

  > .category-item {
    width: 70px;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin-bottom: 10px;
    text-align: center;
    text-decoration: none;
    font-size: var(--font-size-base);
    color: var(--white);
    border-top-left-radius: var(--border-radius-lg);
    border-bottom-left-radius: var(--border-radius-lg);
  }

  @for $i from 1 through 4 {
    .category-item:nth-child(4n + #{$i}) {
      @if $i == 1 {
        background-color: var(--primary-color);
      } @else if $i == 2 {
        background-color: var(--success-color);
      } @else if $i == 3 {
        background-color: var(--warning-color);
      } @else if $i == 4 {
        background-color: var(--error-color);
      }
    }
  }
}

.coms {
  width: calc(1180px - 60px);
  height: 100%;
}
</style>
