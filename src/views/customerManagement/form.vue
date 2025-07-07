<script setup lang="ts">
import { ref, onMounted } from "vue";
import { formRules } from "./utils/rule";
import { FormProps } from "./utils/types";
import { selectorShop } from "@/api/user";
import AllCountryView from "@/components/AllCountryView.vue";
import {
  CaretRight,
  CircleCheckFilled,
  User,
  Message,
  Iphone,
  Position
} from "@element-plus/icons-vue";

const props = withDefaults(defineProps<FormProps>(), {
  formInline: () => ({
    shopIds: "",
    username: "",
    password: "",
    mobile: "",
    email: ""
  })
});
const mobile_type = ref("+86");
const shopList = ref([]);
const ruleFormRef = ref();
const newFormInline = ref(props.formInline);

function getRef() {
  return {
    ...ruleFormRef.value,
    mobile_type: mobile_type.value
  };
}
const changeCountry = (e: string) => {
  console.log(e);
  mobile_type.value = e;
};
const getCountryList = async () => {
  const res = await selectorShop({});
  if (res) {
    shopList.value = res.data;
  }
};

onMounted(() => {
  getCountryList();
});
defineExpose({ getRef });
</script>

<template>
  <div class="container-detail-customer">
    <div
      class="flex items-center justify-between pb-4 border-b border-black-100"
    >
      <h3 class="text-2xl text-black-500">Valesia</h3>
    </div>
    <el-row :gutter="20">
      <el-col :span="18">
        <div>
          <div class="text-lg text-black-500 mt-4">
            对该客人进行备注（私人）
          </div>
          <el-input type="textarea" :rows="4" />
        </div>
        <div class="flex items-center justify-between mt-4 mb-4">
          <div class="flex items-center flex-start">
            <span class="text-lg text-black-500">最后一次评价</span>
          </div>
          <div class="flex items-center flex-end">
            <span class="text-lg text-black-500">查看以往所有评价</span>
            <el-icon><CaretRight /></el-icon>
          </div>
        </div>
        <div class="flex items-center justify-between mt-4 w-7/8 mx-auto">
          <div class="flex items-center flex-col">
            <img src="@/assets/images/low.png" alt="" />
            <span class="text-lg text-black-500">整体体验</span>
          </div>
          <div class="flex items-center flex-col">
            <img src="@/assets/images/low.png" alt="" />
            <span class="text-lg text-black-500">整体体验</span>
          </div>
          <div class="flex items-center flex-col">
            <img src="@/assets/images/low.png" alt="" />
            <span class="text-lg text-black-500">整体体验</span>
          </div>
          <div class="flex items-center flex-col">
            <img src="@/assets/images/low.png" alt="" />
            <span class="text-lg text-black-500">整体体验</span>
          </div>
          <div class="flex items-center flex-col">
            <img src="@/assets/images/low.png" alt="" />
            <span class="text-lg text-black-500">整体体验</span>
          </div>
        </div>
        <div class="text-lg text-black-500 mt-10">
          最后一次光顾：<span class="text-black-500 font-bold">30天前</span>
        </div>
        <div class="flex items-center justify-between mt-4">
          <div class="flex flex-col bg-last-visit mr-10">
            <span class="text-lg text-black-500">预约</span>
            <span class="text-lg text-black-500">20</span>
          </div>
          <div class="flex flex-col bg-last-visit mr-10">
            <span class="text-lg text-black-500">到店</span>
            <span class="text-lg text-black-500">20</span>
          </div>
          <div class="flex flex-col bg-last-visit mr-10">
            <span class="text-lg text-black-500">取消</span>
            <span class="text-lg text-black-500">20</span>
          </div>
          <div class="flex flex-col bg-last-visit">
            <span class="text-lg text-black-500">爽约</span>
            <span class="text-lg text-black-500">20</span>
          </div>
        </div>
        <div class="text-lg text-black-500 mt-10">历史预约记录</div>
        <div class="all-history-record">
          <div class="bg-current-one flex items-center justify-between">
            <div class="flex items-center w-1/2">
              <div
                class="flex items-center flex-col mr-10 bg-current-one-item ml-4"
              >
                <span>室内</span>
                <span>20</span>
              </div>
              <div class="flex items-center flex-col mr-60 w-full">
                <span class="text-lg text-black-500">人数</span>
                <span class="text-2xl text-black-500 font-bold">2</span>
              </div>
              <div class="flex items-center flex-col w-full">
                <span class="text-lg text-black-500"> 周五 11/12/2024 </span>
                <span class="text-lg text-black-500 font-bold"
                  >19:00 - 21:30</span
                >
                <span class="text-lg text-black-500">线上预订</span>
              </div>
            </div>
            <div class="flex items-center flex-row gap-2 mr-10">
              <el-icon class="icon-f-i"><CircleCheckFilled /></el-icon>
              <span class="text-lg text-black-500">已完成</span>
            </div>
          </div>
          <div class="bg-current-one flex items-center justify-between">
            <div class="flex items-center w-1/2">
              <div
                class="flex items-center flex-col mr-10 bg-current-one-item ml-4"
              >
                <span>室内</span>
                <span>20</span>
              </div>
              <div class="flex items-center flex-col mr-60 w-full">
                <span class="text-lg text-black-500">人数</span>
                <span class="text-2xl text-black-500 font-bold">2</span>
              </div>
              <div class="flex items-center flex-col w-full">
                <span class="text-lg text-black-500"> 周五 11/12/2024 </span>
                <span class="text-lg text-black-500 font-bold"
                  >19:00 - 21:30</span
                >
                <span class="text-lg text-black-500">线上预订</span>
              </div>
            </div>
            <div class="flex items-center flex-row gap-2 mr-10">
              <el-icon class="icon-f-i"><CircleCheckFilled /></el-icon>
              <span class="text-lg text-black-500">已完成</span>
            </div>
          </div>
          <div class="bg-current-one flex items-center justify-between">
            <div class="flex items-center w-1/2">
              <div
                class="flex items-center flex-col mr-10 bg-current-one-item ml-4"
              >
                <span>室内</span>
                <span>20</span>
              </div>
              <div class="flex items-center flex-col mr-60 w-full">
                <span class="text-lg text-black-500">人数</span>
                <span class="text-2xl text-black-500 font-bold">2</span>
              </div>
              <div class="flex items-center flex-col w-full">
                <span class="text-lg text-black-500"> 周五 11/12/2024 </span>
                <span class="text-lg text-black-500 font-bold"
                  >19:00 - 21:30</span
                >
                <span class="text-lg text-black-500">线上预订</span>
              </div>
            </div>
            <div class="flex items-center flex-row gap-2 mr-10">
              <el-icon class="icon-f-i"><CircleCheckFilled /></el-icon>
              <span class="text-lg text-black-500">已完成</span>
            </div>
          </div>
          <div class="bg-current-one flex items-center justify-between">
            <div class="flex items-center w-1/2">
              <div
                class="flex items-center flex-col mr-10 bg-current-one-item ml-4"
              >
                <span>室内</span>
                <span>20</span>
              </div>
              <div class="flex items-center flex-col mr-60 w-full">
                <span class="text-lg text-black-500">人数</span>
                <span class="text-2xl text-black-500 font-bold">2</span>
              </div>
              <div class="flex items-center flex-col w-full">
                <span class="text-lg text-black-500"> 周五 11/12/2024 </span>
                <span class="text-lg text-black-500 font-bold"
                  >19:00 - 21:30</span
                >
                <span class="text-lg text-black-500">线上预订</span>
              </div>
            </div>
            <div class="flex items-center flex-row gap-2 mr-10">
              <el-icon class="icon-f-i"><CircleCheckFilled /></el-icon>
              <span class="text-lg text-black-500">已完成</span>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="pl-30 pr-10 mt-4">
          <div class="text-lg text-black-500 mt-4 mb-6">客人信息</div>
          <div class="flex items-center flex-row gap-2">
            <el-icon class="font-30"><User /></el-icon>
            <!-- <span class="text-lg text-black-500">Valesia</span> -->
            <el-input v-model="formInline.username" type="txt" />
          </div>
          <div class="flex items-center flex-row gap-2">
            <el-icon class="font-30"><Message /></el-icon>
            <span class="text-lg text-black-500">ValesiaGGG@gmail.com</span>
          </div>
          <div class="flex items-center flex-row gap-2">
            <el-icon class="font-30"><Iphone /></el-icon>
            <span class="text-lg text-black-500">325678900</span>
          </div>
          <div class="flex items-center flex-row gap-2">
            <el-icon class="font-30"><Position /></el-icon>
            <span class="text-lg text-black-500">ITALY</span>
          </div>
          <div class="flex items-center flex-row gap-2">
            <span class="text-lg text-black-500">注册日期</span>
            <span class="text-lg text-black-500">2024-01-01</span>
          </div>
          <div class="flex items-center flex-row gap-2">
            <span class="text-lg text-black-500">渠道</span>
            <span class="text-lg text-black-500">线上</span>
          </div>
          <div class="flex justify-between mt-4">
            <div class="flex flex-start">
              <el-button size="large" class="bg-btn-color-b" type="primary"
                >关闭</el-button
              >
            </div>
            <div class="flex flex-end">
              <el-button size="large" class="bg-btn-color-a" type="primary"
                >编辑</el-button
              >
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="flex items-center justify-end mt-4">
      <el-button size="large" class="bg-btn-color" type="primary"
        >加入黑名单</el-button
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-detail-customer {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .font-30 {
    font-size: 20px;
  }
  .bg-btn-color-b {
    background: #fff;
    color: #000;
    border: 1px solid #000;
    width: 120px;
  }
  .bg-btn-color-a {
    background: #72b9d3;
    color: #fff;
    border: none;
    width: 120px;
  }
  .bg-btn-color {
    background: #000000;
    border-radius: 5px;
    border: none;
    padding: 10px 40px;
    color: #fff;
  }
  .bg-last-visit {
    background: #989898;
    border-radius: 5px;
    padding: 10px 20px;
    width: 100%;
    height: 100%;
    color: #fff;
    > span:last-child {
      font-size: 30px;
      font-weight: bold;
      margin-top: 10px;
    }
  }
  .all-history-record {
    height: 300px;
    overflow-y: scroll;
    .bg-current-one {
      background: #f7f7f7;
      border-radius: 5px;
      // padding: 10px 20px;
      padding: 5px 0;
      margin-top: 5px;
      width: 100%;
      .icon-f-i {
        font-size: 25px;
        color: #005869;
      }
      .bg-current-one-item {
        background: #515151;
        border-radius: 5px;
        padding: 5px 10px;
        // width: 100%;
        height: 100%;
        color: #fff;
        > span:last-child {
          font-size: 30px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
