import dayjs from "dayjs";
import editForm from "../form.vue";
import { message } from "@/utils/message";
import { transformI18n } from "@/plugins/i18n";
import { addDialog } from "@/components/ReDialog";
import { ElMessageBox } from "element-plus";
// import type { FormItemProps } from "../utils/types";
import type { PaginationProps } from "@pureadmin/table";
import { deviceDetection } from "@pureadmin/utils";
import {
  getEmployeeList,
  addEmployeeApi,
  getEmployeeDetailApi,
  updateEmployeeApi,
  deleteEmployeeApi
} from "@/api/user";
import { type Ref, reactive, ref, onMounted, h, toRaw } from "vue";

export function useRole(treeRef: Ref) {
  const form = reactive({
    username: "",
    userType: 1
  });
  const currentPage = ref(1);
  const currentSize = ref(10);
  const curRow = ref();
  const formRef = ref();
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
      label: "名字",
      prop: "username"
    },
    {
      label: "电话",
      prop: "cameraDeviceNumber"
    },
    {
      label: "邮箱",
      prop: "email"
    },
    {
      label: "渠道",
      prop: "mobile"
    },
    {
      label: "到店次数",
      prop: "email"
    },
    {
      label: "最后一次到店",
      prop: "createdAt",
      minWidth: 160,
      formatter: ({ createTime }) =>
        dayjs(createTime).format("YYYY-MM-DD HH:mm:ss")
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
    loading.value = true;
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
          cameraDeviceNumber: "13800138000",
          email: "zhangsan@example.com",
          mobile: "13800138000",
          id: 1,
          createdAt: "2021-01-01 12:00:00"
        },
        {
          username: "李四",
          cameraDeviceNumber: "13800138001",
          email: "lisi@example.com",
          mobile: "13800138001",
          id: 2,
          createdAt: "2021-01-01 12:00:00"
        }
      ],
      total: 0,
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
    console.log("openDialog==>", row);
    addDialog({
      title: ``,
      props: {
        formInline: {
          username: "",
          email: "",
          shopIds: "",
          mobile: "",
          id: ""
        }
      },
      hideFooter: true,
      width: "80%",
      draggable: true,
      fullscreen: deviceDetection(),
      fullscreenIcon: true,
      closeOnClickModal: false,
      contentRenderer: () => h(editForm, { ref: formRef, formInline: null }),
      beforeSure: (done, { options }) => {
        const FormRef = formRef.value.getRef();
        const curData = options.props.formInline;
        function chores() {
          message(`您${title}了员工名称为${curData.username}的这条数据`, {
            type: "success"
          });
          done(); // 关闭弹框
          onSearch(); // 刷新表格数据
        }
        FormRef.validate(valid => {
          if (valid) {
            console.log("curData", curData);
            // 表单规则校验通过
            if (title === "新增") {
              // 实际开发先调用新增接口，再进行下面操作
              // addEmployeeApi({
              //   scope: 102,
              //   username: curData.username,
              //   email: curData.email,
              //   enabled: true,
              //   password: curData.password,
              //   shopIds: [curData.shopIds],
              //   mobile: `${FormRef.mobile_type.replace("+", "")}-${curData.mobile}`,
              //   kind: 101
              // }).then(res_1 => {
              //   if (res_1) {
              //     chores();
              //   }
              // });
            } else {
              // 实际开发先调用修改接口，再进行下面操作
              // updateEmployeeApi({
              //   id: data?.id,
              //   scope: 102,
              //   username: curData.username,
              //   email: curData.email,
              //   enabled: true,
              //   mobile: `${FormRef.mobile_type.replace("+", "")}-${curData.mobile}`,
              //   password: curData.password,
              //   shopIds: [curData.shopIds],
              //   kind: 101
              // }).then(res_2 => {
              //   if (res_2) {
              //     chores();
              //   }
              // });
            }
          }
        });
      }
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
