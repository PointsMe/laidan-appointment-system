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
    label-width="120px"
  >
    <el-row>
      <el-col :span="24">
        <el-form-item label="特殊日期标题" prop="title">
          <el-input
            v-model="newFormInline.title"
            clearable
            placeholder="请输入特殊日期标题"
          />
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="特殊日期" prop="specialDate">
          <el-date-picker
            v-model="newFormInline.specialDate"
            type="date"
            placeholder="请选择特殊日期"
          />
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>
