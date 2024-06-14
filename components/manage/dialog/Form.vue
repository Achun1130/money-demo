<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  dialogClass: {
    type: String,
    default: '',
  },
  leftBtnText: {
    type: String,
    default: '取消',
  },
  rightBtnText: {
    type: String,
    default: '儲存',
  },
});

defineEmits(['onClosed', 'onClickLeftBtn', 'onClickRightBtn']);

const visible = defineModel<boolean>('visible', { required: true });
</script>

<template>
  <dialog-confirm
    v-model:visible="visible"
    :title="title"
    :dialogClass="dialogClass"
    :left-btn-text="leftBtnText"
    :right-btn-text="rightBtnText"
    @on-closed="$emit('onClosed')"
    @on-click-left-btn="$emit('onClickLeftBtn')"
    @on-click-right-btn="$emit('onClickRightBtn')"
  >
    <template #header>
      <div class="flex justify-between gap-4 px-8 py-6">
        <div class="text-headline-s font-bold">{{ title }}</div>

        <!-- TODO: 顏色要調整 -->
        <el-button
          type="primary"
          text
          circle
          class="flex-shrink-0"
          style="--button-circle-size: 2rem"
        >
          <GoogleIcon> close </GoogleIcon>
        </el-button>
      </div>
    </template>

    <div class="border-b border-t border-outline-variant px-8 py-10">
      <slot />
    </div>
  </dialog-confirm>
</template>
