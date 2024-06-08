<script lang="ts" setup>
import type {
  FormInstance,
  FormRules,
  UploadFile,
  UploadFiles,
  UploadRawFile,
} from 'element-plus';
import { TagType } from '~/shared/models/common.model';
import {
  FrontEndServiceItemStatusType,
  type FrontEndServiceForm,
  type FrontEndServiceItem,
} from '~/shared/models/manage/service.model';
import { resetForm, sortValidator, submitForm } from '~/shared/utils/form-util';

definePageMeta({
  layout: 'manage',
});

const { t } = useI18n();

/**
 * 表格資訊
 */
const tableData = reactive<FrontEndServiceItem[]>([
  {
    id: '1',
    name: '超級SPA',
    status: FrontEndServiceItemStatusType.On,
    tag: {
      text: '已上架',
      type: TagType.Success,
    },
  },
  {
    id: '2',
    name: '很長很長的項目名稱很長很長的項目名稱很長很長的項目名稱很長很長的項目名稱很長很長的項目名稱很長',
    status: FrontEndServiceItemStatusType.Ing,
    tag: {
      text: '上架中',
      type: TagType.Danger,
    },
  },
  {
    id: '3',
    name: '超級SPA',
    status: FrontEndServiceItemStatusType.Ing,
    tag: {
      text: '已上架',
      type: TagType.Danger,
    },
  },
  {
    id: '4',
    name: '超級SPA',
    status: FrontEndServiceItemStatusType.Off,
    tag: {
      text: '已下架',
      type: TagType.Info,
    },
  },
]);

/**
 * 表單互動視窗 參數
 */
const formDialogOption = reactive({
  visible: false,
  title: '',
});

const form = reactive<FrontEndServiceForm>({
  title: null,
  content: null,
  images: [],
  sort: null,
});

const formRules = computed<FormRules<FrontEndServiceForm>>(() => ({
  title: [
    {
      required: true,
      message: t('input.confirm_password.message'),
    },
  ],
  content: [
    {
      required: true,
      message: t('input.confirm_password.message'),
    },
  ],
  images: [
    {
      required: true,
      message: t('input.confirm_password.message'),
    },
  ],
  sort: [
    {
      required: true,
      message: t('input.confirm_password.message'),
    },
    {
      message: '排序需為正整數',
      validator: (rule, value) => sortValidator(value),
    },
  ],
}));

const formRef = ref<FormInstance>();

/**
 * 切換 表單互動視窗 參數 顯示
 * @param visible 顯示
 */
function toggleFormDialogVisible(visible: boolean): void {
  formDialogOption.visible = visible;
}

/**
 * 開啟 表單互動視窗
 */
function openFormDialog(title: string) {
  formDialogOption.title = title;
  toggleFormDialogVisible(true);
}

/**
 * 關閉 表單互動視窗
 * @param formEl 表單元素
 */
function closeFormDialog(formEl: FormInstance | undefined) {
  resetForm(formEl);
  toggleFormDialogVisible(false);
}

/**
 * 確認 表單互動視窗
 * @param formEl 表單元素
 */
function confirmFormDialog(formEl: FormInstance | undefined) {
  submitForm(formEl, () => {
    toggleFormDialogVisible(false);
    console.log(toRaw(form).images);
  });
}

/**
 * 上傳檔案
 * TODO: 暫時使用 imgur API，等 API 出來再換掉
 */
function uploadFile(uploadFile: UploadFile, uploadFiles: UploadFiles): void {
  const file = uploadFile;
  const formData = new FormData();

  formData.append('image', file.raw as UploadRawFile, file.name);
  formData.append('type', 'file');
  formData.append('title', 'title');
  formData.append('description', 'description');

  useImgur()
    .postObject(formData)
    .then((res) => {
      form.images?.push({
        url: res.data.link,
      });
      console.log(form.images);
    });
}
</script>

<template>
  <div class="my-10">
    <!-- 新增服務項目 -->
    <div class="mb-6 text-right">
      <el-button
        type="primary"
        round
        size="large"
        @click="openFormDialog('新增服務項目')"
      >
        <el-icon size="1.25rem" class="mr-2">
          <el-icon-plus />
        </el-icon>
        新增服務項目
      </el-button>
    </div>
  </div>
  <!-- 新增服務項目 / -->

  <!-- 服務項目表單 -->
  <client-only>
    <el-table :data="tableData">
      <!-- 服務項目名稱 -->
      <el-table-column prop="name" label="服務項目名稱" show-overflow-tooltip />
      <!-- 服務項目名稱 / -->

      <!-- 上架狀態 -->
      <el-table-column
        label="上架狀態"
        width="104"
        label-class-name="!text-center"
      >
        <template #default="scope">
          <div class="flex items-center justify-center">
            <el-tag :type="scope.row.tag.type">
              {{ scope.row.tag.text }}
            </el-tag>
          </div>
        </template>
      </el-table-column>
      <!-- 上架狀態 / -->

      <!-- 編輯 -->
      <el-table-column label="編輯" width="100" label-class-name="!text-center">
        <template #default="scope">
          <!-- m-1 for button focus 狀態下，outline overflow 不被截斷 -->
          <div class="m-1 flex items-center justify-center">
            <el-button
              type="primary"
              text
              circle
              :icon="ElIconEditPen"
              style="
                --button-circle-width: 1.75rem;
                --button-circle-height: 1.75rem;
              "
              @click="openFormDialog('編輯服務項目')"
            >
            </el-button>
          </div>
        </template>
      </el-table-column>
      <!-- 編輯 / -->

      <!-- 刪除 -->
      <el-table-column label="刪除" width="100" label-class-name="!text-center">
        <template #default="scope">
          <div class="m-1 flex items-center justify-center">
            <el-button
              type="primary"
              text
              circle
              :icon="ElIconDeleteFilled"
              style="
                --button-circle-width: 1.75rem;
                --button-circle-height: 1.75rem;
              "
            >
            </el-button>
          </div>
        </template>
      </el-table-column>
      <!-- 刪除 / -->
    </el-table>
  </client-only>
  <!-- 服務項目表單 / -->

  <!-- 表單互動視窗 互動視窗 -->
  <manage-dialog-form
    v-model:visible="formDialogOption.visible"
    :title="formDialogOption.title"
    dialog-class="dialog--md"
    @on-closed="closeFormDialog(formRef)"
    @on-click-left-btn="closeFormDialog(formRef)"
    @on-click-right-btn="confirmFormDialog(formRef)"
  >
    <el-form
      ref="formRef"
      :model="form"
      :rules="formRules"
      label-position="top"
    >
      <el-form-item label="標題" prop="title">
        <el-input v-model="form.title" placeholder="請輸入標題" />
      </el-form-item>

      <el-form-item label="內文" prop="content">
        <el-input
          v-model="form.content"
          placeholder="請輸入內文"
          type="textarea"
          :autosize="{ minRows: 3, maxRows: 6 }"
          resize="none"
        />
      </el-form-item>

      <el-form-item label="圖片" prop="images">
        <el-row :gutter="20" class="mb-4 w-full gap-y-5">
          <el-col v-for="(image, index) in form.images" :key="index" :span="8">
            <div
              class="aspect-[205/162] flex-1 bg-cover bg-center bg-no-repeat"
              :style="{
                backgroundImage: `url(${image.url})`,
              }"
            ></div>
          </el-col>
        </el-row>

        <el-upload
          :show-file-list="false"
          :auto-upload="false"
          :on-change="uploadFile"
        >
          <el-button type="primary" round plain size="large">
            <el-icon size="1.25rem" class="mr-2">
              <el-icon-plus />
            </el-icon>
            新增檔案
          </el-button>
        </el-upload>
      </el-form-item>

      <el-form-item label="排序" prop="sort">
        <el-input
          v-model.number="form.sort"
          placeholder="請輸入排序"
          type="number"
        />
      </el-form-item>
    </el-form>
  </manage-dialog-form>
  <!-- 表單互動視窗 互動視窗 / -->
</template>
