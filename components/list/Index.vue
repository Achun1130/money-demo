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
  date: {
    type: String,
    default: '',
  },
  lineClamp: {
    type: [String, Number] as PropType<'none' | number>,
    default: 2,
  },
});

defineEmits(['onClickBtn']);
</script>

<template>
  <div class="border-b border-b-black/20 pb-6">
    <div class="flex items-center gap-4">
      <span class="mr-auto text-title-m font-bold">{{ date }}</span>

      <el-button
        type="primary"
        text
        style="
          --button-padding-horizontal: 1rem;
          --button-padding-vertical: 0.75rem;
        "
        @click="$emit('onClickBtn')"
      >
        {{ $t('button.more') }}
        <icon-google class="ml-1"> keyboard_arrow_right </icon-google>
      </el-button>
    </div>

    <div v-if="title" class="mt-4 text-headline-s font-bold text-primary-10">
      {{ title }}
    </div>

    <p
      v-if="content"
      class="mt-2 break-words text-button-l text-surface-on"
      style="
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      "
      :style="{
        '-webkit-line-clamp': lineClamp,
      }"
    >
      {{ content }}
    </p>
  </div>
</template>
