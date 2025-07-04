<script setup lang="ts">
import { ref, onMounted } from "vue";
import { formRules } from "./utils/rule";
import { FormProps } from "./utils/types";
import {
  ArrowRight,
  Calendar,
  Avatar,
  Message,
  Iphone,
  MapLocation
} from "@element-plus/icons-vue";
import { useRole } from "./utils/hook";

const { openReplyDialog } = useRole();

const props = withDefaults(defineProps<FormProps>(), {
  formInline: () => ({
    shopIds: "",
    username: "",
    password: "",
    mobile: "",
    email: ""
  })
});
const newFormInline = ref(props.formInline);
</script>

<template>
  <div class="visitor-record-detail w-full h-full p-10">
    <el-row :gutter="20">
      <el-col :span="17">
        <div class="visitor-record-detail-top">
          <el-row :gutter="20">
            <el-col :span="4">
              <div class="flex justify-between items-center">
                <div class="flex flex-col">
                  <span class="text-sm text-black-500">预约生成</span>
                  <span class="text-sm text-black-500"
                    >2025-07-04 10:00:00</span
                  >
                  <span class="text-sm text-black-500">GoogleMaps</span>
                </div>
                <div class="flex items-center">
                  <el-icon class="font-icon"><ArrowRight /></el-icon>
                </div>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="flex justify-between items-center">
                <div class="flex flex-col">
                  <span class="text-sm text-black-500">预约确认</span>
                  <span class="text-sm text-black-500"
                    >2025-07-04 10:00:00</span
                  >
                  <span class="text-sm text-black-500">商家端</span>
                </div>
                <div class="flex items-center">
                  <el-icon class="font-icon"><ArrowRight /></el-icon>
                </div>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="flex justify-between items-center">
                <div class="flex flex-col">
                  <span class="text-sm text-black-500">桌台22</span>
                  <span class="text-sm text-black-500"
                    >2025-07-04 10:00:00</span
                  >
                  <span class="text-sm text-black-500">商家端</span>
                </div>
                <div class="flex items-center">
                  <el-icon class="font-icon"><ArrowRight /></el-icon>
                </div>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="flex justify-between items-center">
                <div class="flex flex-col">
                  <span class="text-sm text-black-500">到店等待</span>
                  <span class="text-sm text-black-500"
                    >2025-07-04 10:00:00</span
                  >
                  <span class="text-sm text-black-500">商家端</span>
                </div>
                <div class="flex items-center">
                  <el-icon class="font-icon"><ArrowRight /></el-icon>
                </div>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="flex justify-between items-center">
                <div class="flex flex-col">
                  <span class="text-sm text-black-500">入座</span>
                  <span class="text-sm text-black-500"
                    >2025-07-04 10:00:00</span
                  >
                  <span class="text-sm text-black-500">商家端</span>
                </div>
                <div class="flex items-center">
                  <el-icon class="font-icon"><ArrowRight /></el-icon>
                </div>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="flex justify-between items-center">
                <div class="flex flex-col">
                  <span class="text-sm text-black-500">发送账单</span>
                  <span class="text-sm text-black-500"
                    >2025-07-04 10:00:00</span
                  >
                  <span class="text-sm text-black-500">商家端</span>
                </div>
                <div class="flex items-center">
                  <el-icon class="font-icon"><ArrowRight /></el-icon>
                </div>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="flex justify-between items-center">
                <div class="flex flex-col">
                  <span class="text-sm text-black-500">完成付款</span>
                  <span class="text-sm text-black-500"
                    >2025-07-04 10:00:00</span
                  >
                  <span class="text-sm text-black-500">商家端</span>
                </div>
                <div class="flex items-center">
                  <el-icon class="font-icon"><ArrowRight /></el-icon>
                </div>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="flex justify-between items-center">
                <div class="flex flex-col">
                  <span class="text-sm text-black-500">结束</span>
                  <span class="text-sm text-black-500"
                    >2025-07-04 10:00:00</span
                  >
                  <span class="text-sm text-black-500">商家端</span>
                </div>
                <div class="flex items-center">
                  <el-icon class="font-icon"><ArrowRight /></el-icon>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="2" />
      <el-col :span="5">
        <div class="visitor-record-detail-top-right">
          <div class="text-xl text-black-500 mb-4">访问记录</div>
          <div class="flex items-center gap-2 mb-2">
            <el-icon class="font-icon-i"><Calendar /></el-icon>
            <span>周五</span>
            <span>2025-07-04</span>
          </div>
          <div class="flex items-center gap-2 mb-2">
            <el-icon class="font-icon-i"><Calendar /></el-icon>
            <span>10:00:00</span>
          </div>
          <div class="flex items-center gap-2">
            <el-icon class="font-icon-i"><Avatar /></el-icon>
            <span>3人</span>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="17">
        <div class="visitor-record-detail-top-content flex justify-between">
          <div class="flex items-center gap-2 flex-col">
            <img src="@/assets/images/middle.png" alt="" />
            <span class="text-black-500">整体体验</span>
          </div>
          <div class="flex items-center gap-2 flex-col">
            <img src="@/assets/images/low.png" alt="" />
            <span class="text-black-500">菜品质量</span>
          </div>
          <div class="flex items-center gap-2 flex-col">
            <img src="@/assets/images/hight.png" alt="" />
            <span class="text-black-500">服务质量</span>
          </div>
          <div class="flex items-center gap-2 flex-col">
            <img src="@/assets/images/low.png" alt="" />
            <span class="text-black-500">环境卫生</span>
          </div>
          <div class="flex items-center gap-2 flex-col">
            <img src="@/assets/images/low.png" alt="" />
            <span class="text-black-500">是否推荐给朋友</span>
          </div>
        </div>
        <div class="visitor-record-detail-top-bottom">
          <div class="flex gap-2 flex-col mb-4 mt-10">
            <div class="flex items-center gap-4 text-2xl text-black-500">
              <span>顾客评价</span>
              <span>20/02/2025</span>
            </div>
            <div>
              我认为这家餐厅环境还可以但是菜难吃极了，服务人员态度还是不错的，但我绝对不会推荐给我的朋友。我认为这家餐厅环境还可以但是菜难吃极了，服务人员态度还是不错的，但我绝对不会推荐给我的朋友。我认为这家餐厅环境还可以但是菜难吃极了，服务人员态度还是不错的，但我绝对不会推荐给我的朋友。我认为这家餐厅环境还可以但是菜难吃极了，服务人员态度还是不错的，但我绝对不会推荐给我的朋友。我认为这家餐厅环境还可以但是菜难吃极了，服务人员态度还是不错的，但我绝对不会推荐给我的朋友。
            </div>
          </div>
        </div>
        <div class="visitor-record-detail-top-btn mt-10 flex justify-start">
          <el-button
            type="primary"
            class="w-40 btn-color"
            @click="openReplyDialog()"
          >
            回复
          </el-button>
        </div>
      </el-col>
      <el-col :span="2" />
      <el-col :span="5">
        <div class="visitor-record-detail-top-right-info">
          <div class="text-xl text-black-500 mb-4">客人信息</div>
          <div class="flex items-center gap-2 mb-2">
            <el-icon class="font-icon-i"><Avatar /></el-icon>
            <span>张三</span>
          </div>
          <div class="flex items-center gap-2 mb-2">
            <el-icon class="font-icon-i"><Message /></el-icon>
            <span>13800138000@gmail.com</span>
          </div>
          <div class="flex items-center gap-2 mb-2">
            <el-icon class="font-icon-i"><Iphone /></el-icon>
            <span>13800138000</span>
          </div>
          <div class="flex items-center gap-2 mb-2">
            <el-icon class="font-icon-i"><MapLocation /></el-icon>
            <span>北京市海淀区</span>
          </div>
        </div>
        <div class="visitor-record-detail-top-right-info-item">
          <div class="text-xl text-black-500 mb-4">最后一次光顾：8小时前</div>
          <div class="flex items-center gap-2 mb-2">
            <span class="text-black-500">预约次数</span>
            <span>10</span>
          </div>
          <div class="flex items-center gap-2 mb-2">
            <span>实际到店</span>
            <span>30</span>
          </div>
          <div class="flex items-center gap-2 mb-2">
            <span>取消</span>
            <span>2</span>
          </div>
          <div class="flex items-center gap-2 mb-2">
            <span>爽约</span>
            <span>1</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped lang="scss">
.visitor-record-detail {
  > .el-col {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &-top-btn {
    .btn-color {
      background-color: #72b9d3;
      color: #fff;
    }
  }
  &-top-bottom {
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 30px;
  }
  &-top-right-info-item {
    // padding: 30px 0;
  }
  &-top-right-info {
    padding: 30px 0;
  }
  &-top-right {
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 30px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  &-top-content {
    border-bottom: 1px solid #e5e5e5;
    padding: 30px 0;
    font-size: 20px;
  }
  &-top {
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 30px;
    .el-col {
      padding: 0 20px 20px 0;
    }
  }
  .font-icon {
    font-size: 40px;
    color: #cecece;
  }
  .font-icon-i {
    font-size: 20px;
    color: #cecece;
  }
}
</style>
