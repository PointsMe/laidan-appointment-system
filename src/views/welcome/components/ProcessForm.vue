<script setup lang="ts">
import { ref } from "vue";
import { Iphone, Message } from "@element-plus/icons-vue";
defineOptions({
  name: "ProcessForm"
});
const form = ref({
  name: "",
  description: ""
});
const formRef = ref();
const formRules = ref({
  name: [{ required: true, message: "请输入流程名称", trigger: "blur" }],
  description: [{ required: true, message: "请输入流程描述", trigger: "blur" }]
});
</script>
<template>
  <div class="process-form">
    <div class="process-form-header">
      <el-form
        ref="formRef"
        :model="form"
        :rules="formRules"
        label-width="120px"
        label-position="top"
      >
        <el-row :gutter="20">
          <el-col :span="10">
            <el-form-item label="">
              <el-date-picker
                v-model="form.name"
                type="date"
                placeholder="Pick a day"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="">
              <el-time-picker
                v-model="form.name"
                placeholder="Arbitrary time"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="">
              <el-select v-model="form.name" placeholder="Select">
                <el-option label="Option 1" value="1" />
                <el-option label="Option 2" value="2" />
                <el-option label="Option 3" value="3" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="">
              <el-select v-model="form.name" placeholder="Select">
                <el-option label="Option 1" value="1" />
                <el-option label="Option 2" value="2" />
                <el-option label="Option 3" value="3" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="大人">
              <el-input-number v-model="form.name" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="小孩">
              <el-input-number v-model="form.name" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
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
          </el-col>
          <el-col :span="24">
            <el-form-item label="备注(私人)">
              <el-input v-model="form.name" type="textarea" :rows="4" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="告知最长用餐时间">
              <el-switch
                v-model="form.name"
                class="ml-2"
                style="
                  --el-switch-on-color: #13ce66;
                  --el-switch-off-color: #ff4949;
                "
              />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="过敏原">
              <el-input v-model="form.name" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="特殊情况">
              <el-select v-model="form.name" placeholder="Select">
                <el-option label="Option 1" value="1" />
                <el-option label="Option 2" value="2" />
                <el-option label="Option 3" value="3" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="备注(公开)">
              <el-input v-model="form.name" type="textarea" :rows="4" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="来源">
              <el-select v-model="form.name" placeholder="Select">
                <el-option label="Option 1" value="1" />
                <el-option label="Option 2" value="2" />
                <el-option label="Option 3" value="3" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="渠道">
              <el-select v-model="form.name" placeholder="Select">
                <el-option label="Option 1" value="1" />
                <el-option label="Option 2" value="2" />
                <el-option label="Option 3" value="3" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <div class="flex justify-between mt-4 gap-4 w-9/10 mx-auto">
              <el-button size="large" class="w-1/2">关闭</el-button>
              <el-button type="primary" size="large" class="w-1/2 btn-color-1"
                >保存</el-button
              >
            </div>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>
<style scoped lang="scss">
.process-form {
  width: 100%;
  height: 100%;
  .process-form-header {
    width: 95%;
    margin: auto;
    .bg-color-2 {
      background-color: #515151;
      border-radius: 5px;
      padding: 15px 20px;
      color: #fff;
      text-align: left;
      font-size: 16px;
      .border-b-i {
        border-bottom: 1px dashed #fff;
        padding-bottom: 10px;
      }
    }
  }
}
</style>
