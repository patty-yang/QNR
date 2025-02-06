<template>
  <div class="container">
    <h1 class="font-weight-100 text-center">问卷系统</h1>
    <!-- 按钮组 -->
    <div class="mb-15">
      <el-button icon="Plus" type="primary" @click="linkToEditor">
        创建问卷
      </el-button>
      <el-button icon="Compass" type="success" @click="linkToMaterials">
        组件市场
      </el-button>
    </div>
    <!-- 表格数据 -->
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="createData" label="创建日期" width="150" />
      <el-table-column prop="title" label="问卷标题" />

      <el-table-column label="操作" width="300" align="center">
        <template>
          <el-button type="primary" link text size="small">查看</el-button>
          <el-button type="primary" link text size="small">编辑</el-button>
          <el-button type="primary" link text size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const tableData = ref([
  {
    a: 1
  }
])

const linkToEditor = () => {
  router.push('/editor')
}

const linkToMaterials = () => {
  router.push('/materials')
}
</script>
