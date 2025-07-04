<script setup lang="ts">
import { ref, h } from "vue";
import { ElInput, ElSelect } from "element-plus";
const tableRef = ref();
const tableData = [
  {
    date: "12:00",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "12:00",
    name: "Jack",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "12:00",
    name: "Dick",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "12:00",
    name: "Harry",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "12:00",
    name: "Sam",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "12:00",
    name: "Lucy",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "12:00",
    name: "Mary",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "12:00",
    name: "Mike",
    address: "No. 189, Grove St, Los Angeles"
  }
];
const multipleSelection = ref([]);
const toggleSelection = (rows?: any) => {
  const { toggleRowSelection, clearSelection } = tableRef.value.getTableRef();
  if (rows) {
    rows.forEach(row => {
      toggleRowSelection(row, undefined);
    });
  } else {
    clearSelection();
  }
};
const handleSelectionChange = val => {
  multipleSelection.value = val;
};

const columns: TableColumnList = [
  {
    type: "selection",
    align: "left"
  },
  {
    label: "时间",
    prop: "date"
  },
  {
    label: "状态",
    prop: "address",
    minWidth: 90,
    cellRenderer: (scope: any) =>
      h(ElInput, {
        class: "w-100%",
        size: "small",
        onChange: () => onChange(scope as any)
      })
  },
  {
    label: "预约量",
    prop: "address",
    cellRenderer: (scope: any) =>
      h(ElInput, {
        class: "w-100%",
        size: "small",
        onChange: () => onChange(scope as any)
      })
  },
  {
    label: "预约人数\n最小限度",
    prop: "address",
    cellRenderer: (scope: any) =>
      h(ElInput, {
        class: "w-100%",
        size: "small",
        onChange: () => onChange(scope as any)
      })
  },
  {
    label: "预约人数\n最大值",
    prop: "address",
    cellRenderer: (scope: any) =>
      h(ElInput, {
        class: "w-100%",
        size: "small",
        onChange: () => onChange(scope as any)
      })
  },
  {
    label: "用餐时长",
    prop: "address",
    cellRenderer: (scope: any) =>
      h(ElSelect, {
        class: "w-100%",
        size: "small",
        placeholder: "请选择",
        optionsData: [
          {
            label: "1小时",
            value: "1"
          },
          {
            label: "2小时",
            value: "2"
          },
          {
            label: "3小时",
            value: "3"
          }
        ],
        onChange: () => onChange(scope as any)
      })
  }
];
</script>

<template>
  <div>
    <pure-table
      ref="tableRef"
      :data="tableData"
      :columns="columns"
      @selection-change="handleSelectionChange"
    />
    <!-- <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData[1], tableData[2]])">
        Toggle selection status of second and third rows
      </el-button>
      <el-button @click="toggleSelection()">Clear selection</el-button>
    </div> -->
  </div>
</template>
