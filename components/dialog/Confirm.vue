<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  dialogClass: {
    type: String,
    default: '',
  },
  leftBtnText: {
    type: String,
    default: '取消',
  },
  rightBtnText: {
    type: String,
    default: '確定',
  },
});

defineEmits(['onClosed', 'onClickLeftBtn', 'onClickRightBtn']);

const visible = defineModel<boolean>('visible', { required: true });
</script>

<template>
  <client-only>
    <el-dialog
      v-model="visible"
      :title="title"
      :show-close="false"
      :class="dialogClass"
      align-center
      @closed="$emit('onClosed')"
    >
      <template #header>
        <slot name="header"> </slot>
      </template>

      <slot></slot>

      <template #footer>
        <div class="px-8 py-6">
          <el-button
            type="primary"
            round
            plain
            size="large"
            style="--button-padding-horizontal-large: 2.625rem"
            @click="$emit('onClickLeftBtn')"
          >
            {{ leftBtnText }}
          </el-button>

          <el-button
            type="primary"
            round
            size="large"
            style="--button-padding-horizontal-large: 2.625rem"
            @click="$emit('onClickRightBtn')"
          >
            {{ rightBtnText }}
          </el-button>
        </div>
      </template>
    </el-dialog>
  </client-only>
</template>
