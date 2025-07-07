<script setup lang="ts">
import { ref, onMounted } from "vue";
import { formRules } from "./utils/rule";
import { FormProps } from "./utils/types";
import { selectorShop } from "@/api/user";
import AllCountryView from "@/components/AllCountryView.vue";
import EditorUpload from "./EditorUpload.vue";
import { UploadProps } from "element-plus";
import { ElMessage } from "element-plus";
import { Plus } from "@element-plus/icons-vue";

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

const beforeAvatarUpload: UploadProps["beforeUpload"] = rawFile => {
  if (rawFile.type !== "image/jpeg") {
    ElMessage.error("Avatar picture must be JPG format!");
    return false;
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error("Avatar picture size can not exceed 2MB!");
    return false;
  }
  return true;
};

const handleUpload = async (options: any) => {
  console.log("options", options);
  const params = new FormData();
  params.append("image", options.file);
  // const res = await uploadFileApi(params);
  // console.log("res", res);
  // if (res && res.code === 20000) {
  //   newFormInline.value.logoUrl = res.data.url;
  //   console.log("newFormInline.value.logoUrl", newFormInline.value.logoUrl);
  // }
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
    label-position="top"
    label-width="82px"
  >
    <el-row>
      <el-col :span="24">
        <el-form-item label="活动名称" prop="title">
          <el-input
            v-model="newFormInline.title"
            placeholder="请输入活动名称"
            clearable
          />
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="发送方式" prop="username">
          <el-select
            v-model="newFormInline.sendType"
            placeholder="请选择发送方式"
          >
            <el-option label="邮件" value="1" />
            <el-option label="短信" value="2" />
          </el-select>
        </el-form-item>
      </el-col>
      <!-- <el-col :span="12" class="upload-col-my">
        <el-form-item label="图片">
          <el-upload
            class="avatar-uploader"
            :show-file-list="false"
            :before-upload="beforeAvatarUpload"
            :http-request="handleUpload"
          >
            <img
              v-if="newFormInline.logoUrl"
              :src="newFormInline.logoUrl"
              class="avatar"
            />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </el-form-item>
      </el-col>
      <el-col :span="12" class="upload-col-my">
        <el-form-item label="缩略图">
          <el-upload
            class="avatar-uploader"
            :show-file-list="false"
            :before-upload="beforeAvatarUpload"
            :http-request="handleUpload"
          >
            <img
              v-if="newFormInline.logoUrl"
              :src="newFormInline.logoUrl"
              class="avatar"
            />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </el-form-item>
      </el-col> -->
      <el-col :span="24">
        <el-form-item label="寄件人" prop="sender">
          <el-input
            v-model="newFormInline.sender"
            clearable
            placeholder="请输入寄件人"
          />
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="寄件人邮件" prop="senderEmail">
          <el-input
            v-model="newFormInline.senderEmail"
            clearable
            placeholder="请输入寄件人邮件"
          />
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="主题" prop="subject">
          <el-input
            v-model="newFormInline.subject"
            clearable
            placeholder="请输入主题"
          />
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="提倡预约" prop="isAppointment">
          <el-input
            v-model="newFormInline.isAppointment"
            clearable
            placeholder="请输入提倡预约"
          />
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="仅发送给同意接受广告信息的客户" prop="isTop">
          <el-switch v-model="newFormInline.isTop" />
        </el-form-item>
      </el-col>
      <el-col :span="24">
        <el-form-item label="内容" prop="content">
          <EditorUpload />
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>
<style scoped lang="scss">
.upload-col-my {
  display: flex;
  justify-content: left;
  :deep(.avatar-uploader) {
    width: 178px !important;
    height: 178px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: border-color 0.3s;
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c8c8c;
      width: 178px;
      height: 178px;
    }
  }
}
</style>
