<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus';
import type { FrontEndForgetForm } from '~/shared/models/web/member.model';
import { submitForm } from '~/shared/utils/form-util';

const { t } = useI18n();

const form = reactive<FrontEndForgetForm>({
  username: null,
});

const formRules = computed<FormRules<FrontEndForgetForm>>(() => ({
  username: [
    {
      required: true,
      message: t('input.confirm_password.message'),
    },
  ],
}));

const formRef = ref<FormInstance>();

/**
 * 送出
 */
function submit(): void {
  submitForm(formRef.value, () => {
    console.log(toRaw(form));
  });
}
</script>

<template>
  <layout-member title="忘記密碼">
    <template #right>
      <el-form
        ref="formRef"
        :model="form"
        :rules="formRules"
        label-position="top"
        class="mb-8 border-b border-b-black/20"
      >
        <el-form-item label="帳號" prop="username">
          <el-input v-model="form.username" placeholder="請輸入帳號" />
        </el-form-item>
      </el-form>

      <el-button
        type="primary"
        round
        size="large"
        class="w-full"
        @click="submit"
      >
        送出
      </el-button>
    </template>
  </layout-member>
</template>
