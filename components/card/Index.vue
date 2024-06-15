<script lang="ts" setup>
defineProps({
  title: String,
  content: String,
});

defineEmits(['onClickBtn']);
</script>

<template>
  <div class="flex flex-col gap-4 rounded-2xl p-5 shadow-card">
    <div class="flex">
      <div class="mr-auto text-headline-l font-bold text-surface-on">
        {{ title }}
      </div>

      <div class="flex h-12 items-center self-start">
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
    </div>

    <p
      v-if="content"
      class="line-clamp-3 break-words text-content-l text-surface-on"
    >
      {{ content }}
    </p>
  </div>
</template>
