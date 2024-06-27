<script lang="ts" setup>
const props = defineProps({
  outerSize: {
    type: Number,
    default: 531,
  },
  innerSize: {
    type: Number,
    default: 336,
  },
});

const borderWidth = computed(() => (props.outerSize - props.innerSize) / 2);
</script>

<template>
  <div
    class="rounded-full"
    :style="{
      width: outerSize + 'px',
      height: outerSize + 'px',
      borderWidth: borderWidth + 'px',
    }"
  ></div>
</template>
