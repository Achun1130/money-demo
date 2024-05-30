<script lang="ts" setup></script>

<template>
  <!-- <el-button @click="ElMessage('hello')">button</el-button>
  <ElButton :icon="ElIconEditPen" type="success">button</ElButton>
  <LazyElButton type="warning">lazy button</LazyElButton> -->
  <h1 class="text-display-l">{{ $t('hello') }} {{ $t('world') }}</h1>

  <el-button type="primary" @click="navigateTo({ path: '/demo' })">前往 Demo 總覽</el-button>
</template>
