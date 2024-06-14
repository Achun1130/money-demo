<script lang="ts" setup>
import type { UploadFile, UploadFiles, UploadRawFile } from 'element-plus';

definePageMeta({
  layout: 'demo',
});

const imageUrl = ref('');

// await useImgur()
//   .getImage('7AqmOHl')
//   .then((res) => {
//     console.log(res);

//     imageUrl.value = res.data.link;
//   });

function uploadFile(uploadFile: UploadFile, uploadFiles: UploadFiles): void {
  const file = uploadFile;
  const formData = new FormData();

  formData.append('image', file.raw as UploadRawFile, file.name);
  formData.append('type', 'file');
  formData.append('title', 'title');
  formData.append('description', 'description');

  useImgur()
    .postObject(formData)
    .then((res) => {
      console.log(res);

      imageUrl.value = res.data.link;
    });
}
</script>

<template>
  <div class="flex h-dvh items-center justify-center">
    <el-upload
      class="avatar-uploader"
      :show-file-list="false"
      :auto-upload="false"
      :on-change="uploadFile"
      multiple
    >
      <img
        v-if="imageUrl"
        :src="imageUrl"
        class="avatar-uploader-avatar"
        referrerpolicy="no-referrer"
      />
      <div v-else class="avatar-uploader-container">
        <GoogleIcon class="avatar-uploader-icon"> add </GoogleIcon>
      </div>
    </el-upload>
  </div>
</template>

<style lang="scss">
.avatar-uploader {
  .avatar-uploader-avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

  .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);

    &:hover {
      border-color: var(--el-color-primary);
    }
  }

  .avatar-uploader-container {
    color: #8c939d;
    width: 178px;
    height: 178px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .avatar-uploader-icon {
    font-size: 28px;
  }
}
</style>
