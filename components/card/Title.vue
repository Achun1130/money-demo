<script lang="ts" setup>
defineProps({
  title: String,
});
</script>

<template>
  <div
    class="rounded-2xl border-l-[10px] border-l-primary-40 p-[2.625rem] text-headline-l font-bold text-surface-on shadow-card"
  >
    {{ title }}
  </div>
</template>
