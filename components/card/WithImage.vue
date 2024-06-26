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
  image: {
    type: String,
    default: '',
  },
});

defineEmits(['onClickBtn']);
</script>

<template>
  <div class="overflow-hidden rounded-2xl shadow-card">
    <div
      class="aspect-[429/308] bg-cover bg-center bg-no-repeat"
      :style="{
        backgroundImage: `url(${image})`,
      }"
    ></div>

    <div class="bg-white p-5">
      <div class="text-headline-l font-bold text-surface-on">
        {{ title }}
      </div>

      <p
        v-if="content"
        class="mt-4 line-clamp-3 break-words text-content-l text-surface-on"
      >
        {{ content }}
      </p>

      <div class="text-right">
        <el-button
          type="primary"
          round
          plain
          size="large"
          class="mt-[1.875rem]"
          @click="$emit('onClickBtn')"
        >
          <icon-google class="mr-1"> arrow_forward </icon-google>
          {{ $t('button.info') }}
        </el-button>
      </div>
    </div>
  </div>
</template>
