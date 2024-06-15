<script lang="ts" setup>
import type { PropType } from 'vue';
import { IconGoogleType } from '~/shared/models/common.model';

defineProps({
  iconType: {
    type: String as PropType<IconGoogleType>,
    default: IconGoogleType.Filled,
  },
  iconSize: {
    type: String,
    default: '1.5rem',
  },
});
</script>

<template>
  <span :class="iconType" :style="{ fontSize: iconSize }">
    <slot />
  </span>
</template>
