<script lang="ts" setup>
defineProps({
  url: {
    type: String,
    required: true,
  },
});

defineEmits(['onClickDeleteBtn']);

const uploadImageRef = ref<HTMLDivElement>();
const active = ref(false);
const visible = ref(false);

/**
 * 切換 active
 */
function toggleActive(bool: boolean): void {
  active.value = bool;
}

/**
 * 點擊 預覽 按鈕
 */
function onClickPreviewBtn(): void {
  visible.value = true;
}

useEventListener(document, 'click', (event: Event) => {
  // 是否點擊到 uploadImageRef 元素（含子元素）
  // TODO: 優化 click outside or not
  toggleActive(
    !!(
      uploadImageRef.value === event.target ||
      uploadImageRef.value?.contains(event.target as HTMLElement)
    ),
  );
});
</script>

<template>
  <div
    ref="uploadImageRef"
    class="upload-image"
    :style="{
      backgroundImage: `url(${url})`,
    }"
    :class="{
      active,
    }"
  >
    <div class="upload-image__actions">
      <!-- TODO: 顏色要調整 -->
      <!-- TODO: 待處理_檢視圖片事件 -->
      <!-- 檢視圖片按鈕 -->
      <el-button
        type="primary"
        text
        circle
        style="--button-circle-size: 1.5rem"
        @click="onClickPreviewBtn"
      >
        <GoogleIcon> zoom_in </GoogleIcon>
      </el-button>
      <!-- 檢視圖片按鈕 / -->

      <!-- TODO: 顏色要調整 -->
      <!-- 刪除圖片按鈕 -->
      <el-button
        type="primary"
        text
        circle
        style="--button-circle-size: 1.5rem"
        @click="$emit('onClickDeleteBtn')"
      >
        <GoogleIcon> delete </GoogleIcon>
      </el-button>
      <!-- 刪除圖片按鈕 / -->
    </div>
  </div>

  <client-only>
    <el-dialog v-model="visible" align-center class="max-w-fit">
      <img :src="url" alt="Preview Image" />
    </el-dialog>
  </client-only>
</template>

<style lang="scss" scoped>
.upload-image {
  @apply relative aspect-[205/162] flex-1 bg-cover bg-center bg-no-repeat;

  .upload-image__actions {
    @apply absolute bottom-0 left-0 right-0 top-0 -z-10 flex h-full items-center justify-center gap-1 bg-black/30 opacity-0 duration-100;
  }

  &.active .upload-image__actions,
  &:hover .upload-image__actions {
    @apply z-10 opacity-100;
  }
}
</style>
