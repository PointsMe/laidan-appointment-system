import editForm from "../form.vue";
import { message } from "@/utils/message";
import { transformI18n } from "@/plugins/i18n";
import { addDialog, closeDialog } from "@/components/ReDialog";
import { ElMessageBox } from "element-plus";
import { deviceDetection } from "@pureadmin/utils";
import { getEmployeeList, deleteEmployeeApi } from "@/api/user";
import { reactive, ref, onMounted, h, toRaw } from "vue";

export function useDialog() {
  const form = reactive({
    username: ""
  });
  const currentPage = ref(1);
  const currentSize = ref(10);
  const curRow = ref();
  const formRef = ref();
  const dataList = ref([]);
  const loading = ref(true);

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
    loading.value = true;
    const { data } = await getEmployeeList({
      ...toRaw(form),
      page: currentPage.value,
      size: currentSize.value,
      kind: 101
    });
    dataList.value = data.list;
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
    console.log("openDialog==>", row);
    addDialog({
      title: ``,
      props: {
        formInline: {
          id: row ? row?.id : ""
        }
      },
      class: "reservation-form-container-dialog", // 自定义弹窗类名
      width: "25%",
      draggable: true,
      fullscreen: deviceDetection(),
      fullscreenIcon: true,
      closeOnClickModal: false,
      footerButtons: [
        {
          label: "关闭",
          size: "default",
          type: "info",
          btnClick: ({ dialog: { options, index }, button }) => {
            console.log(options, index, button);
            closeDialog(options, index);
          }
        },
        {
          label: "保存",
          size: "default",
          type: "primary",
          btnClick: ({ dialog: { options, index }, button }) => {
            console.log(options, index, button);
            closeDialog(options, index);
          }
        }
      ],
      contentRenderer: () => h(editForm, { ref: formRef, formInline: null })
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
  onMounted(async () => {
    onSearch();
  });

  return {
    form,
    curRow,
    loading,
    rowStyle,
    dataList,
    onSearch,
    resetForm,
    openDialog,
    deleteEmployee,
    transformI18n,
    handleSizeChange,
    handleCurrentChange,
    handleSelectionChange
  };
}
