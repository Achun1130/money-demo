<script lang="ts" setup>
definePageMeta({
  layout: 'demo',
});
</script>

<template>
  <div class="flex flex-col gap-[6.25rem] p-[9.25rem]">
    <div>
      <div class="mb-5 text-display-s">Basic Button</div>

      <el-row class="text-center">
        <el-col :span="6" :offset="6">
          <div class="box text-title-l">default</div>
        </el-col>
        <el-col :span="6">
          <div class="box text-title-l">hover</div>
        </el-col>
        <el-col :span="6">
          <div class="box text-title-l">disabled</div>
        </el-col>

        <!-- Filled 48px Title -->
        <el-col :span="3">
          <div class="box text-title-l">Filled</div>
        </el-col>
        <el-col :span="3">
          <div class="box text-title-l">48px</div>
        </el-col>

        <!-- Filled 48px default -->
        <el-col :span="6">
          <div class="box">
            <el-button type="primary" round size="large">
              <!-- 不使用 el-button 中的 icon，使用 slot 比較好控制 size & margin -->
              <icon-google class="mr-1"> person </icon-google>
              {{ $t('button.login') }}
              <icon-google class="ml-1"> expand_more </icon-google>
            </el-button>
          </div>
        </el-col>

        <!-- Filled 48px hover -->
        <el-col :span="6">
          <div class="box">
            <el-button type="primary" round size="large">
              <icon-google class="mr-1"> person </icon-google>
              {{ $t('button.login') }}
              <icon-google class="ml-1"> expand_more </icon-google>
            </el-button>
          </div>
        </el-col>

        <!-- Filled 48px disabled -->
        <el-col :span="6">
          <div class="box">
            <el-button type="primary" round size="large" disabled>
              <icon-google class="mr-1"> person </icon-google>
              {{ $t('button.login') }}
              <icon-google class="ml-1"> expand_more </icon-google>
            </el-button>
          </div>
        </el-col>

        <!-- Filled 44px Title -->
        <el-col :span="3" :offset="3">
          <div class="box text-title-l">44px</div>
        </el-col>

        <!-- Filled 44px default -->
        <el-col :span="6">
          <div class="box">
            <el-button type="primary" round>
              <icon-google class="mr-1"> person </icon-google>
              {{ $t('button.login') }}
              <icon-google class="ml-1"> expand_more </icon-google>
            </el-button>
          </div>
        </el-col>

        <!-- Filled 44px hover -->
        <el-col :span="6">
          <div class="box">
            <el-button type="primary" round>
              <icon-google class="mr-1"> person </icon-google>
              {{ $t('button.login') }}
              <icon-google class="ml-1"> expand_more </icon-google>
            </el-button>
          </div>
        </el-col>

        <!-- Filled 44px disabled -->
        <el-col :span="6">
          <div class="box">
            <el-button type="primary" round disabled>
              <icon-google class="mr-1"> person </icon-google>
              {{ $t('button.login') }}
              <icon-google class="ml-1"> expand_more </icon-google>
            </el-button>
          </div>
        </el-col>

        <!-- Filled 40px Title -->
        <el-col :span="3" :offset="3">
          <div class="box text-title-l">40px</div>
        </el-col>

        <!-- Filled 40px default -->
        <el-col :span="6">
          <div class="box">
            <el-button type="primary" round size="small">
              <icon-google icon-size="1.375rem" class="mr-1">
                person
              </icon-google>
              {{ $t('button.login') }}
              <icon-google icon-size="1.375rem" class="ml-1">
                expand_more
              </icon-google>
            </el-button>
          </div>
        </el-col>

        <!-- Filled 40px hover -->
        <el-col :span="6">
          <div class="box">
            <el-button type="primary" round size="small">
              <icon-google icon-size="1.375rem" class="mr-1">
                person
              </icon-google>
              {{ $t('button.login') }}
              <icon-google icon-size="1.375rem" class="ml-1">
                expand_more
              </icon-google>
            </el-button>
          </div>
        </el-col>

        <!-- Filled 40px disabled -->
        <el-col :span="6">
          <div class="box">
            <el-button type="primary" round size="small" disabled>
              <icon-google icon-size="1.375rem" class="mr-1">
                person
              </icon-google>
              {{ $t('button.login') }}
              <icon-google icon-size="1.375rem" class="ml-1">
                expand_more
              </icon-google>
            </el-button>
          </div>
        </el-col>

        <!-- Outlined 48px Title -->
        <el-col :span="3">
          <div class="box text-title-l">Outlined</div>
        </el-col>
        <el-col :span="3">
          <div class="box text-title-l">48px</div>
        </el-col>

        <!-- Outlined 48px default -->
        <el-col :span="6">
          <div class="box">
            <el-button type="primary" round plain size="large">
              <!-- 不使用 el-button 中的 icon，使用 slot 比較好控制 size & margin -->
              <icon-google class="mr-1"> arrow_forward </icon-google>
              {{ $t('button.info') }}
            </el-button>
          </div>
        </el-col>

        <!-- Outlined 48px hover -->
        <el-col :span="6">
          <div class="box">
            <el-button type="primary" round plain size="large">
              <icon-google class="mr-1"> arrow_forward </icon-google>
              {{ $t('button.info') }}
            </el-button>
          </div>
        </el-col>

        <!-- Outlined 48px disabled -->
        <el-col :span="6">
          <div class="box">
            <el-button type="primary" round plain size="large" disabled>
              <icon-google class="mr-1"> arrow_forward </icon-google>
              {{ $t('button.info') }}
            </el-button>
          </div>
        </el-col>

        <!-- Outlined 44px Title -->
        <el-col :span="3" :offset="3">
          <div class="box text-title-l">44px</div>
        </el-col>

        <!-- Outlined 44px default -->
        <el-col :span="6">
          <div class="box">
            <el-button type="primary" round plain>
              <icon-google class="mr-1"> arrow_forward </icon-google>
              {{ $t('button.info') }}
            </el-button>
          </div>
        </el-col>

        <!-- Outlined 44px hover -->
        <el-col :span="6">
          <div class="box">
            <el-button type="primary" round plain>
              <icon-google class="mr-1"> arrow_forward </icon-google>
              {{ $t('button.info') }}
            </el-button>
          </div>
        </el-col>

        <!-- Outlined 44px disabled -->
        <el-col :span="6">
          <div class="box">
            <el-button type="primary" round plain disabled>
              <icon-google class="mr-1"> arrow_forward </icon-google>
              {{ $t('button.info') }}
            </el-button>
          </div>
        </el-col>

        <!-- Outlined 40px Title -->
        <el-col :span="3" :offset="3">
          <div class="box text-title-l">40px</div>
        </el-col>

        <!-- Outlined 40px default -->
        <el-col :span="6">
          <div class="box">
            <el-button type="primary" round plain size="small">
              <icon-google icon-size="1.375rem" class="mr-1">
                arrow_forward
              </icon-google>
              {{ $t('button.info') }}
            </el-button>
          </div>
        </el-col>

        <!-- Outlined 40px hover -->
        <el-col :span="6">
          <div class="box">
            <el-button type="primary" round plain size="small">
              <icon-google icon-size="1.375rem" class="mr-1">
                arrow_forward
              </icon-google>
              {{ $t('button.info') }}
            </el-button>
          </div>
        </el-col>

        <!-- Outlined 40px disabled -->
        <el-col :span="6">
          <div class="box">
            <el-button type="primary" round plain size="small" disabled>
              <icon-google icon-size="1.375rem" class="mr-1">
                arrow_forward
              </icon-google>
              {{ $t('button.info') }}
            </el-button>
          </div>
        </el-col>
      </el-row>
    </div>

    <div>
      <div class="mb-5 text-display-s">Text Button</div>

      <el-row class="text-center">
        <el-col :span="6" :offset="6">
          <div class="box text-title-l">default</div>
        </el-col>
        <el-col :span="6">
          <div class="box text-title-l">hover</div>
        </el-col>
        <el-col :span="6">
          <div class="box text-title-l">disabled</div>
        </el-col>

        <!-- Text Button default -->
        <el-col :span="6" :offset="6">
          <div class="box">
            <el-button type="primary" text>
              {{ $t('button.more') }}
              <!-- 不使用 el-button 中的 icon，使用 slot 比較好控制 size & margin -->
              <icon-google class="ml-1"> keyboard_arrow_right </icon-google>
            </el-button>
          </div>
        </el-col>

        <!-- Text Button hover -->
        <el-col :span="6">
          <div class="box">
            <el-button type="primary" text>
              {{ $t('button.more') }}
              <!-- 不使用 el-button 中的 icon，使用 slot 比較好控制 size & margin -->
              <icon-google class="ml-1"> keyboard_arrow_right </icon-google>
            </el-button>
          </div>
        </el-col>

        <!-- Text Button disabled -->
        <el-col :span="6">
          <div class="box">
            <el-button type="primary" text disabled>
              {{ $t('button.more') }}
              <!-- 不使用 el-button 中的 icon，使用 slot 比較好控制 size & margin -->
              <icon-google class="ml-1"> keyboard_arrow_right </icon-google>
            </el-button>
          </div>
        </el-col>
      </el-row>
    </div>

    <div>
      <div class="mb-5 text-display-s">Icon Button</div>

      <el-row class="text-center">
        <el-col :span="6" :offset="6">
          <div class="box text-title-l">default</div>
        </el-col>
        <el-col :span="6">
          <div class="box text-title-l">hover</div>
        </el-col>
        <el-col :span="6">
          <div class="box text-title-l">disabled</div>
        </el-col>

        <!-- Icon Button default -->
        <el-col :span="6" :offset="6">
          <div class="box">
            <el-button type="primary" circle>
              <icon-google>search</icon-google>
            </el-button>
          </div>
        </el-col>

        <!-- Icon Button hover -->
        <el-col :span="6">
          <div class="box">
            <el-button type="primary" circle>
              <icon-google>search</icon-google>
            </el-button>
          </div>
        </el-col>

        <!-- Icon Button disabled -->
        <el-col :span="6">
          <div class="box">
            <el-button type="primary" circle disabled>
              <icon-google>search</icon-google>
            </el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  @apply flex h-20 items-center justify-center text-title-l;
}
</style>
