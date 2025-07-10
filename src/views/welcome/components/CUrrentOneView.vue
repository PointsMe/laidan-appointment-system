<script setup lang="ts">
import {
  ChatDotRound,
  Select,
  KnifeFork,
  PhoneFilled,
  View
} from "@element-plus/icons-vue";
import dayjs from "dayjs";
import { useAddAppointment } from "./hooks";
import { onMounted, ref } from "vue";
import { ReservationStatus } from "@/config/enum";
import Icon1 from "@/assets/images/icon-1.png";
import Icon2 from "@/assets/images/icon-2.png";
import Icon3 from "@/assets/images/icon-3.png";
import Icon4 from "@/assets/images/icon-4.png";
import Icon5 from "@/assets/images/icon-5.png";
import Icon6 from "@/assets/images/icon-6.png";
import Icon7 from "@/assets/images/icon-7.png";
import Icon8 from "@/assets/images/icon-8.png";
import Icon12 from "@/assets/images/icon-12.png";
import Icon14 from "@/assets/images/icon-14.png";
import Icon15 from "@/assets/images/icon-15.png";
defineOptions({
  name: "CurrentOneView"
});
const { openDialogDetail, openDialogProcessDetail, openDialogProcessForm } =
  useAddAppointment();
const row = defineProps<{
  data: any;
}>();
const rowData = ref({});
onMounted(() => {
  console.log("onMounted==>", row.data);
  const iconList = [
    {
      state: 101,
      icon: Icon1
    },
    {
      state: 102,
      icon: Icon2
    },
    {
      state: 103,
      icon: Icon3
    },
    {
      state: 104,
      icon: Icon4
    },
    {
      state: 105,
      icon: Icon8
    },
    {
      state: 106,
      icon: Icon15
    },
    {
      state: 107,
      icon: Icon14
    },
    {
      state: 108,
      icon: Icon12
    }
  ];
  rowData.value = {
    ...row.data,
    icon: iconList.find(iv => iv.state === row.data.state)?.icon,
    time: dayjs(row.data.startedAt).format("hh:mm:ss")
  };
});
</script>
<template>
  <div class="content-item">
    <el-card>
      <template #header>
        <div class="card-header flex justify-between">
          <div class="card-header-left flex items-center">
            <div class="flex items-center">
              <img :src="rowData.icon" alt="" />
            </div>
            <div class="flex flex-col items-start ml-4">
              <span>{{ rowData.username }}</span>
              <span>{{ rowData.time }}</span>
            </div>
          </div>
          <div class="card-header-right flex flex-col items-end">
            <div class="flex items-center justify-center">
              <div class="flex flex-col items-end mr-4">
                <span>人数</span>
                <span class="text-2xl font-bold">{{ rowData.dinerCount }}</span>
              </div>
              <div
                v-if="rowData.tableNumbers && rowData.tableNumbers.length > 0"
                class="flex flex-col items-end bg-color-con"
              >
                <div class="flex flex-col">
                  <span>{{ rowData.tableZone.name }}</span>
                  <span class="text-2xl font-bold">{{
                    rowData.tableNumbers[0]
                  }}</span>
                </div>
              </div>
              <div v-else class="flex flex-col items-end bg-not-seat">
                待选座
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
              <span>{{ rowData.remark || "~" }}</span>
            </div>
          </template>
          <div class="flex items-center justify-between bg-color">
            <div class="flex-1">
              <el-button class="bg-color-btn" type="primary" :icon="Select"
                >确认
              </el-button>
            </div>
            <el-divider direction="vertical" />
            <div class="flex-1">
              <el-button class="bg-color-btn" type="primary" :icon="KnifeFork"
                >选座</el-button
              >
            </div>
            <el-divider direction="vertical" />
            <div class="flex-1">
              <el-button class="bg-color-btn" type="primary" :icon="PhoneFilled"
                >电话</el-button
              >
            </div>
            <el-divider direction="vertical" />
            <div class="flex-1">
              <el-button
                class="bg-color-btn"
                type="primary"
                :icon="View"
                @click="openDialogDetail(rowData)"
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
  .bg-not-seat {
    background-color: #ff3b00;
    color: #fff;
    padding: 4px 8px;
    border-radius: 4px;
    border: none;
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
