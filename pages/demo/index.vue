<script lang="ts" setup>
interface Link {
  path: string;
  title: string;
}

definePageMeta({
  layout: 'demo',
});

const links = reactive<Link[]>([
  {
    path: '/demo/color',
    title: 'Color Guidance',
  },
  {
    path: '/demo/typography',
    title: 'Typography',
  },
  {
    path: '/demo/layout',
    title: 'Layout',
  },
  {
    path: '/demo/buttons',
    title: 'Buttons',
  },
  {
    path: '/demo/input',
    title: 'Input',
  },
  {
    path: '/demo/card',
    title: 'Card',
  },
  {
    path: '/demo/list',
    title: 'List',
  },
  {
    path: '/demo/i18n',
    title: 'I18n',
  },
]);
</script>

<template>
  <div class="flex gap-4 p-20">
    <el-button
      type="primary"
      text
      @click="navigateTo({ path: link.path })"
      v-for="link in links"
      :key="link.title"
    >
      {{ link.title }}
    </el-button>
  </div>
</template>
