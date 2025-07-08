<script setup lang="ts">
import { ref, onMounted } from "vue";
import { formRules } from "./utils/rule";
import { FormProps } from "./utils/types";
import { selectorShop } from "@/api/user";
import AllCountryView from "@/components/AllCountryView.vue";

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
  <el-form
    ref="ruleFormRef"
    :model="newFormInline"
    :rules="formRules"
    label-width="82px"
    label-position="top"
  >
    <el-row>
      <el-col :span="24">
        <el-row class="border-b border-gray-200 pb-4">
          <el-col :span="6">
            <div class="flex flex-col">
              <span class="text-xl text-gray-500">用户</span>
              <span class="text-sm text-gray-500">用户基本信息</span>
            </div>
          </el-col>
          <el-col :span="18">
            <el-form-item label="角色" prop="role">
              <el-input
                v-model="newFormInline.role"
                clearable
                placeholder="请输入角色"
              />
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input
                v-model="newFormInline.email"
                clearable
                placeholder="请输入邮箱"
              />
            </el-form-item>
            <el-form-item label="角色与权限" prop="mobile">
              <el-radio-group
                v-model="newFormInline.role"
                class="flex flex-col items-start"
                style="align-items: flex-start"
              >
                <el-radio value="1">
                  <div class="flex items-center">
                    <span class="text-base text-gray-500">超级管理员</span>
                    <span class="text-sm text-gray-500">
                      (拥有所有功能权限，可以管理所有用户和权限)
                    </span>
                  </div>
                </el-radio>
                <el-radio value="2">
                  <div class="flex items-center">
                    <span class="text-base text-gray-500">管理员</span>
                    <span class="text-sm text-gray-500">
                      (拥有所有功能权限，可以管理所有用户和权限)
                    </span>
                  </div>
                </el-radio>
                <el-radio value="3">
                  <div class="flex items-center">
                    <span class="text-base text-gray-500">普通用户</span>
                    <span class="text-sm text-gray-500">
                      (拥有所有功能权限，可以管理所有用户和权限)
                    </span>
                  </div>
                </el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="新密码" prop="password">
              <el-input
                v-model="newFormInline.password"
                clearable
                placeholder="请输入新密码"
                type="password"
              />
            </el-form-item>
            <el-form-item label="有权限超出预约限制" prop="is_over_limit">
              <el-switch v-model="newFormInline.is_over_limit" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="24">
        <el-row class="mt-4">
          <el-col :span="6">
            <div class="flex flex-col">
              <span class="text-xl text-gray-500">状态</span>
            </div>
          </el-col>
          <el-col :span="18">
            <el-form-item label="" prop="is_over_limit">
              <el-switch v-model="newFormInline.is_over_limit" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-form>
</template>
