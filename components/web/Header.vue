<script lang="ts" setup>
// TODO: 連結結構待優化（前往頁面）
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

const dialogLoginVisible = ref(false);

/**
 * 切換 登入互動視窗 參數 顯示
 * @param visible 顯示
 */
function toggleDialogLoginVisible(visible: boolean): void {
  dialogLoginVisible.value = visible;
}
</script>

<template>
  <div class="flex items-center gap-[2.5rem] py-5">
    <h1 class="flex-shrink-0">
      <!-- TODO: LOGO 之後需要替換 -->
      <NuxtLink to="/">
        <div
          class="flex h-[2.25rem] w-[5.8125rem] items-center justify-center bg-inverse-on-surface text-headline-s font-bold leading-[2.25rem] text-black"
        >
          <span class="-mr-1 tracking-[.25rem]">LOGO</span>
        </div>
      </NuxtLink>
    </h1>

    <nav class="flex-1">
      <ul class="flex flex-wrap">
        <li v-for="link in links" :key="link.text">
          <!-- TODO: 點擊後前往哪個頁面待補 -->
          <el-button
            tag="a"
            href="javascript:void(0)"
            type="primary"
            text
            style="--button-padding-horizontal: 1.25rem"
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

      <el-button
        type="primary"
        round
        size="large"
        @click="toggleDialogLoginVisible(true)"
      >
        <icon-google class="mr-1"> person </icon-google>
        登入
        <!-- TODO: 登入與否待判斷 -->
        <!-- 王曉明
        <icon-google class="ml-1"> expand_more </icon-google> -->
      </el-button>
    </div>
  </div>

  <WebDialogLogin
    v-model:visible="dialogLoginVisible"
    @login="toggleDialogLoginVisible(false)"
    @register="toggleDialogLoginVisible(false)"
    @on-closed="toggleDialogLoginVisible(false)"
  />
</template>
