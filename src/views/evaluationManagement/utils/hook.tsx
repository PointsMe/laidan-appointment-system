import editForm from "../form.vue";
import replayForm from "../replayForm.vue";
import settingForm from "../settingForm.vue";
import { message } from "@/utils/message";
import { transformI18n } from "@/plugins/i18n";
import { addDialog } from "@/components/ReDialog";
import { addDrawer } from "@/components/ReDrawer";
import { ElMessageBox } from "element-plus";
// import type { FormItemProps } from "../utils/types";
import type { PaginationProps } from "@pureadmin/table";
import { deviceDetection } from "@pureadmin/utils";
import Low from "@/assets/images/low.png";
import { deleteEmployeeApi } from "@/api/user";
import { type Ref, reactive, ref, onMounted, h } from "vue";

export function useEvaluationManagement(treeRef: Ref) {
  const form = reactive({
    username: ""
  });
  const currentPage = ref(1);
  const currentSize = ref(10);
  const curRow = ref();
  const formRef = ref();
  const replayFormRef = ref();
  const settingFormRef = ref();
  const dataList = ref([]);
  const loading = ref(true);
  const isLinkage = ref(false);
  const treeSearchValue = ref();
  const isExpandAll = ref(false);
  const isSelectAll = ref(false);
  const pagination = reactive<PaginationProps>({
    total: 0,
    pageSize: 10,
    currentPage: 1,
    background: true
  });
  const columns: TableColumnList = [
    {
      label: "信息/详情",
      prop: "username",
      width: 200,
      cellRenderer: ({ row }) => (
        <div class="flex items-center flex-col">
          <span>{`30分钟前`}</span>
          <span class="text-lg text-black-300">{row.username}</span>
          <div class="flex items-center">
            <span>{`1评价`}</span>
            <span class="mx-2">|</span>
            <span>{`1光顾`}</span>
          </div>
        </div>
      )
    },
    {
      label: "整体评价",
      prop: "email",
      cellRenderer: () => (
        <div class="flex items-center flex-col">
          <img src={Low} alt="" class="w-10 h-10" />
        </div>
      )
    },
    {
      label: "操作",
      fixed: "right",
      width: 350,
      slot: "operation"
    }
  ];

  function handleSizeChange(val: number) {
    console.log(`${val} items per page`);
    currentSize.value = val;
    onSearch();
  }

  function handleCurrentChange(val: number) {
    console.log(`current page: ${val}`);
    currentPage.value = val;
    onSearch();
  }

  function handleSelectionChange(val) {
    console.log("handleSelectionChange", val);
  }
  async function onSearch() {
    // loading.value = true;
    // const { data } = await getEmployeeList({
    //   ...toRaw(form),
    //   page: currentPage.value,
    //   size: currentSize.value,
    //   kind: 101
    // });
    const data = {
      list: [
        {
          username: "张三",
          mobile: "13800138000",
          email: "123",
          id: 1
        },
        {
          username: "李四",
          mobile: "13800138001",
          email: "456",
          id: 2
        }
      ],
      total: 2,
      pageSize: 10,
      currentPage: 1
    };
    dataList.value = data.list;
    pagination.total = data.total;
    pagination.pageSize = data.pageSize;
    pagination.currentPage = data.currentPage;

    setTimeout(() => {
      loading.value = false;
    }, 500);
  }

  const resetForm = formEl => {
    if (!formEl) return;
    formEl.resetFields();
    onSearch();
  };
  function openDialog(row?: any) {
    console.log("openDialog==>111", row);
    function addLast(data) {
      addDialog({
        title: ``,
        props: {
          formInline: {
            id: data ? data?.id : ""
          }
        },
        width: "50%",
        draggable: true,
        fullscreen: deviceDetection(),
        fullscreenIcon: true,
        closeOnClickModal: false,
        contentRenderer: () => h(editForm, { ref: formRef, formInline: null }),
        beforeSure: (done, { options }) => {
          console.log("beforeSure", options);
          done();
        }
      });
    }
    if (row) {
      addLast(row);
      // const params = new FormData();
      // params.append("id", row?.id);
      // getEmployeeDetailApi(params).then(res => {
      //   if (res && res.data) {
      //     const { data } = res;
      //     addLast(data);
      //   }
      // });
    } else {
      addLast(null);
    }
  }
  function openReplyDialog(row?: any) {
    console.log("openReplyDialog==>111", row);
    addDialog({
      title: ``,
      props: {},
      width: "30%",
      draggable: true,
      fullscreen: deviceDetection(),
      fullscreenIcon: true,
      closeOnClickModal: false,
      contentRenderer: () => h(replayForm, { ref: replayFormRef }),
      beforeSure: (done, { options }) => {
        console.log("beforeSure", options);
        done();
      }
    });
  }
  function openSettingForm() {
    addDialog({
      title: ``,
      props: {},
      width: "30%",
      draggable: true,
      fullscreen: deviceDetection(),
      fullscreenIcon: true,
      closeOnClickModal: false,
      contentRenderer: () => h(settingForm, { ref: settingFormRef }),
      beforeSure: (done, { options }) => {
        console.log("beforeSure", options);
        done();
      }
    });
  }
  function onCloseOnClickModalClick() {
    addDrawer({
      title: "禁止通过点击modal关闭",
      closeOnClickModal: false,
      contentRenderer: () => (
        <div class="w-full h-full bg-red-500">
          <span>抽屉内容-禁止通过点击modal关闭</span>
        </div>
      )
    });
  }
  const deleteEmployee = (row: any) => {
    console.log(row);
    ElMessageBox.confirm(
      `确认要<strong>删除</strong><strong style='color:var(--el-color-primary)'>${row.username}</strong>吗?`,
      "系统提示",
      {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        dangerouslyUseHTMLString: true,
        draggable: true
      }
    )
      .then(() => {
        deleteEmployeeApi({ id: row.id }).then(res => {
          if (res) {
            message(`已删除${row.username}`, {
              type: "success"
            });
            onSearch(); // 刷新表格数据
          }
        });
      })
      .catch(() => {
        console.log("取消");
      });
  };
  /** 高亮当前权限选中行 */
  function rowStyle({ row: { id } }) {
    return {
      cursor: "pointer",
      background: id === curRow.value?.id ? "var(--el-fill-color-light)" : ""
    };
  }

  /** 菜单权限-保存 */
  function handleSave() {
    const { id, name } = curRow.value;
    // 根据用户 id 调用实际项目中菜单权限修改接口
    console.log(id, treeRef.value.getCheckedKeys());
    message(`角色名称为${name}的菜单权限修改成功`, {
      type: "success"
    });
  }

  /** 数据权限 可自行开发 */
  // function handleDatabase() {}

  const onQueryChanged = (query: string) => {
    treeRef.value!.filter(query);
  };

  const filterMethod = (query: string, node) => {
    return transformI18n(node.title)!.includes(query);
  };

  onMounted(async () => {
    onSearch();
  });

  return {
    form,
    curRow,
    loading,
    columns,
    rowStyle,
    dataList,
    isLinkage,
    pagination,
    isExpandAll,
    isSelectAll,
    treeSearchValue,
    // buttonClass,
    onSearch,
    resetForm,
    openDialog,
    openReplyDialog,
    openSettingForm,
    onCloseOnClickModalClick,
    deleteEmployee,
    handleSave,
    filterMethod,
    transformI18n,
    onQueryChanged,
    // handleDatabase,
    handleSizeChange,
    handleCurrentChange,
    handleSelectionChange
  };
}
