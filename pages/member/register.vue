<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus';
import type { FrontEndRegisterForm } from '~/shared/models/web/member.model';
import { checkSameValueValidator, submitForm } from '~/shared/utils/form-util';

const { t } = useI18n();

const form = reactive<FrontEndRegisterForm>({
  username: null,
  password: null,
  checkPassword: null,
});

const formRules = computed<FormRules<FrontEndRegisterForm>>(() => ({
  username: [
    {
      required: true,
      message: t('input.confirm_password.message'),
    },
  ],
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
 * 註冊
 */
function register(): void {
  submitForm(formRef.value, () => {
    console.log(toRaw(form));
  });
}
</script>

<template>
  <layout-member
    title="註冊"
    content="註冊享有免費試用 30 天，並享有眾多會員專屬優惠，馬上加入體驗 !"
  >
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
        @click="register"
      >
        註冊
      </el-button>
    </template>
  </layout-member>
</template>
