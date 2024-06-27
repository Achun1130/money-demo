<script lang="ts" setup></script>

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

    <div class="ml-auto flex-shrink-0" style="--button-gap: 1.25rem">
      <el-button type="primary" circle>
        <icon-google>notifications</icon-google>
      </el-button>

      <el-button type="primary" circle>
        <icon-google>language</icon-google>
      </el-button>

      <el-button type="primary" round size="large">
        <icon-google class="mr-1"> person </icon-google>
        王曉明
        <icon-google class="ml-1"> expand_more </icon-google>
      </el-button>
    </div>
  </div>
</template>
