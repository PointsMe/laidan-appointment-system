<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { Iphone, Message } from "@element-plus/icons-vue";
import dayjs from "dayjs";
import { useAddAppointment } from "./hooks";
import { updateReservationApi } from "@/api/apis";
import { convertISOToTimezoneFormat } from "@/utils/time";
defineOptions({
  name: "ProcessForm"
});
const emit = defineEmits(["close"]);
const props = defineProps<{
  formInline: any;
}>();
const { tableZoneList, getTableZoneListFn } = useAddAppointment();
const rowData = ref(props.formInline);
const ZoneList = ref([]);
const formRef = ref();
const formRules = ref({
  name: [{ required: true, message: "请输入流程名称", trigger: "blur" }],
  description: [{ required: true, message: "请输入流程描述", trigger: "blur" }]
});
const close = () => {
  emit("close");
};
watch(
  () => tableZoneList.value,
  newVal => {
    ZoneList.value = newVal;
    console.log("ProcessForm====ZoneList", ZoneList.value);
  }
);
onMounted(() => {
  rowData.value = {
    ...props.formInline,
    weekday: dayjs(props.formInline.startedAt).format("dddd"),
    date: dayjs(props.formInline.startedAt).format("YYYY-MM-DD"),
    time: dayjs(props.formInline.startedAt).format("hh:mm:ss")
  };
  console.log("ProcessForm====rowData", rowData.value);
  getTableZoneListFn();
});
const save = () => {
  console.log("ProcessForm====save", rowData.value);
  const params = {
    id: rowData.value.id,
    customerId: rowData.value.customerId,
    startedAt: convertISOToTimezoneFormat(
      dayjs(`${rowData.value.date} ${rowData.value.time}`).toISOString()
    ),
    zoneId: rowData.value.tableZone.id,
    dinerCount:
      Number(rowData.value.adultCount) + Number(rowData.value.childCount),
    adultCount: Number(rowData.value.adultCount),
    childCount: Number(rowData.value.childCount),
    promoted: rowData.value.promoted,
    specialNeeds: {
      // "id": "tyui",
      allergen: rowData.value.allergen,
      exceptionalCase: rowData.value.exceptionalCase,
      childSeatCount: rowData.value.childSeatCount,
      disabledSeatCount: rowData.value.disabledSeatCount,
      otherRequirements: rowData.value.otherRequirements
    },
    diningPeriod: rowData.value.lunchActive
  };
  updateReservationApi(params).then(({ data }: any) => {
    console.log("ProcessForm====save", data);
    if (data.code === 200) {
      ElMessage.success("保存成功");
      close();
    } else {
      ElMessage.error("保存失败");
    }
  });
};
</script>
<template>
  <div class="process-form">
    <div class="process-form-header">
      <el-form
        ref="formRef"
        :model="rowData"
        :rules="formRules"
        label-width="120px"
        label-position="top"
      >
        <el-row :gutter="20">
          <el-col :span="10">
            <el-form-item label="">
              <el-date-picker
                v-model="rowData.date"
                type="date"
                placeholder="Pick a day"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="">
              <el-time-picker
                v-model="rowData.time"
                placeholder="Arbitrary time"
                format="HH:mm:ss"
                value-format="HH:mm:ss"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="">
              <el-select v-model="rowData.mealDuration" placeholder="Select">
                <el-option label="1h" value="1h" />
                <el-option label="1h30" value="1h30" />
                <el-option label="2h" value="2h" />
                <el-option label="2h30" value="2h30" />
                <el-option label="3h" value="3h" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="">
              <el-select v-model="rowData.tableZone.id" placeholder="Select">
                <el-option
                  v-for="item in ZoneList"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="大人">
              <el-input-number v-model="rowData.adultCount" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="小孩">
              <el-input-number v-model="rowData.childCount" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <div class="flex flex-col bg-color-2">
              <div class="text-2xl">{{ rowData.username }}</div>
              <div class="flex items-center mt-2 mb-4">
                <el-icon><Iphone /></el-icon>
                <span>{{ rowData.mobile }}</span>
                <el-icon class="ml-4"><Message /></el-icon>
                <span>{{ rowData.email }}</span>
              </div>
              <div>地区: {{ rowData.address }}</div>
            </div>
          </el-col>
          <el-col :span="24">
            <el-form-item label="备注(私人)">
              <el-input v-model="rowData.remark" type="textarea" :rows="4" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="告知最长用餐时间">
              <el-switch
                v-model="rowData.noticeMealDuration"
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
              <el-input v-model="rowData.allergen" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="特殊情况">
              <el-input v-model="rowData.exceptionalCase" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="请输入特殊需求(公开)">
              <el-input
                v-model="rowData.otherRequirements"
                type="textarea"
                :rows="4"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="来源">
              <el-select v-model="rowData.source" placeholder="Select">
                <el-option label="电话" value="1" />
                <el-option label="邮件" value="2" />
                <el-option label="网站" value="3" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="渠道">
              <el-select v-model="rowData.channel" placeholder="Select">
                <el-option label="微信" value="1" />
                <el-option label="电话" value="2" />
                <el-option label="邮件" value="3" />
                <el-option label="网站" value="4" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <div class="flex justify-between mt-4 gap-4 w-9/10 mx-auto">
              <el-button size="large" class="w-1/2" @click="close">
                关闭
              </el-button>
              <el-button
                type="primary"
                size="large"
                class="w-1/2 btn-color-1"
                @click="save"
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
