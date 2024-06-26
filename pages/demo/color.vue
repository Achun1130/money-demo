<script lang="ts" setup>
type lightTheme = {
  [key in string]: {
    title: string;
    note: string;
    class: string;
  }[];
};

definePageMeta({
  layout: 'demo',
});

const typesClass: {
  [key in string]: {
    [key in number]?: string;
  };
} = {
  primary: {
    0: 'bg-primary-0 text-white',
    10: 'bg-primary-10 text-white',
    20: 'bg-primary-20 text-white',
    30: 'bg-primary-30 text-white',
    40: 'bg-primary-40 text-white',
    50: 'bg-primary-50 text-white',
    60: 'bg-primary-60 text-black',
    70: 'bg-primary-70 text-black',
    80: 'bg-primary-80 text-black',
    90: 'bg-primary-90 text-black',
    95: 'bg-primary-95 text-black',
    99: 'bg-primary-99 text-black',
    100: 'bg-primary-100 text-black',
  },
  secondary: {
    0: 'bg-secondary-0 text-white',
    10: 'bg-secondary-10 text-white',
    20: 'bg-secondary-20 text-white',
    30: 'bg-secondary-30 text-white',
    40: 'bg-secondary-40 text-white',
    50: 'bg-secondary-50 text-white',
    60: 'bg-secondary-60 text-black',
    70: 'bg-secondary-70 text-black',
    80: 'bg-secondary-80 text-black',
    90: 'bg-secondary-90 text-black',
    95: 'bg-secondary-95 text-black',
    99: 'bg-secondary-99 text-black',
    100: 'bg-secondary-100 text-black',
  },
  tertiary: {
    0: 'bg-tertiary-0 text-white',
    10: 'bg-tertiary-10 text-white',
    20: 'bg-tertiary-20 text-white',
    30: 'bg-tertiary-30 text-white',
    40: 'bg-tertiary-40 text-white',
    50: 'bg-tertiary-50 text-white',
    60: 'bg-tertiary-60 text-black',
    70: 'bg-tertiary-70 text-black',
    80: 'bg-tertiary-80 text-black',
    90: 'bg-tertiary-90 text-black',
    95: 'bg-tertiary-95 text-black',
    99: 'bg-tertiary-99 text-black',
    100: 'bg-tertiary-100 text-black',
  },
  error: {
    0: 'bg-error-0 text-white',
    10: 'bg-error-10 text-white',
    20: 'bg-error-20 text-white',
    30: 'bg-error-30 text-white',
    40: 'bg-error-40 text-white',
    50: 'bg-error-50 text-white',
    60: 'bg-error-60 text-black',
    70: 'bg-error-70 text-black',
    80: 'bg-error-80 text-black',
    90: 'bg-error-90 text-black',
    95: 'bg-error-95 text-black',
    99: 'bg-error-99 text-black',
    100: 'bg-error-100 text-black',
  },
  neutral: {
    0: 'bg-neutral-0 text-white',
    10: 'bg-neutral-10 text-white',
    20: 'bg-neutral-20 text-white',
    30: 'bg-neutral-30 text-white',
    40: 'bg-neutral-40 text-white',
    50: 'bg-neutral-50 text-white',
    60: 'bg-neutral-60 text-black',
    70: 'bg-neutral-70 text-black',
    80: 'bg-neutral-80 text-black',
    90: 'bg-neutral-90 text-black',
    95: 'bg-neutral-95 text-black',
    99: 'bg-neutral-99 text-black',
    100: 'bg-neutral-100 text-black',
  },
  'neutral variant': {
    0: 'bg-neutral-variant-0 text-white',
    10: 'bg-neutral-variant-10 text-white',
    20: 'bg-neutral-variant-20 text-white',
    30: 'bg-neutral-variant-30 text-white',
    40: 'bg-neutral-variant-40 text-white',
    50: 'bg-neutral-variant-50 text-white',
    60: 'bg-neutral-variant-60 text-black',
    70: 'bg-neutral-variant-70 text-black',
    80: 'bg-neutral-variant-80 text-black',
    90: 'bg-neutral-variant-90 text-black',
    95: 'bg-neutral-variant-95 text-black',
    99: 'bg-neutral-variant-99 text-black',
    100: 'bg-neutral-variant-100 text-black',
  },
  success: {
    0: 'bg-success-0 text-white',
    10: 'bg-success-10 text-white',
    20: 'bg-success-20 text-white',
    30: 'bg-success-30 text-white',
    40: 'bg-success-40 text-white',
    50: 'bg-success-50 text-white',
    60: 'bg-success-60 text-black',
    70: 'bg-success-70 text-black',
    80: 'bg-success-80 text-black',
    90: 'bg-success-90 text-black',
    95: 'bg-success-95 text-black',
    99: 'bg-success-99 text-black',
    100: 'bg-success-100 text-black',
  },
};

const typesLightTheme: lightTheme = {
  primary: [
    {
      title: 'primary',
      note: 'p-40',
      class: 'bg-primary text-primary-on',
    },
    {
      title: 'on primary',
      note: 'p-100',
      class: 'bg-primary-on text-primary',
    },
    {
      title: 'primary container',
      note: 'p-90',
      class: 'bg-primary-container text-primary-on-container',
    },
    {
      title: 'on primary container',
      note: 'p-10',
      class: 'bg-primary-on-container text-primary-container',
    },
  ],
  secondary: [
    {
      title: 'secondary',
      note: 's-40',
      class: 'bg-secondary text-secondary-on',
    },
    {
      title: 'on secondary',
      note: 's-100',
      class: 'bg-secondary-on text-secondary',
    },
    {
      title: 'secondary container',
      note: 's-90',
      class: 'bg-secondary-container text-secondary-on-container',
    },
    {
      title: 'on secondary container',
      note: 's-10',
      class: 'bg-secondary-on-container text-secondary-container',
    },
  ],
  tertiary: [
    {
      title: 'tertiary',
      note: 't-40',
      class: 'bg-tertiary text-tertiary-on',
    },
    {
      title: 'on tertiary',
      note: 't-100',
      class: 'bg-tertiary-on text-tertiary',
    },
    {
      title: 'tertiary container',
      note: 't-90',
      class: 'bg-tertiary-container text-tertiary-on-container',
    },
    {
      title: 'on tertiary container',
      note: 't-10',
      class: 'bg-tertiary-on-container text-tertiary-container',
    },
  ],
  error: [
    {
      title: 'error',
      note: 'e-40',
      class: 'bg-error text-error-on',
    },
    {
      title: 'on error',
      note: 'e-100',
      class: 'bg-error-on text-error',
    },
    {
      title: 'error container',
      note: 'e-90',
      class: 'bg-error-container text-error-on-container',
    },
    {
      title: 'on error container',
      note: 'e-10',
      class: 'bg-error-on-container text-error-container',
    },
  ],
  success: [
    {
      title: 'success',
      note: 's-70',
      class: 'bg-success text-success-on',
    },
    {
      title: 'on success',
      note: 's-100',
      class: 'bg-success-on text-success',
    },
    {
      title: 'success container',
      note: 's-95',
      class: 'bg-success-container text-success-on-container',
    },
    {
      title: 'on success container',
      note: 's-60',
      class: 'bg-success-on-container text-success-container',
    },
  ],
};

const othersLightTheme: lightTheme = {
  surface: [
    {
      title: 'surface dim',
      note: '#DED8E1',
      class: 'bg-surface-dim text-surface-on',
    },
    {
      title: 'surface',
      note: '#FEF7FF',
      class: 'bg-surface text-surface-on',
    },
    {
      title: 'surface bright',
      note: '#DED8E1',
      class: 'bg-surface-bright text-surface-on',
    },
  ],
  'surface-container': [
    {
      title: 'Surf. Container Lowest',
      note: '#FFFFFF',
      class: 'bg-surface-container-lowest text-surface-on',
    },
    {
      title: 'Surf. Container Low',
      note: '#F7F2FA',
      class: 'bg-surface-container-low text-surface-on',
    },
    {
      title: 'Surf. Container',
      note: '#F3EDF7',
      class: 'bg-surface-container text-surface-on',
    },
    {
      title: 'Surf. Container High',
      note: '#ECE6F0',
      class: 'bg-surface-container-high text-surface-on',
    },
    {
      title: 'Surf. Container Highest',
      note: '#E6E0E9',
      class: 'bg-surface-container-highest text-surface-on',
    },
  ],
  'on-surface': [
    {
      title: 'on surface',
      note: 'n-10',
      class: 'bg-surface-on text-surface',
    },
    {
      title: 'on surface variant',
      note: 'nv-30',
      class: 'bg-surface-on-variant text-surface',
    },
  ],
  inverse: [
    {
      title: 'inverse surface',
      note: 'n-20',
      class: 'bg-inverse-surface text-inverse-on-surface',
    },
    {
      title: 'inverse on surface',
      note: 'n-95',
      class: 'bg-inverse-on-surface text-inverse-surface',
    },
    {
      title: 'inverse primary',
      note: 'p-90',
      class: 'bg-inverse-primary text-primary-on-container',
    },
  ],
  outline: [
    {
      title: 'outline',
      note: 'n-60',
      class: 'bg-outline text-surface',
    },
    {
      title: 'outline variant',
      note: 'nv-80',
      class: 'bg-outline-variant text-inverse-surface',
    },
  ],
};
</script>

<template>
  <div class="flex flex-col gap-10 p-[9.25rem]">
    <div class="text-display-s">Tonal Palettes</div>

    <div class="flex flex-col gap-5">
      <el-row v-for="(typeVal, type) in typesClass" :key="type">
        <el-col :span="4">
          <div class="flex h-full items-center text-headline-s capitalize">
            {{ type }}
          </div>
        </el-col>

        <el-col :span="20">
          <div class="flex">
            <div
              v-for="(opacityVal, opacity) in typeVal"
              :key="opacityVal"
              class="h-[6.75rem] flex-1 p-2.5 text-center"
              :class="opacityVal"
            >
              {{ opacity }}
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="text-display-s">Light Theme</div>

    <div class="flex flex-col gap-5">
      <el-row :gutter="4" class="gap-y-5">
        <el-col
          v-for="(themeVal, theme) in typesLightTheme"
          :key="theme"
          :span="8"
        >
          <div
            v-for="(val, i) in themeVal"
            :key="i"
            class="text-label-m flex h-10 items-center justify-between p-3 font-medium"
            :class="val.class"
          >
            <span class="capitalize">{{ val.title }}</span>
            <span class="uppercase">{{ val.note }}</span>
          </div>
        </el-col>
      </el-row>

      <div
        v-for="(themeVal, theme) in othersLightTheme"
        :key="theme"
        class="flex gap-1"
      >
        <div
          v-for="(val, i) in themeVal"
          :key="i"
          class="text-label-m flex h-10 flex-1 items-center justify-between p-3 font-medium"
          :class="val.class"
        >
          <span class="capitalize">{{ val.title }}</span>
          <span class="uppercase">{{ val.note }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
