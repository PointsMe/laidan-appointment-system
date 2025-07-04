<script setup lang="ts">
import { ref, onMounted } from "vue";
import { formRules } from "./utils/rule";
import { FormProps } from "./utils/types";
import { ArrowRight, ArrowDown } from "@element-plus/icons-vue";
import CollapseItems from "./collapseItems.vue";
const props = withDefaults(defineProps<FormProps>(), {
  formInline: () => ({})
});
const ruleFormRef = ref();
const newFormInline = ref(props.formInline);
const checkList = ref(["Option A", "Option C"]);
const activeNames = ref(["1"]);
</script>

<template>
  <div class="reservation-form-container">
    <div class="reservation-form-container-top flex flex-col">
      <span class="text-xl text-black-500">周五 13/07/2025</span>
      <span class="text-xl text-black-500">晚餐</span>
    </div>
    <el-form
      ref="ruleFormRef"
      :model="newFormInline"
      :rules="formRules"
      label-width="82px"
      label-position="top"
    >
      <el-row>
        <el-col :span="24">
          <el-form-item class="w-full-checkout" label="预约权限">
            <el-checkbox-group v-model="checkList" class="flex flex-col">
              <el-checkbox
                class="w-full w-full-color-1 pl-2"
                label="接受网上预约"
                value="1"
              />
              <el-checkbox
                class="w-full w-full-color-2 pl-2"
                label="接受电话预约"
                value="2"
              />
              <el-checkbox
                class="w-full w-full-color-3 pl-2"
                label="已满/不可预约"
                value="3"
              />
              <el-checkbox
                class="w-full w-full-color-4 pl-2"
                label="关闭手机和网上预约"
                value="4"
              />
            </el-checkbox-group>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="开放预订的区域">
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="室内" value="1" />
              <el-checkbox label="室外" value="2" />
            </el-checkbox-group>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="所有用餐时段最多容纳多少人">
            <el-input
              v-model="newFormInline.shopIds"
              placeholder="请输入预约人数"
            />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="每个用餐时段最多容纳多少人">
            <el-input
              v-model="newFormInline.shopIds"
              placeholder="请输入预约人数"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="reservation-form-container-bottom">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <template #title="{ isActive }">
            <div
              :class="[
                'title-wrapper flex items-center',
                { 'is-active': isActive }
              ]"
            >
              <span class="text-lg text-black-300 mr-4">
                展开进入高级时段设置
              </span>
              <el-icon v-if="isActive"><ArrowRight /></el-icon>
              <el-icon v-else><ArrowDown /></el-icon>
            </div>
          </template>
          <template #icon="{ isActive }">
            <span class="icon-ele" />
          </template>
          <div class="bg-f5">
            <div class="text-sm text-black-300 mb-4">
              单独开启需要特殊设置的时段；未开启的时段使用的是通用设置。
              你也可以在开启的情况下把人数设为0就可停止网络预约。
            </div>
            <CollapseItems />
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<style scoped lang="scss">
.reservation-form-container {
  width: 100%;
  height: 100%;
  padding: 20px;
  &-bottom {
    margin-top: 20px;
    background-color: #f5f5f5;
    :deep(.el-collapse-item__header) {
      background-color: #f5f5f5;
    }
    :deep(.el-collapse-item__content) {
      padding-bottom: 0 !important;
    }
    .bg-f5 {
      background-color: #f5f5f5;
    }
  }
  &-top {
    padding-bottom: 20px;
  }
  .w-full-checkout {
    width: 100% !important;
    .w-full-color-1 {
      background-color: #fff;
      color: #000;
      border-radius: 4px;
    }
    .w-full-color-2 {
      background-color: #ff8c29;
      color: #fff;
      margin-top: 10px;
      border-radius: 4px;
    }
    .w-full-color-3 {
      background-color: #ff6667;
      color: #fff;
      margin-top: 10px;
      border-radius: 4px;
    }
    .w-full-color-4 {
      background-color: #000000;
      color: #fff;
      margin-top: 10px;
      border-radius: 4px;
    }
    :deep(.el-form-item__content) {
      display: initial !important;
    }
  }
}
</style>
