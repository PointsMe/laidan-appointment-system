<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  ArrowLeftBold,
  ArrowRightBold,
  ArrowDownBold,
  ChatDotRound,
  Edit,
  Share,
  Delete,
  Select,
  KnifeFork,
  PhoneFilled,
  View
} from "@element-plus/icons-vue";
import CurrentOneView from "./CUrrentOneView.vue";
import { getReservationHomePageList } from "@/api/apis";
import { ReservationStatus } from "@/config/enum";
defineOptions({
  name: "TabStatusView"
});
const tabListData = ref([]);
const activeNames = ref(["1"]);
const handleChange = (val: CollapseModelValue) => {
  console.log(val);
};
const activeNamesTime = ref(["1"]);
const handleChangeTime = (val: CollapseModelValue) => {
  console.log(val);
};
const getTableData = async () => {
  // const res = await getReservationHomePageList({
  //   diningPeriod: 101
  // });
  const res = await Promise.resolve({
    code: 20000,
    msg: "OK",
    data: {
      "101": {
        "00:01": [
          {
            id: "232275129905815554",
            createdAt: "2025-07-09T09:44:32+0000",
            customerId: "232129540175360002",
            source: null,
            state: 101,
            dinerCount: 2,
            adultCount: 1,
            childCount: 1,
            username: "juuu",
            mobile: "4fmA)QQlrs",
            remark: null,
            startedAt: "2025-07-09T16:01:54+0000",
            endedAt: "2025-07-09T17:31:54+0000",
            tableIds: null,
            tableNumbers: null,
            diningPeriod: 101,
            customer: { id: "232129540175360002", name: "表海燕" },
            tableZone: { id: "232156419157925889", name: "室外花园" }
          },
          {
            id: "232269986682478594",
            createdAt: "2025-07-09T08:24:43+0000",
            customerId: "232129540175360002",
            source: null,
            state: 101,
            dinerCount: 2,
            adultCount: 1,
            childCount: 1,
            username: "juuu",
            mobile: "4fmA)QQlrs",
            remark: null,
            startedAt: "2025-07-09T16:01:54+0000",
            endedAt: "2025-07-09T17:31:54+0000",
            tableIds: ["232173029940531202"],
            tableNumbers: ["0002"],
            diningPeriod: 101,
            customer: { id: "232129540175360002", name: "表海燕" },
            tableZone: { id: "232156419157925889", name: "室外花园" }
          },
          {
            id: "232269149161152513",
            createdAt: "2025-07-09T08:11:42+0000",
            customerId: "232129540175360002",
            source: null,
            state: 101,
            dinerCount: 2,
            adultCount: 1,
            childCount: 1,
            username: "juuu",
            mobile: "4fmA)QQlrs",
            remark: null,
            startedAt: "2025-07-09T16:01:54+0000",
            endedAt: "2025-07-09T17:31:54+0000",
            tableIds: ["232173029940531202"],
            tableNumbers: ["0002"],
            diningPeriod: 101,
            customer: { id: "232129540175360002", name: "表海燕" },
            tableZone: { id: "232156419157925889", name: "室外花园" }
          },
          {
            id: "232256127896924162",
            createdAt: "2025-07-09T04:49:36+0000",
            customerId: "232129540175360002",
            source: null,
            state: 101,
            dinerCount: 2,
            adultCount: 1,
            childCount: 1,
            username: "juuu",
            mobile: "4fmA)QQlrs",
            remark: null,
            startedAt: "2025-07-09T16:01:54+0000",
            endedAt: "2025-07-09T17:31:54+0000",
            tableIds: ["232173029940531202"],
            tableNumbers: ["0002"],
            diningPeriod: 101,
            customer: { id: "232129540175360002", name: "表海燕" },
            tableZone: { id: "232156419157925889", name: "室外花园" }
          }
        ]
      },
      "102": {
        "10:00": [
          {
            id: "232281003271602178",
            createdAt: "2025-07-09T11:15:43+0000",
            customerId: "232248240186519554",
            source: null,
            state: 102,
            dinerCount: 3,
            adultCount: 2,
            childCount: 1,
            username: "何总22",
            mobile: "86-18376612587",
            remark: null,
            startedAt: "2025-07-10T02:00:00+0000",
            endedAt: "2025-07-10T03:30:00+0000",
            tableIds: ["232173029940531202"],
            tableNumbers: ["0002"],
            diningPeriod: 101,
            customer: { id: "232248240186519554", name: "86-18376612587" },
            tableZone: { id: "232156419157925889", name: "室外花园" }
          }
        ]
      },
      "103": {
        "10:00": [
          {
            id: "232281003271602178",
            createdAt: "2025-07-09T11:15:43+0000",
            customerId: "232248240186519554",
            source: null,
            state: 103,
            dinerCount: 3,
            adultCount: 2,
            childCount: 1,
            username: "何总22",
            mobile: "86-18376612587",
            remark: null,
            startedAt: "2025-07-10T02:00:00+0000",
            endedAt: "2025-07-10T03:30:00+0000",
            tableIds: ["232173029940531202"],
            tableNumbers: ["0002"],
            diningPeriod: 101,
            customer: { id: "232248240186519554", name: "86-18376612587" },
            tableZone: { id: "232156419157925889", name: "室外花园" }
          }
        ]
      },
      "104": {
        "10:00": [
          {
            id: "232281003271602178",
            createdAt: "2025-07-09T11:15:43+0000",
            customerId: "232248240186519554",
            source: null,
            state: 104,
            dinerCount: 3,
            adultCount: 2,
            childCount: 1,
            username: "何总22",
            mobile: "86-18376612587",
            remark: null,
            startedAt: "2025-07-10T02:00:00+0000",
            endedAt: "2025-07-10T03:30:00+0000",
            tableIds: ["232173029940531202"],
            tableNumbers: ["0002"],
            diningPeriod: 101,
            customer: { id: "232248240186519554", name: "86-18376612587" },
            tableZone: { id: "232156419157925889", name: "室外花园" }
          }
        ]
      },
      "105": {
        "10:00": [
          {
            id: "232281003271602178",
            createdAt: "2025-07-09T11:15:43+0000",
            customerId: "232248240186519554",
            source: null,
            state: 105,
            dinerCount: 3,
            adultCount: 2,
            childCount: 1,
            username: "何总22",
            mobile: "86-18376612587",
            remark: null,
            startedAt: "2025-07-10T02:00:00+0000",
            endedAt: "2025-07-10T03:30:00+0000",
            tableIds: ["232173029940531202"],
            tableNumbers: ["0002"],
            diningPeriod: 101,
            customer: { id: "232248240186519554", name: "86-18376612587" },
            tableZone: { id: "232156419157925889", name: "室外花园" }
          }
        ]
      },
      "106": {
        "10:00": [
          {
            id: "232281003271602178",
            createdAt: "2025-07-09T11:15:43+0000",
            customerId: "232248240186519554",
            source: null,
            state: 106,
            dinerCount: 3,
            adultCount: 2,
            childCount: 1,
            username: "何总22",
            mobile: "86-18376612587",
            remark: null,
            startedAt: "2025-07-10T02:00:00+0000",
            endedAt: "2025-07-10T03:30:00+0000",
            tableIds: ["232173029940531202"],
            tableNumbers: ["0002"],
            diningPeriod: 101,
            customer: { id: "232248240186519554", name: "86-18376612587" },
            tableZone: { id: "232156419157925889", name: "室外花园" }
          }
        ]
      },
      "107": {
        "10:00": [
          {
            id: "232281003271602178",
            createdAt: "2025-07-09T11:15:43+0000",
            customerId: "232248240186519554",
            source: null,
            state: 107,
            dinerCount: 3,
            adultCount: 2,
            childCount: 1,
            username: "何总22",
            mobile: "86-18376612587",
            remark: null,
            startedAt: "2025-07-10T02:00:00+0000",
            endedAt: "2025-07-10T03:30:00+0000",
            tableIds: ["232173029940531202"],
            tableNumbers: ["0002"],
            diningPeriod: 101,
            customer: { id: "232248240186519554", name: "86-18376612587" },
            tableZone: { id: "232156419157925889", name: "室外花园" }
          },
          {
            id: "232281003271602178",
            createdAt: "2025-07-09T11:15:43+0000",
            customerId: "232248240186519554",
            source: null,
            state: 107,
            dinerCount: 3,
            adultCount: 2,
            childCount: 1,
            username: "何总22",
            mobile: "86-18376612587",
            remark: null,
            startedAt: "2025-07-10T02:00:00+0000",
            endedAt: "2025-07-10T03:30:00+0000",
            tableIds: ["232173029940531202"],
            tableNumbers: ["0002"],
            diningPeriod: 101,
            customer: { id: "232248240186519554", name: "86-18376612587" },
            tableZone: { id: "232156419157925889", name: "室外花园" }
          }
        ]
      },
      "108": {
        "10:00": [
          {
            id: "232281003271602178",
            createdAt: "2025-07-09T11:15:43+0000",
            customerId: "232248240186519554",
            source: null,
            state: 108,
            dinerCount: 3,
            adultCount: 2,
            childCount: 1,
            username: "何总22",
            mobile: "86-18376612587",
            remark: null,
            startedAt: "2025-07-10T02:00:00+0000",
            endedAt: "2025-07-10T03:30:00+0000",
            tableIds: ["232173029940531202"],
            tableNumbers: ["0002"],
            diningPeriod: 101,
            customer: { id: "232248240186519554", name: "86-18376612587" },
            tableZone: { id: "232156419157925889", name: "室外花园" }
          }
        ],
        "18:00": [
          {
            id: "232281003271602178",
            createdAt: "2025-07-09T11:15:43+0000",
            customerId: "232248240186519554",
            source: null,
            state: 108,
            dinerCount: 3,
            adultCount: 2,
            childCount: 1,
            username: "何总22",
            mobile: "86-18376612587",
            remark: null,
            startedAt: "2025-07-10T02:00:00+0000",
            endedAt: "2025-07-10T03:30:00+0000",
            tableIds: ["232173029940531202"],
            tableNumbers: ["0002"],
            diningPeriod: 101,
            customer: { id: "232248240186519554", name: "86-18376612587" },
            tableZone: { id: "232156419157925889", name: "室外花园" }
          },
          {
            id: "232281003271602178",
            createdAt: "2025-07-09T11:15:43+0000",
            customerId: "232248240186519554",
            source: null,
            state: 108,
            dinerCount: 3,
            adultCount: 2,
            childCount: 1,
            username: "何总22",
            mobile: "86-18376612587",
            remark: null,
            startedAt: "2025-07-10T02:00:00+0000",
            endedAt: "2025-07-10T03:30:00+0000",
            tableIds: ["232173029940531202"],
            tableNumbers: ["0002"],
            diningPeriod: 101,
            customer: { id: "232248240186519554", name: "86-18376612587" },
            tableZone: { id: "232156419157925889", name: "室外花园" }
          }
        ]
      }
    },
    errors: []
  });
  console.log(res);
  const arr = [];
  for (const key in res.data) {
    const item = {
      key: key,
      name: ReservationStatus[key],
      list: []
    };
    for (const key2 in res.data[key]) {
      const item2 = {
        key: key2,
        name: key2,
        list: res.data[key][key2]
      };
      item.list.push(item2);
    }
    arr.push(item);
  }
  const list = arr
    .filter(iv => ["105", "106", "107", "108"].includes(iv.key))
    .map(iv => iv.list)
    .flat(2)
    .map(iv => iv.list)
    .flat(2);
  const lastList = arr
    .filter(iv => !["105", "106", "107", "108"].includes(iv.key))
    .concat([
      {
        key: "105",
        name: ReservationStatus["105"],
        list: [
          {
            // key: "12:00",
            // name: "12:00",
            list: list
          }
        ]
      }
    ]);
  const arr2 = lastList.map(item => {
    const current = item.list.map(iv => iv.list).flat(2);
    const count = current.reduce((a, b) => a + b.dinerCount, 0);
    const tableCount = current.reduce(
      (a, b) => a + (b.tableNumbers?.length || 0),
      0
    );
    return {
      ...item,
      count,
      tableCount
    };
  });
  console.log(arr2);
  tabListData.value = arr2;
};
onMounted(() => {
  getTableData();
});
</script>

<template>
  <div class="tab-status-view">
    <el-collapse
      v-model="activeNames"
      class="collapse-item-bg"
      @change="handleChange"
    >
      <el-collapse-item
        v-for="item in tabListData"
        :key="item.key"
        :name="item.key"
      >
        <template #title="{ isActive }">
          <div class="flex items-center">
            <el-icon v-if="isActive" class="mr-4 ml-4"
              ><ArrowDownBold
            /></el-icon>
            <el-icon v-else class="mr-4 ml-4"><ArrowLeftBold /></el-icon>
            <span class="text-xl font-bold">{{ item.name }}</span>
            <el-icon class="header-icon">
              <Tickets />
            </el-icon>
          </div>
        </template>
        <template #icon="{ isActive }">
          <span class="icon-ele">
            {{ item.tableCount }}桌台 / {{ item.count }}座位
          </span>
        </template>
        <div v-if="item.key === '102'" class="content">
          <el-collapse
            v-model="activeNamesTime"
            class="bg-color-time-item"
            @change="handleChangeTime"
          >
            <el-collapse-item
              v-for="item2 in item.list"
              :key="item2.key"
              :name="item2.key"
            >
              <template #title="{ isActive }">
                <div class="flex items-center ml-6">
                  <span class="text-xl font-bold">{{ item2.name }}</span>
                </div>
              </template>
              <div class="content">
                <el-row :gutter="12">
                  <el-col v-for="item3 in item2.list" :key="item3.id" :span="4">
                    <div class="mt-4">
                      <CurrentOneView :data="item3" />
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div v-else class="content">
          <el-row :gutter="12">
            <el-col
              v-for="item2 in item.list.map(iv => iv.list).flat(2)"
              :key="item2.id"
              :span="4"
            >
              <div class="mt-4">
                <CurrentOneView :data="item2" />
              </div>
            </el-col>
          </el-row>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<style scoped lang="scss">
.tab-status-view {
  border-radius: 12px;
  margin-top: 12px;
  width: 100%;
  .collapse-item-bg {
    :deep(.el-collapse-item__header) {
      background-color: #515151;
      color: #fff;
    }
    .bg-color-time-item {
      :deep(.el-collapse-item__header) {
        background-color: #cccbce;
        color: #fff;
      }
    }
  }
}
</style>
