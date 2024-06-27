<script lang="ts" setup>
defineProps({
  element: {
    type: String,
    default: 'div',
  },
});
</script>

<template>
  <component :is="element" class="mx-auto max-w-[90rem] px-[7.5rem]">
    <slot></slot>
  </component>
</template>
