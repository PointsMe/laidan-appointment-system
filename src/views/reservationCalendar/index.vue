<script setup lang="ts">
import { ref, computed, nextTick, onMounted } from "vue";
import CurrentOne from "./currentOne.vue";
defineOptions({
  name: "ReservationCalendar"
});

const date = ref("");
const shortcuts = [
  {
    text: "Last week",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      return [start, end];
    }
  },
  {
    text: "Last month",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
      return [start, end];
    }
  },
  {
    text: "Last 3 months",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
      return [start, end];
    }
  }
];
</script>

<template>
  <div class="reservation-calendar">
    <div class="reservation-calendar-content">
      <div class="reservation-calendar-content-top-left mb-5">
        <el-date-picker
          v-model="date"
          type="daterange"
          unlink-panels
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
          :shortcuts="shortcuts"
          :size="size"
        />
      </div>
      <div class="reservation-calendar-content-top flex">
        <div class="flex-1">
          <span>周一</span>
        </div>
        <div class="flex-1">
          <span>周二</span>
        </div>
        <div class="flex-1">
          <span>周三</span>
        </div>
        <div class="flex-1">
          <span>周四</span>
        </div>
        <div class="flex-1">
          <span>周五</span>
        </div>
        <div class="flex-1">
          <span>周六</span>
        </div>
        <div class="flex-1">
          <span>周日</span>
        </div>
      </div>
      <div class="reservation-calendar-content-bottom">
        <div class="reservation-calendar-content-bottom-item flex">
          <div class="flex-1">
            <CurrentOne />
          </div>
          <div class="flex-1">
            <CurrentOne />
          </div>
          <div class="flex-1">
            <CurrentOne />
          </div>
          <div class="flex-1">
            <CurrentOne />
          </div>
          <div class="flex-1">
            <CurrentOne />
          </div>
          <div class="flex-1">
            <CurrentOne />
          </div>
          <div class="flex-1">
            <CurrentOne />
          </div>
        </div>
        <div class="reservation-calendar-content-bottom-item flex">
          <div class="flex-1">
            <CurrentOne />
          </div>
          <div class="flex-1">
            <CurrentOne />
          </div>
          <div class="flex-1">
            <CurrentOne />
          </div>
          <div class="flex-1">
            <CurrentOne />
          </div>
          <div class="flex-1">
            <CurrentOne />
          </div>
          <div class="flex-1">
            <CurrentOne />
          </div>
          <div class="flex-1">
            <CurrentOne />
          </div>
        </div>
        <div class="reservation-calendar-content-bottom-item flex">
          <div class="flex-1">
            <CurrentOne />
          </div>
          <div class="flex-1">
            <CurrentOne />
          </div>
          <div class="flex-1">
            <CurrentOne />
          </div>
          <div class="flex-1">
            <CurrentOne />
          </div>
          <div class="flex-1">
            <CurrentOne />
          </div>
          <div class="flex-1">
            <CurrentOne />
          </div>
          <div class="flex-1">
            <CurrentOne />
          </div>
        </div>
      </div>
      <div class="mt-10 flex justify-end">
        <div class="flex items-center gap-2 cursor-pointer bg-btn">
          <img src="@/assets/images/step.png" alt="" />
          <span>上一页</span>
        </div>
        <div class="flex items-center gap-2 cursor-pointer bg-btn ml-60">
          <span>下一页</span>
          <img src="@/assets/images/next.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.reservation-calendar {
  height: 100%;
  background-color: #fff;
  padding: 20px;
  &-content-bottom-item {
    margin-top: 15px;
  }
  .bg-btn {
    background-color: #72b9d3;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
  }
}
</style>
