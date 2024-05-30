<script lang="ts" setup>
definePageMeta({
  layout: 'demo',
});
</script>

<template>
  <div class="flex flex-col gap-[6.25rem] p-[9.25rem]">
    <div>
      <div class="relative bg-primary-95 px-14">
        <div
          class="absolute bottom-0 left-0 right-0 top-0 z-10 flex items-center justify-center text-display-s text-primary-10"
        >
          header
        </div>

        <el-row :gutter="20">
          <el-col :span="2" v-for="(item, i) in 12" :key="i" class="">
            <div class="h-24 bg-primary-90"></div>
          </el-col>
        </el-row>
      </div>

      <div class="my-12 flex gap-12 text-display-s">
        <span>Count : 12</span>
        <span>Count : 56</span>
        <span>Count : 20</span>
      </div>

      <hr class="border-outline" />
    </div>

    <div>
      <div class="relative bg-primary-95 px-[7.5rem]">
        <div
          class="absolute bottom-0 left-0 right-0 top-0 z-10 flex items-center justify-center text-display-s text-primary-10"
        >
          content
        </div>

        <el-row :gutter="20">
          <el-col :span="2" v-for="(item, i) in 12" :key="i" class="">
            <div class="h-[37.5rem] bg-primary-90"></div>
          </el-col>
        </el-row>
      </div>

      <div class="my-12 flex gap-12 text-display-s">
        <span>Count : 12</span>
        <span>Count : 120</span>
        <span>Count : 20</span>
      </div>

      <hr class="border-outline" />
    </div>
  </div>
</template>
