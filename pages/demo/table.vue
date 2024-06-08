<script lang="ts" setup>
definePageMeta({
  layout: 'demo',
});

const tableName = ref('表格文字');

const tableData = [
  {
    name: tableName.value,
  },
];
</script>

<template>
  <div class="flex flex-col gap-[6.25rem] p-[9.25rem]">
    <div>
      <div class="mb-5 text-display-s">Basic Table</div>

      <el-row>
        <el-col :span="3" :offset="3">
          <div class="text-title-l">default</div>
        </el-col>

        <el-col :span="18">
          <client-only>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="name" :label="tableName" />
            </el-table>
          </client-only>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
