import type { FormInstance } from 'element-plus';

/**
 * 重置 表單
 * @param formEl 表單元素
 */
export function resetForm(formEl: FormInstance | undefined): void {
  if (!formEl) return;

  formEl.resetFields();
}

/**
 * 提交 表單
 * @param formEl 表單元素
 * @param successFn 驗證成功後要執行的函式
 * @param errorFn 驗證失敗後要執行的函式
 */
export function submitForm(
  formEl: FormInstance | undefined,
  successFn?: () => void,
  errorFn?: () => void,
): void {
  if (!formEl) return;

  formEl.validate((valid) => {
    if (valid) {
      successFn && successFn();
    } else {
      errorFn && errorFn();
    }
  });
}

/**
 * 排序 驗證器
 * 整數 && 正數
 * @param value 值
 */
export function sortValidator(value: number): boolean {
  return Number.isInteger(value) && Math.sign(value) === 1;
}
