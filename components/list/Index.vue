<script lang="ts" setup>
const props = defineProps({
  title: String,
  content: String,
  date: String,
});

const emit = defineEmits(['onClickBtn']);
</script>

<template>
  <div class="border-b border-b-black/20 pb-6">
    <div class="flex items-center gap-4">
      <span class="mr-auto text-title-m font-bold">{{ props.date }}</span>

      <el-button type="primary" text @click="emit('onClickBtn')">
        {{ $t('button.more') }}
        <el-icon size="1rem" class="ml-2">
          <el-icon-arrow-right-bold />
        </el-icon>
      </el-button>
    </div>

    <div
      v-if="props.title"
      class="mt-4 text-headline-s font-bold text-primary-10"
    >
      {{ props.title }}
    </div>

    <p
      v-if="props.content"
      class="mt-2 line-clamp-2 break-words text-button-l text-surface-on"
    >
      {{ props.content }}
    </p>
  </div>
</template>
