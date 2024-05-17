<script lang="ts" setup>
definePageMeta({
  layout: 'demo',
});

const { setLocale } = useI18n();
</script>

<template>
  <div class="flex flex-col items-start gap-10 p-[4.375rem]">
    <div class="flex items-end">
      <span
        class="mr-4 rounded-2xl border border-[#79747E] p-6 text-display-l capitalize"
      >
        {{ $t('typography.font-family') }}
      </span>

      <el-button type="primary" @click="setLocale('en')">
        {{ $t('english') }}
      </el-button>
      <el-button type="primary" @click="setLocale('zh-tw')">
        {{ $t('chinese') }}
      </el-button>
    </div>

    <section>
      <div class="text-display-l">
        {{ $t('typography.display.large') }} 58/64 . 0
      </div>
      <div class="text-display-m">
        {{ $t('typography.display.medium') }} 46/52 . 0
      </div>
      <div class="text-display-s">
        {{ $t('typography.display.small') }} 36/44 . 0
      </div>
    </section>

    <section>
      <div class="text-headline-l">
        {{ $t('typography.headline.large') }} 32/48 . 0
      </div>
      <div class="text-headline-m">
        {{ $t('typography.headline.medium') }} 28/36 . 0
      </div>
      <div class="text-headline-s">
        {{ $t('typography.headline.small') }} 24/32 . 0
      </div>
    </section>

    <section>
      <div class="text-title-l">
        {{ $t('typography.title.large') }} 22/28 . 0
      </div>
      <div class="text-title-m">
        {{ $t('typography.title.medium') }} 16/24 . 0
      </div>
      <div class="text-title-s">
        {{ $t('typography.title.small') }} 14/20 . 0
      </div>
    </section>

    <section>
      <div class="text-label">{{ $t('typography.label') }} 14/19 . 0</div>
      <div class="text-placeholder">
        {{ $t('typography.placeholder') }} 16/24 . 0
      </div>
    </section>

    <section>
      <div class="text-button-l">
        {{ $t('typography.button.large') }} 18/24 . 0
      </div>
      <div class="text-button-m">
        {{ $t('typography.button.medium') }} 16/22 . 0
      </div>
      <div class="text-button-s">
        {{ $t('typography.button.small') }} 15/20 . 0
      </div>
    </section>

    <section>
      <div class="text-content-l">
        {{ $t('typography.content.large') }} 18/28 . 0
      </div>
      <div class="text-content-m">
        {{ $t('typography.content.medium') }} 14/20 . 0
      </div>
      <div class="text-content-s">
        {{ $t('typography.content.small') }} 12/16 . 0
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
section {
  @apply flex flex-col gap-6 border-b border-[#79747E] p-6 capitalize;
}
</style>
