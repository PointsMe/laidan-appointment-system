<script setup lang="ts">
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  phone: "",
  question: ""
});
const checkList = ref([]);
const handleChange = (val: string[]) => {
  console.log(val);
  checkList.value = val;
};
</script>
<template>
  <div class="setting-form">
    <div class="setting-form-content">
      <div class="setting-form-content-item">
        <div class="setting-form-content-item-title flex flex-col mb-4">
          <span class="text-2xl text-black-500">设置评价问题</span>
          <span class="text-lg text-black-300">整体体验感怎么样？</span>
        </div>
        <div class="setting-form-content-item-content">
          <el-checkbox-group
            v-model="checkList"
            class="flex flex-col"
            @change="handleChange"
          >
            <el-checkbox
              class="w-full w-full-color-1 pl-2"
              label="价格/质量怎么样？"
              value="1"
            />
            <el-checkbox
              class="w-full w-full-color-2 pl-2"
              label="菜品怎么样？"
              value="2"
            />
            <el-checkbox
              class="w-full w-full-color-3 pl-2"
              label="菜单怎么样？"
              value="3"
            />
            <el-checkbox
              class="w-full w-full-color-4 pl-2"
              label="关红酒单怎么样？"
              value="4"
            />
          </el-checkbox-group>
          <el-input
            v-if="checkList.includes('4')"
            v-model="form.name"
            placeholder="请输入评价问题"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.setting-form {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>
