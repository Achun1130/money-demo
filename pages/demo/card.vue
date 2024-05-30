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
      <div class="mb-24 text-display-s">Basic Card</div>

      <el-row>
        <el-col :span="3" :offset="3">
          <div class="text-title-l">default</div>
        </el-col>

        <el-col :span="8">
          <Card
            title="產品名稱"
            content="內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容內容說明內容說明內容說明內容說明"
            @on-click-btn="onClickBtn('點擊查看更多')"
          />
        </el-col>
      </el-row>
    </div>

    <div>
      <div class="mb-24 text-display-s">With images</div>

      <el-row>
        <el-col :span="3" :offset="3">
          <div class="text-title-l">default</div>
        </el-col>

        <el-col :span="8">
          <CardWithImage
            title="產品名稱"
            content="內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容說明內容內容說明內容說明內容說明內容說明"
            image="https://images.unsplash.com/photo-1716872491340-4626a22c582d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            @on-click-btn="onClickBtn('點擊詳細資訊')"
          />
        </el-col>
      </el-row>
    </div>

    <div>
      <div class="mb-24 text-display-s">Title card</div>

      <el-row>
        <el-col :span="3" :offset="3">
          <div class="text-title-l">default</div>
        </el-col>

        <el-col :span="12">
          <CardTitle title="產品名稱" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>
