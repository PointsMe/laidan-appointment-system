<script setup lang="ts">
import { useDialog } from "./utils/hook";

defineOptions({
  name: "CurrentOne"
});
const { openDialog } = useDialog();
</script>
<template>
  <div class="current-one cursor-pointer" @click="openDialog">
    <div class="flex justify-end gap-2">
      <span class="text-xl text-black-500">13</span>
    </div>
    <div class="flex flex-col gap-2 border-bottom-1 pb-5 pt-5">
      <div class="flex items-center gap-2">
        <span class="w-5 h-5 bg-red-500 border-radius-50" />
        <span class="text-xl text-black-500">100座位可用</span>
      </div>
      <div class="flex items-center gap-2">
        <img class="w-5 h-5" src="@/assets/images/day.png" alt="" />
        <span>午餐</span>
        <span>10:00 - 12:00</span>
      </div>
      <div class="flex items-center gap-2">
        <span>30桌</span>/
        <span>100人</span>
        <span>已确认</span>
      </div>
    </div>
    <div class="flex flex-col gap-2 pt-5">
      <span class="text-xl text-black-500">100座位可用</span>
      <div class="flex items-center gap-2">
        <img class="w-5 h-5" src="@/assets/images/night.png" alt="" />
        <span>晚餐</span>
        <span>18:00 - 20:00</span>
      </div>
      <div class="flex items-center gap-2">
        <span>30桌</span>/
        <span>100人</span>
        <span>已确认</span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.current-one {
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 10px;
  border: 1px solid #e5e5e5;
  .border-bottom-1 {
    border-bottom: 1px solid #e5e5e5;
    .border-radius-50 {
      border-radius: 50%;
    }
  }
}
</style>
