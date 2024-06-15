<script lang="ts" setup>
import type { UploadFile, UploadFiles } from 'element-plus';
import type { FormImage } from '~/shared/models/common.model';

defineProps({
  images: {
    required: true,
    type: Array<FormImage>,
  },
  uploadBtnText: {
    type: String,
    default: '新增檔案',
  },
});

const emit = defineEmits(['onUploadImage', 'onDeleteImage']);

/**
 * 上傳檔案
 */
function uploadFile(uploadFile: UploadFile, uploadFiles: UploadFiles): void {
  emit('onUploadImage', uploadFile);
}

/**
 * 刪除檔案
 */
function deleteFile(index: number): void {
  emit('onDeleteImage', index);
}
</script>

<template>
  <el-row v-if="images.length" :gutter="20" class="mb-4 w-full gap-y-5">
    <el-col v-for="(image, index) in images" :key="index" :span="8">
      <UploadImage :url="image.url" @on-click-delete-btn="deleteFile(index)" />
    </el-col>
  </el-row>

  <el-upload
    :show-file-list="false"
    :auto-upload="false"
    :on-change="uploadFile"
  >
    <el-button type="primary" round plain size="large">
      <icon-google class="mr-1"> add </icon-google>
      {{ uploadBtnText }}
    </el-button>
  </el-upload>
</template>
