<script lang="ts" setup>
import type { TagProps } from 'element-plus';

interface TagsItem {
  name: string;
  type: TagProps['type'];
}

definePageMeta({
  layout: 'demo',
});

const tagName = '標籤文字';

const tags = ref<TagsItem[]>([
  { name: tagName, type: 'success' },
  { name: tagName, type: 'danger' },
  { name: tagName, type: 'info' },
]);
</script>

<template>
  <div class="flex flex-col gap-[6.25rem] p-[9.25rem]">
    <div>
      <div class="mb-5 text-display-s">Basic Tags</div>

      <el-row>
        <el-col :span="3" :offset="3">
          <div class="text-title-l">default</div>
        </el-col>

        <el-col :span="3">
          <div
            class="flex flex-col items-center gap-5 rounded-lg border border-dashed border-outline p-5"
          >
            <el-tag
              v-for="tag in tags"
              :key="tag.name"
              closable
              :type="tag.type"
            >
              {{ tag.name }}
            </el-tag>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
