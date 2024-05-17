<script lang="ts" setup>
definePageMeta({
  layout: 'demo',
});

const { setLocale, locales, t } = useI18n();

console.log(locales.value, '，nuxt.config.ts > i18n.locales 資訊');
console.log(t('hello'), '，在 ts 中使用 i18n 翻譯');
</script>

<template>
  <div class="flex h-dvh flex-col items-center justify-center gap-4">
    <h1 class="text-display-l">{{ $t('hello') }} {{ $t('world') }}</h1>

    <div class="flex">
      <el-button type="primary" @click="setLocale('en')">
        {{ $t('english') }}
      </el-button>
      <el-button type="primary" @click="setLocale('zh-tw')">
        {{ $t('chinese') }}
      </el-button>
    </div>
  </div>
</template>
