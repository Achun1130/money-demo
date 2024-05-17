<script lang="ts" setup>
import type { FormRules, FormInstance } from 'element-plus';

interface InputForm {
  default: string;
  hover: string;
  focused: string;
  filled?: string;
  disabled?: string;
  error?: string;
}

interface TextareaForm {
  textarea: string;
}

definePageMeta({
  layout: 'demo',
});

const { t, setLocale } = useI18n();

const basicInputFormRef = ref<FormInstance>();

const basicInputForm = reactive<InputForm>({
  default: '',
  hover: '',
  focused: '456789',
  filled: '4567891285666666666',
  disabled: '4567891285666666666',
  error: '',
});

const searchInputForm = reactive<InputForm>({
  default: '',
  hover: '',
  focused: '正在輸入文字',
});

const textareaForm = reactive<TextareaForm>({
  textarea: '',
});

const inputFormRules = computed<FormRules<InputForm>>(() => ({
  default: [
    {
      required: true,
      message: t('input.confirm_password.message'),
      trigger: 'blur',
    },
  ],
  hover: [
    {
      required: true,
      message: t('input.confirm_password.message'),
      trigger: 'blur',
    },
  ],
  focused: [
    {
      required: true,
      message: t('input.confirm_password.message'),
      trigger: 'blur',
    },
  ],
  filled: [
    {
      required: true,
      message: t('input.confirm_password.message'),
      trigger: 'blur',
    },
  ],
  error: [
    {
      required: true,
      message: t('input.confirm_password.message'),
      trigger: 'blur',
    },
  ],
  disabled: [
    {
      required: true,
      message: t('input.confirm_password.message'),
      trigger: 'blur',
    },
  ],
}));

const textareaFormRules = computed<FormRules<TextareaForm>>(() => ({
  textarea: [
    {
      required: true,
      message: t('input.content.message'),
      trigger: 'blur',
    },
  ],
}));

const submitBasicInputForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!');
    } else {
      console.log('error submit!', fields);
    }
  });
};

const resetBasicInputForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<template>
  <div class="flex flex-col gap-[6.25rem] p-[9.25rem]">
    <div class="flex gap-4">
      <el-button type="primary" @click="setLocale('en')">
        {{ $t('english') }}
      </el-button>
      <el-button type="primary" @click="setLocale('zh-tw')">
        {{ $t('chinese') }}
      </el-button>
    </div>

    <div class="flex gap-4">
      <el-button
        type="primary"
        @click="submitBasicInputForm(basicInputFormRef)"
      >
        {{ $t('input.submit') }}
      </el-button>
      <el-button
        type="primary"
        plain
        @click="resetBasicInputForm(basicInputFormRef)"
      >
        {{ $t('input.reset') }}
      </el-button>
    </div>

    <div>
      <div class="mb-5 text-display-s">Basic Input</div>

      <el-form
        ref="basicInputFormRef"
        :model="basicInputForm"
        :rules="inputFormRules"
        label-position="top"
      >
        <el-row v-for="(val, key) in basicInputForm" :key="key">
          <!-- Basic Input key -->
          <el-col :span="3" :offset="3">
            <div class="box text-title-l">{{ key }}</div>
          </el-col>

          <!-- Basic Input key sample -->
          <el-col :span="6">
            <div class="box pt-[1.125rem]">
              <el-form-item
                :label="$t('input.confirm_password.label')"
                :prop="key"
              >
                <!-- 目前 input password 眼睛切換的 icon， 是使用 element plus 提供的方式，但在沒有值 / disabled 的狀態下會消失，之後有時間再把 input password 弄成元件改善這個問題 -->
                <el-input
                  v-model="basicInputForm[key]"
                  :placeholder="$t('input.confirm_password.placeholder')"
                  show-password
                  :disabled="key === 'disabled'"
                />
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <div>
      <div class="mb-5 text-display-s">Search Input</div>

      <el-row v-for="(val, key) in searchInputForm" :key="key">
        <!-- Search Input key -->
        <el-col :span="3" :offset="3">
          <div class="box text-title-l">{{ key }}</div>
        </el-col>

        <!-- Search Input key sample -->
        <el-col :span="6">
          <div class="box">
            <el-input
              v-model="searchInputForm[key]"
              :placeholder="$t('input.keyword.placeholder')"
              :disabled="key === 'disabled'"
              :prefix-icon="ElIconSearch"
              class="input--rounded"
            />
          </div>
        </el-col>
      </el-row>
    </div>

    <div>
      <div class="mb-5 text-display-s">Textarea</div>

      <el-form
        :model="textareaForm"
        :rules="textareaFormRules"
        label-position="top"
      >
        <el-row>
          <!-- Textarea sample -->
          <el-col :span="6" :offset="6">
            <div class="box pt-[1.125rem]">
              <el-form-item :label="$t('input.content.label')" prop="textarea">
                <el-input
                  v-model="textareaForm.textarea"
                  :placeholder="$t('input.content.placeholder')"
                  type="textarea"
                  :autosize="{ minRows: 3, maxRows: 6 }"
                  resize="none"
                />
              </el-form-item>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  @apply flex h-32 items-center justify-center text-title-l;

  > * {
    @apply flex-1;
  }
}
</style>
