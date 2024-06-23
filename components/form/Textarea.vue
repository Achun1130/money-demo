<script lang="ts" setup>
defineProps({
  placeholder: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  minRows: {
    type: Number,
    default: 3,
  },
  maxRows: {
    type: Number,
    default: 6,
  },
  resize: {
    type: String as PropType<'none' | 'vertical' | 'horizontal' | 'both'>,
    default: 'none',
  },
});

const textarea = defineModel<string | null>('textarea', { required: true });
</script>

<template>
  <el-input
    v-model="textarea"
    :placeholder="placeholder"
    type="textarea"
    :autosize="{ minRows, maxRows }"
    :resize="resize"
  />
</template>
