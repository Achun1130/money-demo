<script lang="ts" setup>
// await useApi()
//   .getListOfAllObjects()
//   .then((res) => {
//     console.log(res);

//     // res.forEach((el) => {
//     //   console.log(el.id, el.name);
//     // });
//   });

// await useApi()
//   .getObject('ff8081818fb998eb018fe17ab92b3cf3')
//   .then((res) => {
//     console.log(res);
//   });

// await useApi()
//   .postObject({ name: 'iphone 17', data: { price: 29999 } })
//   .then((res) => {
//     console.log(res);
//   });

// await useApi()
//   .patchObject('ff8081818fb998eb018fde80358b3907', {
//     data: { price: 49999 },
//   })
//   .then((res) => {
//     console.log(res);
//   });

// await useApi()
//   .deleteObject('ff8081818fb998eb018fde80358b3907')
//   .then((res) => {
//     console.log(res);
//   });
</script>

<template>
  <!-- <el-button @click="ElMessage('hello')">button</el-button>
  <ElButton :icon="ElIconEditPen" type="success">button</ElButton>
  <LazyElButton type="warning">lazy button</LazyElButton> -->
  <h1 class="text-display-l">{{ $t('hello') }} {{ $t('world') }}</h1>

  <el-button type="primary" @click="navigateTo({ path: '/demo' })">
    前往 Demo 總覽
  </el-button>
</template>
