<script setup lang="ts">
import { ref } from "vue";
import ChooseTimeList from "./chooseTimeList.vue";

const props = defineProps<{
  title: string;
  content: string;
}>();
const activeNames = ref(["1"]);
</script>

<template>
  <div class="collapse-items">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="1">
        <template #title="{ isActive }">
          <div class="ml-4">通用</div>
        </template>
        <div class="collapse-items-content">
          <ChooseTimeList />
        </div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template #title="{ isActive }">
          <div class="ml-4">室内</div>
        </template>
        <div class="collapse-items-content">
          <ChooseTimeList />
        </div>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template #title="{ isActive }">
          <div class="ml-4">室外</div>
        </template>
        <div class="collapse-items-content">
          <ChooseTimeList />
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style scoped lang="scss">
.collapse-items {
  &-title {
    font-size: 14px;
    font-weight: 600;
    color: #333;
  }
  &-content {
    font-size: 14px;
    color: #333;
  }
  :deep(.el-collapse-item__header) {
    background-color: #000 !important;
    color: #fff !important;
    .el-collapse-item__header-text {
      color: #fff !important;
    }
  }
  :deep(.el-collapse-item__content) {
    padding-bottom: 0 !important;
  }
}
</style>
