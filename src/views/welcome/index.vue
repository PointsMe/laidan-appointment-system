<script setup lang="ts">
import { ref } from "vue";
import {
  Search,
  Calendar,
  Tickets,
  MapLocation,
  Refresh
} from "@element-plus/icons-vue";
import TabStatusView from "./components/TabStatusView.vue";
import { useAddAppointment } from "./components/hooks";
defineOptions({
  name: "Welcome"
});

const radio1 = ref("lunch");
const date = ref("");
const search = () => {
  console.log(date.value);
};
const { openDialog } = useAddAppointment();
const openAddAppointment = () => {
  openDialog();
};
</script>

<template>
  <div class="main">
    <div class="top-row">
      <div class="left-content">
        <el-radio-group v-model="radio1" fill="#6cf">
          <el-radio-button label="午餐" value="lunch" />
          <el-radio-button label="晚餐" value="dinner" />
        </el-radio-group>
        <el-date-picker
          v-model="date"
          class="ml-12 w-100"
          type="date"
          placeholder="Pick a day"
        />
        <el-button class="refresh-btn" :icon="Refresh" />
      </div>
      <div>
        <el-button type="primary" :icon="MapLocation">展开地图</el-button>
        <el-button :icon="Tickets">笔记本</el-button>
        <el-button :icon="Calendar" plain @click="openAddAppointment"
          >添加预约</el-button
        >
      </div>
    </div>
    <div class="bottom-row">
      <div class="top-content">
        <div class="left-content">
          <div class="title">
            <span class="radio-btn-span" />
            可容纳人数：
          </div>
          <div class="content">室内可容纳人数：</div>
          <div class="content">室外可容纳人数：</div>
          <div class="content">
            <span>双人桌：</span>
            <span>四人桌：</span>
            <span>六人桌：</span>
            <span>八人桌：</span>
            <span>十人桌：</span>
            <span>十二人桌：</span>
            <span>十四人桌：</span>
            <span>十六人桌：</span>
            <span>十八人桌：</span>
          </div>
        </div>
        <div class="right-content">
          <div class="title">已用</div>
          <div class="content">20桌台</div>
          <div class="content">88座位</div>
          <div class="content">
            <span>VIP: 10</span>
            <span>新客: 10</span>
            <span>老客: 10</span>
            <span>儿童: 10</span>
          </div>
        </div>
      </div>
    </div>
    <TabStatusView />
  </div>
</template>
<style scoped lang="scss">
.main {
  background-color: #fff;
  padding: 12px;
  .bottom-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    width: 100%;
    padding-bottom: 12px;
    .top-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .left-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .title {
          font-size: 16px;
          font-weight: bold;
          color: #000;
          display: flex;
          align-items: center;
          .radio-btn-span {
            display: inline-block;
            width: 16px;
            height: 16px;
            background-color: #6cf;
            border-radius: 50%;
            margin-right: 4px;
          }
        }
        .content {
          padding-top: 8px;
          font-size: 14px;
          color: #898989;
          padding-left: 16px;
        }
      }
      .right-content {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        .title {
          font-size: 16px;
          font-weight: bold;
          color: #000;
        }
        .content {
          padding-top: 8px;
          font-size: 14px;
          color: #898989;
        }
      }
    }
  }
  .top-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 12px;
    .left-content {
      display: flex;
      align-items: center;
    }
    .refresh-btn {
      margin-left: 12px;
    }
  }
}
</style>
