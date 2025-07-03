<script lang="ts" setup>
import {
  Comment,
  Iphone,
  Message,
  ArrowRightBold,
  Edit
} from "@element-plus/icons-vue";
defineOptions({
  name: "ProcessDetail"
});
</script>
<template>
  <div class="process-detail">
    <div class="appointment-detail-header flex items-center justify-between">
      <div class="flex ml-4 items-center">
        <img src="@/assets/images/icon-1.png" alt="" class="w-15 h-15" />
        <div class="flex flex-col ml-4">
          <span>周五 11/12/2024</span>
          <span>晚餐 19:30 - 22:00</span>
        </div>
      </div>
      <div class="flex ml-4 gap-4">
        <div class="flex flex-col items-end justify-center bg-color-1">
          <span>人数</span>
          <span>10</span>
        </div>
        <div class="flex flex-col items-end justify-center bg-color-grey-1">
          <span>室内</span>
          <span>20</span>
        </div>
        <div class="flex flex-col items-end justify-center bg-color-2 ml-10">
          <el-button :icon="ArrowRightBold" />
        </div>
      </div>
    </div>
    <div class="appointment-detail-top ml-4 mt-4 mb-6">
      <div class="flex items-center">
        <el-icon><Comment /></el-icon>
        <span>需要一个安静的角落座位，需要一个安静的角落座位。</span>
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
      <el-button size="large" class="w-full">关闭</el-button>
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
