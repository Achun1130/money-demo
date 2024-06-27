<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus';
import type { FrontEndLoginForm } from '~/shared/models/web/member.model';
import { resetForm, submitForm } from '~/shared/utils/form-util';

const emit = defineEmits(['onClosed']);

const visible = defineModel<boolean>('visible', { required: true });

const { t } = useI18n();

const form = reactive<FrontEndLoginForm>({
  username: null,
  password: null,
});

const formRules = computed<FormRules<FrontEndLoginForm>>(() => ({
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
}));

const formRef = ref<FormInstance>();

/**
 * 登入
 */
function login(): void {
  submitForm(formRef.value, () => {
    console.log(toRaw(form));
    closeDialog();
  });
}

/**
 * 註冊
 */
function register(): void {
  navigateTo({ path: '/member/register' });
  closeDialog();
}

/**
 * 關閉 登入互動視窗
 */
function closeDialog(): void {
  resetForm(formRef.value);
  emit('onClosed');
}
</script>

<template>
  <client-only>
    <el-dialog
      v-model="visible"
      :show-close="false"
      class="dialog--xs"
      align-center
      @closed="closeDialog"
    >
      <template #header>
        <div class="px-4 pt-4">
          <!-- TODO: 顏色要調整 -->
          <el-button
            type="primary"
            text
            circle
            style="--button-circle-size: 1.25rem"
            @click="closeDialog"
          >
            <icon-google icon-size="1.25rem"> close </icon-google>
          </el-button>
        </div>
      </template>

      <div class="flex flex-col gap-6 px-[3.75rem] pb-12 pt-3">
        <h3 class="text-center text-headline-s font-bold">登入</h3>

        <el-form
          ref="formRef"
          :model="form"
          :rules="formRules"
          label-position="top"
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

          <!-- TODO: 保持登入 checkbox / 忘記密碼？ route 待補 -->
        </el-form>

        <el-button type="primary" round size="large" @click="login">
          登入
        </el-button>

        <el-button
          type="primary"
          round
          plain
          size="large"
          class="!ml-0"
          @click="register"
        >
          註冊
        </el-button>
      </div>
    </el-dialog>
  </client-only>
</template>
