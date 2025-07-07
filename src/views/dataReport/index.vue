<script setup lang="ts">
import { useDataReport } from "./utils/hook";
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
import { CaretBottom } from "@element-plus/icons-vue";

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

const { form, loading } = useDataReport();
</script>

<template>
  <div class="main-container-data-report">
    <div class="flex w-full justify-between">
      <div class="bg-white-i">
        <div class="text-2xl text-black-500">13/11/2024 - 12/12/2024</div>
        <div>相比较（上个30天） 14/10/2024 - 12/11/2024</div>
        <div class="text-lg text-black-500 mt-4">对照组选择:</div>
        <div>
          <el-radio-group v-model="form.radio">
            <el-radio-button value="top">上个月</el-radio-button>
            <el-radio-button value="right">上一年</el-radio-button>
          </el-radio-group>
        </div>
      </div>
      <div class="flex justify-end flex-end flex-row w-full bg-white-i">
        <div>
          <el-radio-group v-model="form.radio" class="mr-10">
            <el-radio :value="3">最近30天</el-radio>
            <el-radio :value="6">最近60天</el-radio>
            <el-radio :value="9">最近90天</el-radio>
          </el-radio-group>
        </div>
        <div>
          <el-date-picker
            v-model="form.date"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :size="'default'"
          />
        </div>
      </div>
    </div>
    <div class="mt-5">
      <div class="text-lg text-black-500">到店访问</div>
      <div class="text-lg text-black-500 text-[#72B9D3]">
        数据包括所有到店访问次数，包括无预约的
      </div>
      <el-row :gutter="20">
        <el-col :span="6">
          <div
            class="flex border-1 border-black-600 flex-col p-4 mt-4 bg-current"
          >
            <div>桌台</div>
            <div class="text-2xl text-black-500 font-bold">1.111</div>
            <div class="flex items-center justify-start flex-row">
              <el-icon class="text-[#FF6667] text-lg"><CaretBottom /></el-icon>
              <span class="text-lg text-black-500 text-[#FF6667]">0.30%</span>
              <span class="text-sm text-gray-500">(1.222)</span>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div
            class="flex border-1 border-black-600 flex-col p-4 mt-4 bg-current"
          >
            <div>人数</div>
            <div class="text-2xl text-black-500 font-bold">1.111</div>
            <div class="flex items-center justify-start flex-row">
              <el-icon class="text-[#FF6667] text-lg"><CaretBottom /></el-icon>
              <span class="text-lg text-black-500 text-[#FF6667]">0.30%</span>
              <span class="text-sm text-gray-500">(1.222)</span>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="mt-5">
      <div class="text-lg text-black-500">预约</div>
      <div class="text-lg text-black-500 text-[#72B9D3]">
        数据包括所有预约，包括取消或爽约的
      </div>
      <el-row :gutter="20">
        <el-col :span="6">
          <div
            class="flex border-1 border-black-600 flex-col p-4 mt-4 bg-current"
          >
            <div>桌台</div>
            <div class="text-2xl text-black-500 font-bold">1.111</div>
            <div class="flex items-center justify-start flex-row">
              <el-icon class="text-[#FF6667] text-lg"><CaretBottom /></el-icon>
              <span class="text-lg text-black-500 text-[#FF6667]">0.30%</span>
              <span class="text-sm text-gray-500">(1.222)</span>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div
            class="flex border-1 border-black-600 flex-col p-4 mt-4 bg-current"
          >
            <div>人数</div>
            <div class="text-2xl text-black-500 font-bold">1.111</div>
            <div class="flex items-center justify-start flex-row">
              <el-icon class="text-[#FF6667] text-lg"><CaretBottom /></el-icon>
              <span class="text-lg text-black-500 text-[#FF6667]">0.30%</span>
              <span class="text-sm text-gray-500">(1.222)</span>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div
            class="flex border-1 border-black-600 flex-col p-4 mt-4 bg-current"
          >
            <div>人数</div>
            <div class="text-2xl text-black-500 font-bold">1.111</div>
            <div class="flex items-center justify-start flex-row">
              <el-icon class="text-[#FF6667] text-lg"><CaretBottom /></el-icon>
              <span class="text-lg text-black-500 text-[#FF6667]">0.30%</span>
              <span class="text-sm text-gray-500">(1.222)</span>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div
            class="flex border-1 border-black-600 flex-col p-4 mt-4 bg-current"
          >
            <div>人数</div>
            <div class="text-2xl text-black-500 font-bold">1.111</div>
            <div class="flex items-center justify-start flex-row">
              <el-icon class="text-[#FF6667] text-lg"><CaretBottom /></el-icon>
              <span class="text-lg text-black-500 text-[#FF6667]">0.30%</span>
              <span class="text-sm text-gray-500">(1.222)</span>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div
            class="flex border-1 border-black-600 flex-col p-4 mt-4 bg-current"
          >
            <div>人数</div>
            <div class="text-2xl text-black-500 font-bold">1.111</div>
            <div class="flex items-center justify-start flex-row">
              <el-icon class="text-[#FF6667] text-lg"><CaretBottom /></el-icon>
              <span class="text-lg text-black-500 text-[#FF6667]">0.30%</span>
              <span class="text-sm text-gray-500">(1.222)</span>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="mt-5">
      <div class="text-lg text-black-500">到店访问</div>
      <div class="text-lg text-black-500 text-[#72B9D3]">
        数据包括所有到店访问次数，包括无预约的
      </div>
      <el-row :gutter="20">
        <el-col :span="6">
          <div
            class="flex border-1 border-black-600 flex-col p-4 mt-4 bg-current"
          >
            <div>桌台</div>
            <div class="text-2xl text-black-500 font-bold">1.111</div>
            <div class="flex items-center justify-start flex-row">
              <el-icon class="text-[#FF6667] text-lg"><CaretBottom /></el-icon>
              <span class="text-lg text-black-500 text-[#FF6667]">0.30%</span>
              <span class="text-sm text-gray-500">(1.222)</span>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div
            class="flex border-1 border-black-600 flex-col p-4 mt-4 bg-current"
          >
            <div>人数</div>
            <div class="text-2xl text-black-500 font-bold">1.111</div>
            <div class="flex items-center justify-start flex-row">
              <el-icon class="text-[#FF6667] text-lg"><CaretBottom /></el-icon>
              <span class="text-lg text-black-500 text-[#FF6667]">0.30%</span>
              <span class="text-sm text-gray-500">(1.222)</span>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="mt-5">
      <div class="text-lg text-black-500">到店访问</div>
      <div class="text-lg text-black-500 text-[#72B9D3]">
        数据包括所有到店访问次数，包括无预约的
      </div>
      <el-row :gutter="20">
        <el-col :span="6">
          <div
            class="flex border-1 border-black-600 flex-col p-4 mt-4 bg-current"
          >
            <div>桌台</div>
            <div class="text-2xl text-black-500 font-bold">1.111</div>
            <div class="flex items-center justify-start flex-row">
              <el-icon class="text-[#FF6667] text-lg"><CaretBottom /></el-icon>
              <span class="text-lg text-black-500 text-[#FF6667]">0.30%</span>
              <span class="text-sm text-gray-500">(1.222)</span>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div
            class="flex border-1 border-black-600 flex-col p-4 mt-4 bg-current"
          >
            <div>人数</div>
            <div class="text-2xl text-black-500 font-bold">1.111</div>
            <div class="flex items-center justify-start flex-row">
              <el-icon class="text-[#FF6667] text-lg"><CaretBottom /></el-icon>
              <span class="text-lg text-black-500 text-[#FF6667]">0.30%</span>
              <span class="text-sm text-gray-500">(1.222)</span>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-container-data-report {
  height: 100%;
  // background-color: #fff;
  padding: 10px;
  .bg-white-i {
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
  }
  .bg-current {
    background-color: #fff;
    border-radius: 5px;
  }
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
