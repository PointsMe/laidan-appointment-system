<script setup lang="ts">
import {
  ChatDotRound,
  Select,
  KnifeFork,
  PhoneFilled,
  View
} from "@element-plus/icons-vue";
defineOptions({
  name: "CurrentOneView"
});
</script>
<template>
  <div class="content-item">
    <el-card>
      <template #header>
        <div class="card-header flex justify-between">
          <div class="card-header-left flex items-center">
            <div class="flex items-center">
              <img src="@/assets/images/icon-1.png" alt="" />
            </div>
            <div class="flex flex-col items-start ml-4">
              <span>Card name</span>
              <span>19:30 - 22:00</span>
            </div>
          </div>
          <div class="card-header-right flex flex-col items-end">
            <div class="flex items-center justify-center">
              <div class="flex flex-col items-end mr-4">
                <span>人数</span>
                <span class="text-2xl font-bold">8</span>
              </div>
              <div class="flex flex-col items-end bg-color-con">
                <div class="flex flex-col">
                  <span>室内</span>
                  <span class="text-2xl font-bold">20</span>
                </div>
                <!-- <div class="flex flex-col p-2">待选座</div> -->
              </div>
            </div>
          </div>
        </div>
      </template>
      <el-collapse>
        <el-collapse-item name="1">
          <template #title="{ isActive }">
            <div class="flex items-center">
              <el-icon class="ml-4 mr-4 bg-color-icon"
                ><ChatDotRound
              /></el-icon>
              <span>靠窗座位，婴儿座椅。</span>
            </div>
          </template>
          <div class="flex items-center justify-between w-full bg-color">
            <div class="flex-1">
              <el-button
                class="w-full bg-color-btn"
                type="primary"
                :icon="Select"
                >确认
              </el-button>
            </div>
            <el-divider direction="vertical" />
            <div class="flex-1">
              <el-button
                class="w-full bg-color-btn"
                type="primary"
                :icon="KnifeFork"
                >选座</el-button
              >
            </div>
            <el-divider direction="vertical" />
            <div class="flex-1">
              <el-button
                class="w-full bg-color-btn"
                type="primary"
                :icon="PhoneFilled"
                >电话</el-button
              >
            </div>
            <el-divider direction="vertical" />
            <div class="flex-1">
              <el-button class="w-full bg-color-btn" type="primary" :icon="View"
                >详情</el-button
              >
            </div>
          </div>
        </el-collapse-item></el-collapse
      >
    </el-card>
  </div>
</template>
<style scoped lang="scss">
.content-item {
  .bg-color-con {
    background-color: #515151;
    color: #fff;
    padding: 4px 8px;
    border-radius: 4px;
  }
  .bg-color {
    background-color: #72b9d3;
  }
  :deep(.el-collapse-item__header) {
    background-color: #fff !important;
    color: #000 !important;
  }
  :deep(.el-card__body) {
    padding: 0;
  }
  :deep(.el-collapse-item__content) {
    padding-bottom: 0 !important;
  }
  .bg-color-icon {
    color: #6cf;
    font-size: 16px;
  }
  .bg-color-btn {
    background-color: #72b9d3;
    border-color: #72b9d3;
  }
}
</style>
