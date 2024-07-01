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
});
</script>

<template>
  <div class="mx-auto my-[5.625rem] max-w-[62.25rem]">
    <div
      class="shadow-member relative overflow-hidden rounded-xl bg-white px-[3.75rem] pb-[3.75rem] pt-[6.25rem]"
    >
      <!-- 裝飾 -->
      <WebDonut
        class="absolute left-1/4 top-0 -translate-y-1/2 border-primary-95/60"
        :outer-size="180"
        :inner-size="100"
      />
      <!-- 裝飾 / -->

      <!-- 裝飾 -->
      <WebDonut
        class="absolute -left-[8%] top-full -translate-y-1/2 border-primary-95/60"
        :outer-size="360"
        :inner-size="230"
      />
      <!-- 裝飾 / -->

      <el-row :gutter="120">
        <el-col :span="12">
          <template v-if="title || content">
            <div class="flex flex-col gap-4">
              <h2 v-if="title" class="text-[3rem] font-bold leading-[4rem]">
                {{ title }}
              </h2>
              <p v-if="content" class="break-words text-title-s">
                {{ content }}
              </p>
            </div>
          </template>

          <slot name="left"></slot>
        </el-col>

        <el-col :span="12">
          <slot name="right"></slot>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
