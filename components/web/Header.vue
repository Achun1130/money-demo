<script lang="ts" setup>
// TODO: 連結結構待優化
const links = reactive([
  {
    text: '網站導覽',
  },
  {
    text: '常見問題',
  },
  {
    text: '最新消息',
  },
]);
</script>

<template>
  <div class="flex items-center gap-[3.75rem] py-5">
    <h1 class="flex-shrink-0">
      <!-- TODO: LOGO 之後需要替換 -->
      <div
        class="flex h-[2.25rem] w-[5.8125rem] items-center justify-center bg-inverse-on-surface text-headline-s font-bold leading-[2.25rem] text-black"
      >
        <span class="-mr-1 tracking-[.25rem]">LOGO</span>
      </div>
    </h1>

    <nav>
      <ul>
        <li>
          <el-button
            v-for="link in links"
            :key="link.text"
            type="primary"
            text
            style="--button-padding-horizontal: 0.875rem"
          >
            {{ link.text }}
          </el-button>
        </li>
      </ul>
    </nav>

    <div class="ml-auto flex-shrink-0" style="--button-gap: 1.25rem">
      <el-button type="primary" circle>
        <icon-google>search</icon-google>
      </el-button>

      <el-button type="primary" round size="large">
        <icon-google class="mr-1"> person </icon-google>
        登入
        <!-- TODO: 登入與否待判斷 -->
        <!-- 王曉明
        <icon-google class="ml-1"> expand_more </icon-google> -->
      </el-button>
    </div>
  </div>
</template>
