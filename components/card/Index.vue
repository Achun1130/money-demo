<script lang="ts" setup>
const props = defineProps({
  title: String,
  content: String,
});

const emit = defineEmits(['onClickBtn']);
</script>

<template>
  <div class="flex flex-col gap-4 rounded-2xl p-5 shadow-card">
    <div class="flex">
      <div class="mr-auto text-headline-l font-bold text-surface-on">
        {{ props.title }}
      </div>

      <div class="flex h-12 items-center self-start">
        <el-button
          type="primary"
          text
          style="
            --button-padding-horizontal: 1rem;
            --button-padding-vertical: 0.75rem;
          "
          @click="emit('onClickBtn')"
        >
          {{ $t('button.more') }}
          <el-icon size="1rem" class="ml-2">
            <el-icon-arrow-right-bold />
          </el-icon>
        </el-button>
      </div>
    </div>

    <p
      v-if="props.content"
      class="line-clamp-3 break-words text-content-l text-surface-on"
    >
      {{ props.content }}
    </p>
  </div>
</template>
