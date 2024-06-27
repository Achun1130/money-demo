<script lang="ts" setup>
import type {
  FormInstance,
  FormRules,
  UploadFile,
  UploadRawFile,
} from 'element-plus';
import { FormType, TagType } from '~/shared/models/common.model';
import {
  FrontEndServiceItemStatusType,
  type FrontEndServiceForm,
  type FrontEndServiceItem,
} from '~/shared/models/manage/service.model';
import { resetForm, sortValidator, submitForm } from '~/shared/utils/form-util';

definePageMeta({
  layout: 'manage',
  name: '服務項目列表',
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
      text: '已下架',
      type: TagType.Info,
    },
  },
  {
    id: '3',
    name: '超級SPA',
    status: FrontEndServiceItemStatusType.Ing,
    tag: {
      text: '已上架',
      type: TagType.Success,
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
const dialogFormOption = reactive({
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
function toggleDialogFormVisible(visible: boolean): void {
  dialogFormOption.visible = visible;
}

/**
 * 開啟 表單互動視窗
 */
function openDialogForm(id?: string): void {
  dialogFormOption.title =
    t(`form.type.${id ? FormType.Edit : FormType.Add}`) + '服務項目';
  toggleDialogFormVisible(true);
}

/**
 * 關閉 表單互動視窗
 */
function closeDialogForm(): void {
  resetForm(formRef.value);
  toggleDialogFormVisible(false);
}

/**
 * 確認 表單互動視窗
 */
function confirmDialogForm(): void {
  submitForm(formRef.value, () => {
    toggleDialogFormVisible(false);
    console.log(toRaw(form).images);
  });
}

/**
 * 上傳檔案
 * TODO: 暫時使用 imgur API，等 API 出來再換掉
 */
function uploadFile(uploadFile: UploadFile): void {
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
    });
}

/**
 * 刪除檔案
 */
function deleteFile(index: number): void {
  form.images.splice(index, 1);
}
</script>

<template>
  <!-- 新增服務項目 -->
  <div class="mb-8">
    <el-button type="primary" round size="large" @click="openDialogForm()">
      <icon-google class="mr-1"> add </icon-google>
      新增服務項目
    </el-button>
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
        header-align="center"
        class-name="table__cell--tag"
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
      <el-table-column
        label="編輯"
        width="100"
        header-align="center"
        class-name="table__cell--btn"
      >
        <template #default="scope">
          <!-- m-1 for button focus 狀態下，outline overflow 不被截斷 -->
          <div class="m-1 flex items-center justify-center">
            <el-button
              type="primary"
              text
              circle
              style="--button-circle-size: 1.75rem"
              @click="openDialogForm(scope.row.id)"
            >
              <icon-google> edit </icon-google>
            </el-button>
          </div>
        </template>
      </el-table-column>
      <!-- 編輯 / -->

      <!-- 刪除 -->
      <el-table-column
        label="刪除"
        width="100"
        header-align="center"
        class-name="table__cell--btn"
      >
        <template #default="scope">
          <div class="m-1 flex items-center justify-center">
            <!-- TODO: 要補刪除詢問視窗 -->
            <el-button
              type="primary"
              text
              circle
              style="--button-circle-size: 1.75rem"
              @click="console.log(scope.row.id, '刪除')"
            >
              <icon-google> delete </icon-google>
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
    v-model:visible="dialogFormOption.visible"
    :title="dialogFormOption.title"
    dialog-class="dialog--md"
    @on-closed="closeDialogForm"
    @on-click-left-btn="closeDialogForm"
    @on-click-right-btn="confirmDialogForm"
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
        <form-textarea
          v-model:textarea="form.content"
          placeholder="請輸入內文"
        />
      </el-form-item>

      <el-form-item label="圖片" prop="images">
        <Upload
          :images="form.images"
          @on-upload-image="uploadFile"
          @on-delete-image="deleteFile"
        />
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
