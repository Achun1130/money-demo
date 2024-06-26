<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <section class="flex flex-col items-center">
    <div v-if="title" class="mb-[3.75rem] flex items-center gap-6">
      <div class="flex-shrink-1 h-px w-[12.5rem] bg-primary-20"></div>

      <h3
        class="-mr-1 flex-shrink-0 text-[3rem] font-bold leading-[4.5rem] tracking-[.25rem] text-primary-20"
      >
        {{ title }}
      </h3>

      <div class="flex-shrink-1 h-px w-[12.5rem] bg-primary-20"></div>
    </div>

    <slot></slot>
  </section>
</template>
