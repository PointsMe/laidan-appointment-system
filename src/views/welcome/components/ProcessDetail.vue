<script lang="ts" setup>
import {
  Comment,
  Iphone,
  Message,
  ArrowRightBold,
  Edit
} from "@element-plus/icons-vue";
import { ref, onMounted } from "vue";
import Icon1 from "@/assets/images/icon-1.png";
import Icon2 from "@/assets/images/icon-2.png";
import Icon3 from "@/assets/images/icon-3.png";
import Icon4 from "@/assets/images/icon-4.png";
import Icon8 from "@/assets/images/icon-8.png";
import Icon15 from "@/assets/images/icon-15.png";
import Icon14 from "@/assets/images/icon-14.png";
import Icon12 from "@/assets/images/icon-12.png";
import dayjs from "dayjs";
defineOptions({
  name: "ProcessDetail"
});
const props = defineProps<{
  formInline: any;
}>();
const emit = defineEmits(["close"]);
const rowData = ref(props.formInline);
onMounted(() => {
  console.log("ProcessDetail====onMounted", rowData.value);
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
    date: dayjs(props.formInline.startedAt).format("YYYY-MM-DD"),
    time: dayjs(props.formInline.startedAt).format("hh:mm:ss")
  };
});
const close = () => {
  emit("close");
};
</script>
<template>
  <div class="process-detail">
    <div class="appointment-detail-header flex items-center justify-between">
      <div class="flex ml-4 items-center">
        <img :src="rowData.icon" alt="" class="w-15 h-15" />
        <div class="flex flex-col ml-4">
          <span>{{ rowData.weekday }} {{ rowData.date }}</span>
          <span>{{ rowData.time }}</span>
        </div>
      </div>
      <div class="flex ml-4 gap-4">
        <div class="flex flex-col items-end justify-center bg-color-1">
          <span>人数</span>
          <span>{{ rowData.dinerCount }}</span>
        </div>
        <div class="flex flex-col items-end justify-center bg-color-grey-1">
          <span>{{ rowData.tableZone.name }}</span>
          <span>{{ rowData.tableNumbers?.join(",") }}</span>
        </div>
        <!-- <div class="flex flex-col items-end justify-center bg-color-2 ml-10">
          <el-button :icon="ArrowRightBold" />
        </div> -->
      </div>
    </div>
    <div class="appointment-detail-top ml-4 mt-4 mb-6">
      <div class="flex flex-col justify-start">
        <div class="flex items-center">
          <el-icon><Comment /></el-icon>
          <span class="ml-2">{{ rowData.remark || "--" }}</span>
        </div>
        <div class="flex items-center ml-6 font-bold text-[#000]">
          <span>{{ rowData.allergen || "--" }}</span>
        </div>
      </div>
    </div>
    <div class="process-detail-bottom flex flex-col">
      <div class="flex flex-col mt-4">
        <span>结束</span>
        <span>11/12/2024 21:15 商家端</span>
      </div>
      <div class="flex flex-col mt-4">
        <span>完成付款</span>
        <span>11/12/2024 21:15 商家端</span>
      </div>
      <div class="flex flex-col mt-4">
        <span>发送账单</span>
        <span>11/12/2024 21:15 商家端</span>
      </div>
      <div class="flex flex-col mt-4">
        <span>入座</span>
        <span>11/12/2024 21:15 商家端</span>
      </div>
      <div class="flex flex-col mt-4">
        <span>到店等待</span>
        <span>11/12/2024 21:15 商家端</span>
      </div>
      <div class="flex flex-col mt-4">
        <span>桌台22</span>
        <span>11/12/2024 21:15 商家端</span>
      </div>
      <div class="flex flex-col mt-4">
        <span>预约确定</span>
        <span>11/12/2024 21:15 商家端</span>
      </div>
      <div class="flex flex-col mt-4">
        <span>预约生产</span>
        <span>11/12/2024 21:15 商家端</span>
      </div>
    </div>
    <div class="flex justify-between mt-20 gap-4 w-5/10 mx-auto">
      <el-button size="large" class="w-full" @click="close">关闭</el-button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.process-detail {
  width: 100%;
  height: 100%;
  .process-detail-bottom {
    background-color: #515151;
    border-radius: 5px;
    padding: 10px 20px;
    color: #fff;
    width: 95%;
    margin: auto;
    font-size: 16px;
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
