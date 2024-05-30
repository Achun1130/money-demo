<script lang="ts" setup>
const props = defineProps({
  title: String,
  content: String,
});
</script>

<template>
  <div class="flex gap-4 border-b border-b-black/20 pb-6">
    <div
      class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-container text-primary-on-container"
      v-if="$slots.icon"
    >
      <div class="h-8 w-8">
        <slot name="icon"></slot>
      </div>
    </div>

    <div>
      <div v-if="props.title" class="text-title-l font-bold text-primary-10">
        {{ props.title }}
      </div>

      <p
        v-if="props.content"
        class="mt-2 line-clamp-1 break-words text-button-l text-surface-on"
      >
        {{ props.content }}
      </p>
    </div>
  </div>
</template>
