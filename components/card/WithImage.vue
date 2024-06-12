<script lang="ts" setup>
defineProps({
  title: String,
  content: String,
  image: String,
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

    <div class="p-5">
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
          size="small"
          class="mt-[1.875rem]"
          @click="$emit('onClickBtn')"
        >
          <el-icon size="1rem" class="mr-2">
            <el-icon-right />
          </el-icon>
          {{ $t('button.info') }}
        </el-button>
      </div>
    </div>
  </div>
</template>
