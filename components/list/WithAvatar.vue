<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  content: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div class="flex gap-4 border-b border-b-black/20 pb-6">
    <div
      v-if="$slots.icon"
      class="flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary-container text-primary-on-container"
    >
      <slot name="icon"></slot>
    </div>

    <div>
      <div v-if="title" class="text-title-l font-bold text-primary-10">
        {{ title }}
      </div>

      <p
        v-if="content"
        class="mt-2 line-clamp-1 break-words text-button-l text-surface-on"
      >
        {{ content }}
      </p>
    </div>
  </div>
</template>
