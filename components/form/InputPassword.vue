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
});

const password = defineModel<string | null>('password', { required: true });

const visible = ref(false);
</script>

<template>
  <el-input
    v-model="password"
    :type="visible ? 'text' : 'password'"
    :placeholder="placeholder"
    :disabled="disabled"
  >
    <template #suffix>
      <!-- TODO: 顏色要調整 -->
      <el-button
        type="primary"
        text
        style="--button-padding-horizontal: 0.75rem"
        class="-mr-2.5 !ml-0"
        @click="visible = !visible"
      >
        <icon-google v-if="visible">visibility</icon-google>
        <icon-google v-else>visibility_off</icon-google>
      </el-button>
    </template>
  </el-input>
</template>
