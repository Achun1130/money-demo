<script lang="ts" setup>
definePageMeta({
  layout: 'demo',
});

function onClickBtn(text: string): void {
  console.log(text);
}
</script>

<template>
  <div class="flex flex-col gap-[6.25rem] p-[9.25rem]">
    <div>
      <div class="mb-24 text-display-s">Basic List</div>

      <el-row>
        <el-col :span="3" :offset="3">
          <div class="text-title-l">default</div>
        </el-col>

        <el-col :span="8">
          <List
            title="最新消息標題文字"
            content="最新消息內文文字最新消息內文文字最新消息內文文字最新消息內文文字最新消息內文文字最新消息內文文字最新消息內文文字最新消息內文文字"
            date="2024/04/04"
            @on-click-btn="onClickBtn('點擊查看更多')"
          />
        </el-col>
      </el-row>
    </div>

    <div>
      <div class="mb-24 text-display-s">With avatar</div>

      <el-row>
        <el-col :span="3" :offset="3">
          <div class="text-title-l">default</div>
        </el-col>

        <el-col :span="8">
          <ListWithAvatar
            title="標題文字"
            content="列表文字列表文字列表文字列表文字列表文字列表文字列表文字列"
          >
            <template #icon>
              <el-icon-user></el-icon-user>
            </template>
          </ListWithAvatar>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
