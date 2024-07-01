<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus';
import type { FrontEndPasswordResetForm } from '~/shared/models/web/member.model';
import { checkSameValueValidator, submitForm } from '~/shared/utils/form-util';

const { t } = useI18n();

const route = useRoute();

const form = reactive<FrontEndPasswordResetForm>({
  password: null,
  checkPassword: null,
});

const formRules = computed<FormRules<FrontEndPasswordResetForm>>(() => ({
  password: [
    {
      required: true,
      message: t('input.confirm_password.message'),
    },
  ],
  checkPassword: [
    {
      required: true,
      message: t('input.confirm_password.message'),
    },
    {
      message: '確認密碼需與密碼相同',
      validator: (rule, value) => checkSameValueValidator(value, form.password),
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

    // TODO: 會員重設密碼 API 會需要 reset-token
    console.log(route.params.token);
  });
}
</script>

<template>
  <layout-member title="重設密碼">
    <template #right>
      <el-form
        ref="formRef"
        :model="form"
        :rules="formRules"
        label-position="top"
        class="mb-8 border-b border-b-black/20"
      >
        <el-form-item label="密碼" prop="password">
          <form-input-password
            v-model:password="form.password"
            placeholder="請輸入密碼"
          />
        </el-form-item>

        <el-form-item label="確認密碼" prop="checkPassword">
          <form-input-password
            v-model:password="form.checkPassword"
            placeholder="請輸入確認密碼"
          />
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
