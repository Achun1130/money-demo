<script lang="ts" setup>
const card = reactive({
  title: '產品名稱',
  content:
    '內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容內容說明內容說明內容說明內容說明',
  image:
    'https://images.unsplash.com/photo-1716872491340-4626a22c582d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
});

const list = reactive({
  title: '最新消息標題文字',
  content:
    '最新消息內文文字最新消息內文文字最新消息內文文字最新消息內文文字最新消息內文文字最新消息內文文字最新消息內文文字最新消息內文文字',
  date: '2024/04/04',
});
</script>

<template>
  <div class="relative flex flex-col gap-[7.5rem] overflow-hidden pb-[6.25rem]">
    <!-- 裝飾 -->
    <WebDonut
      class="absolute left-0 top-[37.5rem] -translate-x-1/2 border-primary-95/60"
    />
    <!-- 裝飾 / -->

    <!-- TODO: banner 元件待補 -->
    <div
      class="flex h-[33.75rem] items-center justify-center bg-primary-90 text-headline-m text-white"
    >
      banner 預設位置
    </div>

    <layout-main class="relative z-10 flex flex-col gap-[7.5rem]">
      <WebSection title="產品介紹">
        <el-row :gutter="20" class="mb-[5.5rem] gap-y-5">
          <el-col
            v-for="(item, index) in Array(6).fill(card)"
            :key="`${item.title}-${index}`"
            :span="8"
          >
            <CardWithImage
              :title="item.title"
              :content="item.content"
              :image="item.image"
            />
          </el-col>
        </el-row>

        <el-button type="primary" round size="large">更多產品</el-button>
      </WebSection>

      <WebSection title="最新消息" class="relative">
        <!-- 裝飾 -->
        <WebDonut
          :outer-size="100"
          :inner-size="0"
          class="absolute -top-[2.875rem] left-0 -translate-y-full border-primary-95/80"
        />
        <WebDonut
          :outer-size="100"
          :inner-size="0"
          class="absolute -top-[2.875rem] left-[3.25rem] -translate-y-full border-primary-95/60"
        />
        <WebDonut
          :outer-size="100"
          :inner-size="0"
          class="absolute -top-[2.875rem] left-[6.9375rem] -translate-y-full border-primary-95/40"
        />
        <!-- 裝飾 / -->

        <el-row :gutter="20" class="mb-[3.5rem] gap-y-5">
          <el-col
            v-for="(item, index) in Array(6).fill(list)"
            :key="`${item.title}-${index}`"
            :span="8"
          >
            <List
              :title="item.title"
              :content="item.content"
              :date="item.date"
              :line-clamp="1"
            />
          </el-col>
        </el-row>

        <el-button type="primary" round size="large">更多消息</el-button>
      </WebSection>
    </layout-main>

    <!-- 裝飾 -->
    <WebDonut
      class="absolute -bottom-[3.75rem] left-full -translate-x-1/2 border-primary-95/60"
    />
    <!-- 裝飾 / -->
  </div>
</template>
