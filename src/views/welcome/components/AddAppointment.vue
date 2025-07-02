<script setup lang="ts">
import { ref } from "vue";
import { Calendar, Avatar } from "@element-plus/icons-vue";

defineOptions({
  name: "AddAppointment"
});

const date = ref("");
const value = ref(1);
const value2 = ref(1);
const radio1 = ref("lunch");
const form = ref({
  name: "",
  phone: "",
  email: "",
  message: ""
});
</script>
<template>
  <div class="add-appointment">
    <div style="display: none" class="add-appointment-step-1 flex items-center">
      <div class="add-appointment-step-1-left flex-1">
        <div class="flex items-center mb-4">
          <span class="text-lg text-blue-600 mr-2">1.</span
          ><span class="text-lg">选择日期</span>
        </div>
        <div>
          <el-date-picker v-model="date" type="date" placeholder="选择日期" />
        </div>
        <div class="flex items-center mt-4">
          <span class="text-lg text-blue-600 mr-2">2.</span
          ><span class="text-lg">选择人数</span>
        </div>
        <div class="flex items-center mt-4">
          <span class="mr-2 text-lg">大人：</span>
          <el-input-number v-model="value" :min="1" :max="10" />
        </div>
        <div class="flex items-center mt-4">
          <span class="mr-2 text-lg">小孩：</span>
          <el-input-number v-model="value" :min="1" :max="10" />
        </div>
      </div>
      <div class="add-appointment-step-1-right flex-1">
        <div class="mb-4">
          <span class="text-lg text-blue-600 mr-2">3.</span
          ><span class="text-lg">选择时间</span>
        </div>
        <div>
          <el-radio-group v-model="radio1" fill="#6cf">
            <el-radio-button label="午餐" value="lunch" />
            <el-radio-button label="晚餐" value="dinner" />
          </el-radio-group>
        </div>
        <div class="flex flex-wrap mt-4">
          <span
            v-for="item in 10"
            :key="item"
            class="mr-2 mt-2 text-lg border border-gray-300 rounded-md px-2 py-1"
            >19:00</span
          >
        </div>
      </div>
    </div>
    <div class="add-appointment-step-2">
      <div class="step-2-top flex items-center justify-center">
        <el-icon class="icon-span"><Calendar /></el-icon>
        <span class="text-2xl ml-2 border-b-span">周四 2025-07-01</span>
        <span class="text-2xl ml-2 border-b-span">晚餐 19:30 - 22:00</span>
      </div>
      <div class="step-2-center flex justify-center flex-col items-center">
        <span class="text-2xl">室内</span>
        <span class="text-2xl">15</span>
        <el-icon class="icon-span"><Avatar /></el-icon>
        <span class="text-2xl">2大人 1儿童</span>
      </div>
      <div class="step-2-bottom">
        <el-form :model="form">
          <el-form-item label="">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="">
            <el-input v-model="form.phone" />
          </el-form-item>
          <el-form-item label="">
            <el-input v-model="form.email" />
          </el-form-item>
          <el-form-item label="">
            <div class="flex w-full">
              <div class="flex-1">
                <el-button type="primary" class="cal-btn">取消</el-button>
              </div>
              <div class="flex-1 text-right">
                <el-button type="primary" class="sure-btn">添加预约</el-button>
              </div>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.add-appointment {
  width: 100%;
  height: 100%;
  .add-appointment-step-2 {
    .step-2-top {
      padding: 40px 60px 40px 60px;
      .icon-span {
        font-size: 24px;
        color: #000;
      }
      .border-b-span {
        border-bottom: 4px solid #6cf;
        font-size: 24px;
        color: #000;
      }
    }
    .step-2-bottom {
      padding: 40px 60px 40px 60px;
      width: 500px;
      margin: 0 auto;
      .cal-btn {
        width: 150px;
        background-color: #fff;
        color: #000;
        border: 1px solid grey;
      }
      .sure-btn {
        width: 150px;
        background-color: #6cf;
        color: #fff;
      }
    }
    .step-2-center {
      padding: 20px 60px 40px 60px;
      > span:nth-child(1) {
        font-size: 24px;
        color: #000;
        margin-bottom: 20px;
      }
      > span:nth-child(2) {
        font-size: 30px;
        color: #fff;
        background-color: #6cf;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        margin-bottom: 40px;
      }
      .icon-span {
        font-size: 48px;
        color: #6cf;
      }
    }
  }
  .add-appointment-step-1 {
    .add-appointment-step-1-left {
      padding: 40px 60px 40px 60px;
      border-right: 1px solid grey;
    }
    .add-appointment-step-1-right {
      padding: 40px 60px 40px 60px;
    }
  }
}
</style>
