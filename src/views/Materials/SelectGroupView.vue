<template>
  <Layout>
    <RouterLink
      to="/single-select"
      exact-active-class="link-item-active"
      class="link-item mb-15"
    >
      单选题
    </RouterLink>
    <RouterLink
      to="/multi-select"
      exact-active-class="link-item-active"
      class="link-item mb-15"
    >
      多选题
    </RouterLink>
    <RouterLink
      to="/option-select"
      exact-active-class="link-item-active"
      class="link-item mb-15"
    >
      下拉选择
    </RouterLink>
    <RouterLink
      to="/single-pic-select"
      exact-active-class="link-item-active"
      class="link-item mb-15"
    >
      图片单选
    </RouterLink>
    <RouterLink
      to="/multi-pic-select"
      exact-active-class="link-item-active"
      class="link-item mb-15"
    >
      图片多选
    </RouterLink>
  </Layout>
</template>

<script setup lang="ts">
import Layout from './Layout.vue'
</script>
