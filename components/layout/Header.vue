<script lang="ts" setup>
defineProps({
  element: {
    type: String,
    default: 'header',
  },
});
</script>

<template>
  <component :is="element" class="mx-auto max-w-[90rem] px-14">
    <slot />
  </component>
</template>
