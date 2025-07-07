<script setup lang="ts">
import { useRole } from "./utils/hook";
import { ref, computed, nextTick, onMounted } from "vue";
import { PureTableBar } from "@/components/RePureTableBar";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import {
  delay,
  subBefore,
  deviceDetection,
  useResizeObserver
} from "@pureadmin/utils";

import Delete from "~icons/ep/delete";
import EditPen from "~icons/ep/edit-pen";
import Refresh from "~icons/ep/refresh";
import Menu from "~icons/ep/menu";
import AddFill from "~icons/ri/add-circle-line";
import Close from "~icons/ep/close";
import Check from "~icons/ep/check";
import { ElMessageBox } from "element-plus";
import { deleteEmployeeApi } from "@/api/user";

defineOptions({
  name: "Store"
});

const iconClass = computed(() => {
  return [
    "w-[22px]",
    "h-[22px]",
    "flex",
    "justify-center",
    "items-center",
    "outline-hidden",
    "rounded-[4px]",
    "cursor-pointer",
    "transition-colors",
    "hover:bg-[#0000000f]",
    "dark:hover:bg-[#ffffff1f]",
    "dark:hover:text-[#ffffffd9]"
  ];
});

const formRef = ref();
const tableRef = ref();
const contentRef = ref();
const checkList = ref([]);
const checkList2 = ref([]);
const {
  form,
  loading,
  columns,
  rowStyle,
  dataList,
  pagination,
  onSearch,
  resetForm,
  openDialog,
  handleSizeChange,
  handleCurrentChange,
  handleSelectionChange
} = useRole();
onMounted(() => {});
</script>

<template>
  <div class="main-container-notice h-full w-full">
    <div
      ref="contentRef"
      :class="['flex', deviceDetection() ? 'flex-wrap' : '']"
    >
      <div class="w-1/2">
        <el-form label-width="120px" label-position="top" :model="form">
          <el-row>
            <el-col :span="24">
              <el-row class="border-b border-black-200 pb-4">
                <el-col :span="12">
                  <div class="text-sm text-black-300 mb-4 flex flex-col">
                    <span class="text-lg text-black-300 mr-4">
                      错过的电话
                    </span>
                    <span class="text-black-300 mr-4"> 基本服务信息设置 </span>
                  </div>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="" prop="username">
                    <el-switch v-model="form.username" size="large" />
                    <span class="text-sm text-black-300 ml-4">
                      针对有预定的顾客，发送邮件询问是否取消/编辑
                    </span>
                  </el-form-item>
                  <el-form-item label="" prop="username">
                    <el-switch v-model="form.username" size="large" />
                    <span class="text-sm text-black-300 ml-4">
                      针对没有预定的顾客，发送邮件询问是否预定
                    </span>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="24">
              <el-row class="border-b border-black-200 pb-4 mt-4">
                <el-col :span="12">
                  <div class="text-sm text-black-300 mb-4 flex flex-col">
                    <span class="text-lg text-black-300 mr-4"> 消息通知 </span>
                    <span class="text-black-300 mr-4">
                      你希望接受哪些来自Laidan的信息
                    </span>
                  </div>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="邮件" prop="username">
                    <el-input v-model="form.username" />
                  </el-form-item>
                  <el-form-item label="" prop="username">
                    <el-checkbox-group
                      v-model="checkList2"
                      class="flex flex-col"
                    >
                      <el-checkbox label="新的线上预订，已确认" value="1" />
                      <el-checkbox label="新的线上预订，待确认" value="2" />
                      <el-checkbox
                        label="新的线上预订，在等待列表内"
                        value="3"
                      />
                      <el-checkbox label="顾客线上取消预约" value="4" />
                      <el-checkbox label="发送摘要在每个服务前" value="5" />
                    </el-checkbox-group>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="24">
              <el-row class="border-b border-black-200 pb-4 mt-4">
                <el-col :span="12">
                  <div class="text-sm text-black-300 mb-4 flex flex-col">
                    <span class="text-lg text-black-300 mr-4">
                      发送信息给顾客
                    </span>
                    <span class="text-black-300 mr-4">
                      选择可提供预约服务的区域
                    </span>
                  </div>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="发送方式" prop="username">
                    <el-radio-group v-model="radio" class="flex flex-col">
                      <el-radio :value="3">Email</el-radio>
                      <el-radio :value="6">Whatsapp</el-radio>
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item label="发送内容" prop="username">
                    <el-checkbox-group
                      v-model="checkList2"
                      class="flex flex-col"
                    >
                      <el-checkbox value="1">
                        <div class="flex items-center w-full">
                          <div class="text-base text-black-300 mr-4">
                            取消预约
                          </div>
                          <div class="text-sm text-black-300">
                            （当预约取消的时候发送给顾客）
                          </div>
                        </div>
                      </el-checkbox>
                      <el-checkbox value="2">
                        <div class="flex items-center w-full">
                          <div class="text-base text-black-300 mr-4">
                            预约失败
                          </div>
                          <div class="text-sm text-black-300">
                            （当预约失败的时候发送给顾客）
                          </div>
                        </div>
                      </el-checkbox>
                      <el-checkbox value="3">
                        <div class="flex items-center w-full">
                          <div class="text-base text-black-300 mr-4">
                            预约提醒
                          </div>
                          <div class="text-sm text-black-300">
                            （每天8点发送给当天顾客，仅适用于提前 12
                            小时以上的预订）
                          </div>
                        </div>
                      </el-checkbox>
                      <el-checkbox value="4">
                        <div class="flex items-center w-full">
                          <div class="text-base text-black-300 mr-4">
                            确认预约
                          </div>
                          <div class="text-sm text-black-300">
                            （每天8点发送给当天顾客，仅适用于提前 12
                            小时以上的预订）
                          </div>
                        </div>
                      </el-checkbox>
                      <el-checkbox value="5">
                        <div class="flex items-center w-full">
                          <div class="text-base text-black-300 mr-4">
                            二次确认预约
                          </div>
                          <div class="text-sm text-black-300">
                            （每天10点发送给当天顾客，仅适用于第一次发送后没有确认的顾客）
                          </div>
                        </div>
                      </el-checkbox>
                      <el-checkbox value="6">
                        <div class="flex items-center w-full">
                          <div class="text-base text-black-300 mr-4">
                            服务结束后发送评价问卷
                          </div>
                          <div class="text-sm text-black-300">
                            （在服务结束后的几分钟内发送评价问卷）
                          </div>
                        </div>
                      </el-checkbox>
                      <el-checkbox value="7">
                        <div class="flex items-center w-full">
                          <div class="text-base text-black-300 mr-4">
                            桌台已空出
                          </div>
                          <div class="text-sm text-black-300">
                            （提醒客人桌台已准备好，可在十分钟内进行预定）
                          </div>
                        </div>
                      </el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-form>
        <div class="flex justify-center mt-20">
          <el-button type="primary" plain class="mr-4 w-[100px]"
            >取消</el-button
          >
          <el-button type="primary" class="w-[100px]">保存</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-container-notice {
  padding: 24px;
  background-color: #fff;
}

:deep(.el-dropdown-menu__item i) {
  margin: 0;
}

.main-content {
  margin: 24px 24px 0 !important;
}

.search-form {
  :deep(.el-form-item) {
    margin-bottom: 12px;
  }
}
</style>
