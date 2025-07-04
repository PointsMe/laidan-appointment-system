<script setup lang="ts">
import { ref } from "vue";
defineOptions({
  name: "replayForm"
});

const form = ref({
  content: ""
});
</script>
<template>
  <div class="replay-form">
    <div class="replay-form-title flex items-center gap-2">
      <span class="text-2xl text-black-500">Valesia</span>
      <span>2025-07-04 10:00:00</span>
    </div>
    <div class="replay-form-content text-black-500 mt-4">
      我认为这家餐厅环境还可以但是菜难吃极了，服务人员态度还是不错的，但我绝对不会推荐给我的朋友。我认为这家餐厅环境还可以但是菜难吃极了，服务人员态度还是不错的，但我绝对不会推荐给我的朋友。我认为这家餐厅环境还可以但是菜难吃极了，服务人员态度还是不错的，但我绝对不会推荐给我的朋友。我认为这家餐厅环境还可以但是菜难吃极了，服务人员态度还是不错的，但我绝对不会推荐给我的朋友。我认为这家餐厅环境还可以但是菜难吃极了，服务人员态度还是不错的，但我绝对不会推荐给我的朋友。
    </div>
    <div class="replay-form-content-input mt-10 mb-10">
      <el-input v-model="form.content" type="textarea" :rows="10" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.replay-form {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>
