<script lang="ts" setup>
import {
  Comment,
  Iphone,
  Message,
  ArrowRightBold,
  Edit
} from "@element-plus/icons-vue";
defineOptions({
  name: "AppointmentDetail"
});
</script>
<template>
  <div class="appointment-detail">
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
    <div class="appointment-detail-bottom">
      <div class="flex flex-col bg-color-2">
        <div class="text-2xl">Sssss Ttttt</div>
        <div class="flex items-center mt-2 mb-4">
          <el-icon><Iphone /></el-icon>
          <span>39-00000000</span>
          <el-icon class="ml-4"><Message /></el-icon>
          <span>SSSSSSS@gmail.com</span>
        </div>
        <div>地区: 意大利</div>
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
      <el-button size="large" class="w-1/2">关闭</el-button>
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
