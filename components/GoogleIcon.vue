<script lang="ts" setup>
import type { PropType } from 'vue';
import { GoogleIconType } from '~/shared/models/common.model';

defineProps({
  iconType: {
    type: String as PropType<GoogleIconType>,
    default: GoogleIconType.Filled,
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
