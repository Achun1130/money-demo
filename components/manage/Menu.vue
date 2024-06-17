<script lang="ts" setup>
import IconExpandLess from '@/components/icon/ExpandLess.vue';
import IconExpandMore from '@/components/icon/ExpandMore.vue';
// TODO: 暫時先使用【預設值】，之後需要利用 API 回傳值，確認使用者個別的模組功能，後存入 stores 共同管理狀態，再監聽該項狀態，並隨時即時更新模組
import { FEATURE_SETTING } from '~/shared/models/feature-setting.model';

const route = useRoute();
const activeLink = ref('');

// 監聽路由變化，隨時更新 activeLink
watch(
  () => route.path,
  (val) => {
    activeLink.value = val;
  },
  {
    immediate: true,
  },
);
</script>

<template>
  <nav class="h-full">
    <client-only>
      <el-menu :default-active="activeLink" class="menu--no-group-title h-full">
        <!-- 返回 -->
        <el-menu-item class="border-none" @click="$router.back">
          <div class="flex flex-1 items-center justify-end">
            <icon-google>arrow_back</icon-google>
          </div>
        </el-menu-item>
        <!-- 返回 / -->

        <template v-for="parent in FEATURE_SETTING" :key="parent.name">
          <!-- 第一層選單，有子層 -->
          <template v-if="parent.children.length">
            <el-sub-menu
              :index="parent.name"
              :expand-close-icon="IconExpandLess"
              :expand-open-icon="IconExpandMore"
            >
              <template #title>
                <icon-google class="mr-4">{{ parent.icon }}</icon-google>
                <span class="font-bold">{{ parent.text }}</span>
              </template>

              <!-- 第二層選單 -->
              <el-menu-item-group>
                <el-menu-item
                  :index="child.path"
                  v-for="child in parent.children"
                  :key="child.name"
                  @click="navigateTo({ path: child.path })"
                >
                  <icon-google class="mr-4">{{ child.icon }}</icon-google>
                  <span class="font-bold">{{ child.text }}</span>
                </el-menu-item>
              </el-menu-item-group>
              <!-- 第二層選單 / -->
            </el-sub-menu>
          </template>
          <!-- 第一層選單，有子層 / -->

          <!-- 第一層選單，無子層 -->
          <template v-else>
            <el-menu-item
              :index="parent.path"
              @click="navigateTo({ path: parent.path })"
            >
              <icon-google class="mr-4">{{ parent.icon }}</icon-google>
              <span class="font-bold">{{ parent.text }}</span>
            </el-menu-item>
          </template>
          <!-- 第一層選單，無子層 / -->
        </template>
      </el-menu>
    </client-only>
  </nav>
</template>
