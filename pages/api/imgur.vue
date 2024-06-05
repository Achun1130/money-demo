<script lang="ts" setup>
definePageMeta({
  layout: 'demo',
});

const imageUrl = ref('');

// await useImgur()
//   .getImage('7AqmOHl')
//   .then((res) => {
//     console.log(res);
//   });

function uploadFile(e: Event): void {
  const target = e.target as HTMLInputElement;

  if (target.files === null) return;

  const file = target.files[0];
  const formData = new FormData();

  formData.append('image', file, file.name);
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
  <input type="file" @change="uploadFile" />
  <img :src="imageUrl" class="w-60" />
</template>
