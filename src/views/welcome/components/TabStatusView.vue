<script setup lang="ts">
import { ref } from "vue";
import {
  ArrowLeftBold,
  ArrowRightBold,
  ArrowDownBold,
  ChatDotRound,
  Edit,
  Share,
  Delete,
  Select,
  KnifeFork,
  PhoneFilled,
  View
} from "@element-plus/icons-vue";
import CurrentOneView from "./CUrrentOneView.vue";

defineOptions({
  name: "TabStatusView"
});
const activeNames = ref(["1"]);
const handleChange = (val: CollapseModelValue) => {
  console.log(val);
};
const activeNamesTime = ref(["1"]);
const handleChangeTime = (val: CollapseModelValue) => {
  console.log(val);
};
</script>

<template>
  <div class="tab-status-view">
    <el-collapse
      v-model="activeNames"
      class="collapse-item-bg"
      @change="handleChange"
    >
      <el-collapse-item name="1">
        <template #title="{ isActive }">
          <div class="flex items-center">
            <el-icon v-if="isActive" class="mr-4 ml-4"
              ><ArrowDownBold
            /></el-icon>
            <el-icon v-else class="mr-4 ml-4"><ArrowLeftBold /></el-icon>
            <span class="text-xl font-bold">待确认</span>
            <el-icon class="header-icon">
              <Tickets />
            </el-icon>
          </div>
        </template>
        <template #icon="{ isActive }">
          <span class="icon-ele"> 2桌台 / 8座位 </span>
        </template>
        <div class="content">
          <el-row :gutter="12">
            <el-col :span="4">
              <div class="mt-4">
                <CurrentOneView />
              </div>
            </el-col>
          </el-row>
        </div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template #title="{ isActive }">
          <div class="flex items-center">
            <el-icon v-if="isActive" class="mr-4 ml-4"
              ><ArrowDownBold
            /></el-icon>
            <el-icon v-else class="mr-4 ml-4"><ArrowLeftBold /></el-icon>
            <span class="text-xl font-bold">等待中</span>
            <el-icon class="header-icon">
              <Tickets />
            </el-icon>
          </div>
        </template>
        <template #icon="{ isActive }">
          <span class="icon-ele"> 2桌台 / 8座位 </span>
        </template>
        <div class="content">
          <el-row :gutter="12">
            <el-col :span="4">
              <div class="mt-4">
                <CurrentOneView />
              </div>
            </el-col>
          </el-row>
        </div>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template #title="{ isActive }">
          <div class="flex items-center">
            <el-icon v-if="isActive" class="mr-4 ml-4"
              ><ArrowDownBold
            /></el-icon>
            <el-icon v-else class="mr-4 ml-4"><ArrowLeftBold /></el-icon>
            <span class="text-xl font-bold">已确认</span>
            <el-icon class="header-icon">
              <Tickets />
            </el-icon>
          </div>
        </template>
        <template #icon="{ isActive }">
          <span class="icon-ele"> 2桌台 / 8座位 </span>
        </template>
        <div class="content">
          <el-collapse
            v-model="activeNamesTime"
            class="bg-color-time-item"
            @change="handleChangeTime"
          >
            <el-collapse-item name="1">
              <template #title="{ isActive }">
                <div class="flex items-center ml-6">
                  <span class="text-xl font-bold">7:00</span>
                </div>
              </template>
              <div class="content">
                <el-row :gutter="12">
                  <el-col :span="4">
                    <div class="mt-4">
                      <CurrentOneView />
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-collapse-item>
            <el-collapse-item name="2">
              <template #title="{ isActive }">
                <div class="flex items-center ml-6">
                  <span class="text-xl font-bold">7:15</span>
                </div>
              </template>
              <div class="content">
                <el-row :gutter="12">
                  <el-col :span="4">
                    <div class="mt-4">
                      <CurrentOneView />
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<style scoped lang="scss">
.tab-status-view {
  border-radius: 12px;
  margin-top: 12px;
  width: 100%;
  .collapse-item-bg {
    :deep(.el-collapse-item__header) {
      background-color: #515151;
      color: #fff;
    }
    .bg-color-time-item {
      :deep(.el-collapse-item__header) {
        background-color: #cccbce;
        color: #fff;
      }
    }
  }
}
</style>
