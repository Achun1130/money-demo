<script lang="ts" setup>
const route = useRoute();
</script>

<template>
  <div class="border-b border-outline-variant px-6 py-8">
    <h2 class="text-headline-s font-bold text-surface-on">
      {{ route.meta.name }}
    </h2>
  </div>

  <div class="p-8">
    <slot></slot>
  </div>
</template>
