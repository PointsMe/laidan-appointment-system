<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { Calendar, Avatar } from "@element-plus/icons-vue";
import dayjs from "dayjs";
import { useAddAppointment } from "./hooks";
import AllCountryView from "@/components/AllCountryView.vue";
import { convertISOToTimezoneFormat } from "@/utils/time";
import { createReservationApi } from "@/api/apis";
import { ElLoading, ElMessage } from "element-plus";
defineOptions({
  name: "AddAppointment"
});
const { getReservationTimeListFn, reservationTimeList } = useAddAppointment();
const emit = defineEmits(["close"]);
const step = ref(1);
const timeList = ref([]);
const country = ref("+86");
const form = ref({
  date: dayjs().format("YYYY-MM-DD"),
  adultCount: 1,
  childCount: 0,
  diningPeriod: 101,
  reservationZoneName: "",
  reservationTime: "",
  reservationZoneId: "",
  username: "",
  mobile: "",
  email: "",
  allergen: "",
  exceptionalCase: "",
  childSeatCount: "",
  disabledSeatCount: "",
  otherRequirements: ""
});
const rules = ref({
  username: [{ required: true, message: "请输入姓名", trigger: "blur" }],
  mobile: [{ required: true, message: "请输入手机号", trigger: "blur" }],
  email: [{ required: true, message: "请输入邮箱", trigger: "blur" }]
});
watch(
  () => reservationTimeList.value,
  (newVal, oldVal) => {
    console.log("reservationTimeList==>", newVal);
    timeList.value = newVal;
  },
  {
    immediate: true
  }
);
const handleClick = (data: any, item: any) => {
  console.log(data, item);
  if (!item.reservationed) {
    return false;
  }
  timeList.value = timeList.value.map((iv: any) => {
    if (iv.tableZone.id === data.tableZone.id) {
      iv.reservationZoneTimes = iv.reservationZoneTimes.map((ivv: any) => {
        if (ivv.reservationTime === item.reservationTime) {
          ivv.choosed = true;
          form.value.reservationZoneName = data.tableZone.name;
          form.value.reservationTime = ivv.reservationTime;
          form.value.reservationZoneId = data.tableZone.id;
        } else {
          ivv.choosed = false;
        }
        return ivv;
      });
    } else {
      iv.reservationZoneTimes = iv.reservationZoneTimes.map((ivv: any) => {
        ivv.choosed = false;
        return ivv;
      });
    }
    return iv;
  });
};
const handleDiningPeriodChange = (value: string) => {
  console.log("handleDiningPeriodChange==>", value);
  getReservationTimeListFn({
    diningPeriod: value
  });
};
const nextStep = () => {
  console.log("nextStep==>", form.value);
  if (form.value.reservationTime && form.value.reservationZoneId) {
    form.value = {
      ...form.value,
      weekDay: form.value.date
        ? ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][
            new Date(form.value.date).getDay()
          ]
        : ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][
            new Date().getDay()
          ]
    };
    step.value = 2;
  } else {
    ElMessage.error("请选择就餐时间!!!");
  }
};
const changeCountry = async (value: string) => {
  console.log("国家已切换==>", value);
  country.value = value;
};
const submitForm = async () => {
  console.log("submitForm==>", form.value);
  const date = `${dayjs(form.value.date).format("YYYY-MM-DD")} ${form.value.reservationTime}`;
  const date1 = dayjs(date);
  const date2 = convertISOToTimezoneFormat(date1);
  const loading = ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)"
  });
  const params = {
    // customerId: "",
    username: form.value.username,
    mobile: `${country.value.replace("+", "")}-${form.value.mobile}`,
    startedAt: date2,
    zoneId: form.value.reservationZoneId,
    dinerCount: Number(form.value.adultCount) + Number(form.value.childCount),
    adultCount: Number(form.value.adultCount),
    childCount: Number(form.value.childCount),
    // "tableIds": [
    //     "232173029940531202"
    // ],
    // promoted: form.value.promoted,
    specialNeeds: {
      // "id": "tyui",
      allergen: form.value.allergen,
      exceptionalCase: form.value.exceptionalCase,
      childSeatCount: form.value.childSeatCount,
      disabledSeatCount: form.value.disabledSeatCount,
      otherRequirements: form.value.otherRequirements
    },
    diningPeriod: form.value.diningPeriod
  };
  try {
    const res = await createReservationApi(params);
    if (res && res.code === 20000) {
      ElMessage.success("预约成功");
      loading.close();
      cancelForm();
    } else {
      ElMessage.error("预约失败");
      loading.close();
    }
  } catch (error) {
    loading.close();
  } finally {
    loading.close();
  }
};
const cancelForm = () => {
  emit("close");
};
onMounted(() => {
  getReservationTimeListFn({
    diningPeriod: form.value.diningPeriod
  });
});
</script>
<template>
  <div class="add-appointment">
    <div v-if="step === 1" class="add-appointment-step-1 flex">
      <div class="add-appointment-step-1-left flex-1">
        <div class="flex items-center mb-4">
          <span class="text-lg text-blue-600 mr-2">1.</span
          ><span class="text-lg">选择日期</span>
        </div>
        <div>
          <el-date-picker
            v-model="form.date"
            type="date"
            placeholder="选择日期"
            format="YYYY-MM-DD"
            value-format="YYYY-MM-DD"
          />
        </div>
        <div class="flex items-center mt-4">
          <span class="text-lg text-blue-600 mr-2">2.</span
          ><span class="text-lg">选择人数</span>
        </div>
        <div class="flex items-center mt-4">
          <span class="mr-2 text-lg">大人：</span>
          <el-input-number v-model="form.adultCount" :min="1" :max="10" />
        </div>
        <div class="flex items-center mt-4">
          <span class="mr-2 text-lg">小孩：</span>
          <el-input-number v-model="form.childCount" :min="0" :max="10" />
        </div>
        <div class="mb-4 mt-4">
          <span class="text-lg text-blue-600 mr-2">3.</span
          ><span class="text-lg">选择时段</span>
        </div>
        <div>
          <el-radio-group
            v-model="form.diningPeriod"
            fill="#6cf"
            @change="handleDiningPeriodChange"
          >
            <el-radio-button label="午餐" :value="101" />
            <el-radio-button label="晚餐" :value="102" />
          </el-radio-group>
        </div>
      </div>
      <div class="add-appointment-step-1-right flex-1">
        <div class="mb-4 mt-4">
          <span class="text-lg text-blue-600 mr-2">4.</span
          ><span class="text-lg">选择时间</span>
        </div>
        <div>
          <div v-for="item in timeList" :key="item.id" class="mb-4">
            <div>
              <span class="text-lg text-black-600 mr-2">{{
                item.tableZone.name
              }}</span>
            </div>
            <div class="flex items-center mb-4">
              <img
                src="@/assets/images/time-bg.jpg"
                alt=""
                class="w-[200px] h-[200px]"
              />
              <span class="ml-4"
                >描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</span
              >
            </div>
            <div class="flex flex-wrap times-bg-list">
              <span
                v-for="time in item.reservationZoneTimes"
                :key="time.id"
                :class="
                  time.reservationed
                    ? time.choosed
                      ? 'choosed-time'
                      : ''
                    : 'disabled-time'
                "
                @click="handleClick(item, time)"
                >{{ time.reservationTime }}</span
              >
            </div>
          </div>
        </div>
        <div class="flex justify-end mt-30">
          <img
            src="@/assets/images/icon-13.png"
            alt=""
            class="w-15 h-15"
            @click="nextStep"
          />
        </div>
      </div>
    </div>
    <div v-if="step === 2" class="add-appointment-step-2">
      <div class="step-2-top flex items-center justify-center">
        <el-icon class="icon-span"><Calendar /></el-icon>
        <span class="text-2xl ml-2 border-b-span"
          >{{ form.weekDay }} {{ form.date }}</span
        >
        <span class="text-2xl ml-2 border-b-span"
          >{{ form.diningPeriod === 101 ? "午餐" : "晚餐" }}
          {{ form.reservationTime }}</span
        >
      </div>
      <div class="step-2-center flex justify-center flex-col items-center">
        <span class="text-2xl">
          {{ form.reservationZoneName }}
          <label class="text-base text-red-500">(待选座)</label>
        </span>
        <span class="text-2xl">?</span>
        <el-icon class="icon-span"><Avatar /></el-icon>
        <span class="text-2xl"
          >{{ form.adultCount }}大人 {{ form.childCount }}儿童</span
        >
      </div>
      <div class="step-2-bottom">
        <el-form :model="form" label-position="top" :rules="rules">
          <el-form-item label="" prop="username">
            <el-input v-model="form.username" placeholder="请输入姓名" />
          </el-form-item>
          <el-form-item label="" prop="mobile">
            <el-input
              v-model="form.mobile"
              placeholder="请输入手机号"
              maxlength="11"
              type="number"
            >
              <template #prepend>
                <AllCountryView @changeCountry="changeCountry" />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="" prop="email">
            <el-input v-model="form.email" placeholder="请输入邮箱" />
          </el-form-item>
          <el-form-item label="过敏原（非必填）">
            <el-input v-model="form.allergen" placeholder="请输入特殊需求" />
          </el-form-item>
          <el-form-item label="特殊情况（非必填）">
            <el-input
              v-model="form.exceptionalCase"
              placeholder="请输入特殊需求"
            />
          </el-form-item>
          <el-form-item label="儿童座椅（非必填）">
            <el-input
              v-model="form.childSeatCount"
              type="text"
              placeholder="请输入特殊需求"
            />
          </el-form-item>
          <el-form-item label="残疾人座位（非必填）">
            <el-input
              v-model="form.disabledSeatCount"
              type="number"
              placeholder="请输入特殊需求"
            />
          </el-form-item>
          <el-form-item label="其他需求（非必填）">
            <el-input
              v-model="form.otherRequirements"
              type="textarea"
              placeholder="请输入特殊需求"
              rows="2"
            />
          </el-form-item>
          <el-form-item label="">
            <div class="flex w-full">
              <div class="flex-1">
                <el-button type="primary" class="cal-btn" @click="cancelForm"
                  >取消</el-button
                >
              </div>
              <div class="flex-1 text-right">
                <el-button type="primary" class="sure-btn" @click="submitForm"
                  >添加预约</el-button
                >
              </div>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div v-if="step === 3" class="add-appointment-step-3">
      <div class="step-3-top">
        <span>预约成功</span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.add-appointment {
  width: 100%;
  height: 100%;
  .times-bg-list {
    span {
      margin: 2px;
      padding: 4px 8px;
      border-radius: 4px;
      cursor: pointer;
      border: 1px solid #707070;
    }
    .choosed-time {
      background: #ec6e38 !important;
      color: #ffffff !important;
      border: none !important;
    }
    .disabled-time {
      background: #707070 !important;
      color: #ffffff !important;
      border: none !important;
      cursor: not-allowed;
    }
  }

  .add-appointment-step-2 {
    .step-2-top {
      padding: 40px 60px 40px 60px;
      .icon-span {
        font-size: 24px;
        color: #000;
      }
      .border-b-span {
        border-bottom: 4px solid #6cf;
        font-size: 24px;
        color: #000;
      }
    }
    .step-2-bottom {
      padding: 40px 60px 40px 60px;
      width: 500px;
      margin: 0 auto;
      .cal-btn {
        width: 150px;
        background-color: #fff;
        color: #000;
        border: 1px solid grey;
      }
      .sure-btn {
        width: 150px;
        background-color: #6cf;
        color: #fff;
      }
    }
    .step-2-center {
      padding: 20px 60px 40px 60px;
      > span:nth-child(1) {
        font-size: 24px;
        color: #000;
        margin-bottom: 20px;
      }
      > span:nth-child(2) {
        font-size: 30px;
        color: #fff;
        background-color: #6cf;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        margin-bottom: 40px;
      }
      .icon-span {
        font-size: 48px;
        color: #6cf;
      }
    }
  }
  .add-appointment-step-1 {
    .add-appointment-step-1-left {
      padding: 40px 60px 40px 60px;
      border-right: 1px solid grey;
    }
    .add-appointment-step-1-right {
      padding: 40px 60px 40px 60px;
    }
  }
}
</style>
