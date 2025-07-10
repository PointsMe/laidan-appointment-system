<script lang="ts" setup>
import {
  Comment,
  Iphone,
  Message,
  ArrowRightBold,
  Edit
} from "@element-plus/icons-vue";
import { onMounted, ref } from "vue";
import dayjs from "dayjs";
import Icon1 from "@/assets/images/icon-1.png";
import Icon2 from "@/assets/images/icon-2.png";
import Icon3 from "@/assets/images/icon-3.png";
import Icon4 from "@/assets/images/icon-4.png";
import Icon8 from "@/assets/images/icon-8.png";
import Icon15 from "@/assets/images/icon-15.png";
import Icon14 from "@/assets/images/icon-14.png";
import Icon12 from "@/assets/images/icon-12.png";
defineOptions({
  name: "AppointmentDetail"
});
const props = defineProps<{
  formInline: any;
}>();
const emit = defineEmits(["close"]);
const rowData = ref(props.formInline);
onMounted(() => {
  console.log("AppointmentDetail====onMounted", rowData.value);
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
    ...props.formInline,
    icon: iconList.find(iv => iv.state === props.formInline.state)?.icon,
    weekday: dayjs(props.formInline.startedAt).format("dddd"),
    data: dayjs(props.formInline.startedAt).format("YYYY-MM-DD"),
    time: dayjs(props.formInline.startedAt).format("hh:mm:ss")
  };
});
const close = () => {
  emit("close");
};
</script>
<template>
  <div class="appointment-detail">
    <div class="appointment-detail-header flex items-center justify-between">
      <div class="flex ml-4 items-center">
        <img :src="rowData.icon" alt="" class="w-15 h-15" />
        <div class="flex flex-col ml-4">
          <span>{{ rowData.weekday }} {{ rowData.data }}</span>
          <span>{{ rowData.time }}</span>
        </div>
      </div>
      <div class="flex ml-4 gap-4">
        <div class="flex flex-col justify-center bg-color-1">
          <span>人数</span>
          <span>{{ rowData.dinerCount }}</span>
        </div>
        <div
          v-if="!rowData.customer.blacklisted"
          class="flex flex-col bg-color-grey-1"
        >
          <span>{{ rowData.tableZone.name }}</span>
          <span>{{ rowData.tableNumbers?.join(",") }}</span>
        </div>
        <div class="flex flex-col justify-center bg-color-2 ml-10">
          <el-button :icon="ArrowRightBold" />
        </div>
      </div>
    </div>
    <div class="appointment-detail-top ml-4 mt-4 mb-6">
      <div class="flex flex-col justify-start">
        <div class="flex items-center">
          <el-icon><Comment /></el-icon>
          <span class="ml-2">{{ rowData.remark }}</span>
        </div>
        <div class="flex items-center ml-6 font-bold text-[#000]">
          <span>香菜过敏</span>
        </div>
      </div>
    </div>
    <div class="appointment-detail-bottom">
      <div class="flex flex-col bg-color-2">
        <div class="text-2xl">{{ rowData.customer.name }}</div>
        <div class="flex items-center mt-2 mb-4">
          <el-icon><Iphone /></el-icon>
          <span>{{ rowData.mobile }}</span>
          <el-icon class="ml-4"><Message /></el-icon>
          <span>{{ rowData.email }}</span>
        </div>
        <div>地区: {{ rowData.address }}</div>
      </div>
    </div>
    <div class="appointment-detail-bottom-left mt-4">
      <div class="flex flex-col bg-color-2">
        <div class="flex border-b-i">最后一次光顾：30天前</div>
        <div class="flex items-center mt-6">
          <div class="flex-1 flex flex-col">
            <span>预约</span>
            <span class="text-3xl">20</span>
          </div>
          <div class="flex-1 flex flex-col">
            <span>实际到店</span>
            <span class="text-3xl">10</span>
          </div>
        </div>
        <div class="flex items-center mt-6">
          <div class="flex-1 flex flex-col">
            <span>取消</span>
            <span class="text-3xl">20</span>
          </div>
          <div class="flex-1 flex flex-col">
            <span>爽约</span>
            <span class="text-3xl">10</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between mt-4 gap-4 w-9/10 mx-auto">
      <el-button size="large" class="w-1/2" @click="close">关闭</el-button>
      <el-button
        type="primary"
        size="large"
        class="w-1/2 btn-color-1"
        :icon="Edit"
        >编辑</el-button
      >
    </div>
  </div>
</template>
<style scoped lang="scss">
.appointment-detail {
  width: 100%;
  height: 100%;
  .appointment-detail-bottom-left {
    .bg-color-2 {
      background-color: #515151;
      border-radius: 5px;
      padding: 30px 20px;
      color: #fff;
      text-align: left;
      font-size: 16px;
      .border-b-i {
        border-bottom: 1px dashed #fff;
        padding-bottom: 10px;
      }
    }
  }
  .appointment-detail-bottom {
    .bg-color-2 {
      background-color: #515151;
      border-radius: 5px;
      padding: 5px 10px;
      color: #fff;
      text-align: left;
      padding: 30px 20px;
      font-size: 16px;
    }
  }
  .bg-color-grey-1 {
    background-color: #515151;
    border-radius: 5px;
    padding: 5px 10px;
    color: #fff;
    text-align: center;
    > span:first-child {
      font-size: 12px;
    }
    > span:last-child {
      font-size: 22px;
    }
  }
  .bg-color-1 {
    > span:first-child {
      font-size: 12px;
    }
    > span:last-child {
      font-size: 22px;
    }
  }
  .btn-color-1 {
    background-color: #72b9d3;
    border-color: #72b9d3;
  }
}
</style>
