import { transformI18n } from "@/plugins/i18n";
import { addDialog, closeDialog } from "@/components/ReDialog";
import { deviceDetection } from "@pureadmin/utils";
import { ref, h, onMounted } from "vue";
import AddAppointment from "./AddAppointment.vue";
import AppointmentDetail from "./AppointmentDetail.vue";
import ProcessDetail from "./ProcessDetail.vue";
import ProcessForm from "./ProcessForm.vue";
import {
  reservationDetailApi,
  getTableZoneList,
  updateReservationStateApi,
  getReservationTimeListApi
} from "@/api/apis";
import { ElMessageBox, ElMessage } from "element-plus";
import ShowMobile from "./showMobile.vue";
export function useAddAppointment() {
  const AddAppointmentRef = ref();
  const AppointmentDetailRef = ref();
  const ProcessDetailRef = ref();
  const ProcessFormRef = ref();
  const tableZoneList = ref([]);
  const reservationTimeList = ref([]);
  const getTableZoneListFn = async () => {
    const res = await getTableZoneList();
    tableZoneList.value = res.data;
  };

  function openDialog(row?: any) {
    console.log("openDialogOne==>", row);
    addDialog({
      title: ``,
      props: {
        formInline: {}
      },
      width: "60%",
      draggable: true,
      fullscreen: deviceDetection(),
      fullscreenIcon: true,
      closeOnClickModal: false,
      hideFooter: true,
      contentRenderer: () =>
        h(AddAppointment, { ref: AddAppointmentRef, formInline: null })
      // beforeSure: (done, { options }) => {
      //   done(); // 关闭弹框
      // }
    });
  }
  function openDialogDetail(row?: any) {
    console.log("openDialogOne==>", row);
    reservationDetailApi({
      id: row?.id
    })
      .then(({ data }: any) => {
        console.log(data);
        addDialog({
          title: ``,
          props: {
            formInline: data
          },
          width: "30%",
          draggable: true,
          fullscreen: deviceDetection(),
          fullscreenIcon: true,
          closeOnClickModal: false,
          hideFooter: true,
          contentRenderer: () =>
            h(AppointmentDetail, {
              ref: AppointmentDetailRef,
              formInline: data
            })
        });
      })
      .catch(err => {});
  }
  function openDialogProcessDetail(row?: any) {
    console.log("openDialogOne==>", row);
    addDialog({
      title: ``,
      props: {
        formInline: {
          ...row
        }
      },
      width: "20%",
      draggable: true,
      fullscreen: deviceDetection(),
      fullscreenIcon: true,
      closeOnClickModal: false,
      hideFooter: true,
      contentRenderer: () =>
        h(ProcessDetail, { ref: ProcessDetailRef, formInline: row })
    });
  }
  function openDialogProcessForm(row?: any) {
    console.log("openDialogProcessForm==>", row);
    reservationDetailApi({
      id: row?.id
    })
      .then(res => {
        console.log(res);
        addDialog({
          title: ``,
          props: {
            formInline: {
              ...res.data
            }
          },
          width: "20%",
          draggable: true,
          fullscreen: deviceDetection(),
          fullscreenIcon: true,
          closeOnClickModal: false,
          hideFooter: true,
          contentRenderer: () =>
            h(ProcessForm, { ref: ProcessFormRef, formInline: res.data })
        });
      })
      .catch(err => {});
  }
  const updateReservationStateFn = (row: any) => {
    console.log("updateReservationStateFn==>", row);
    ElMessageBox.confirm("确定修改预约状态吗？", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning"
    }).then(() => {
      updateReservationStateApi({
        id: row.id,
        state: 102
      }).then(({ data }: any) => {
        console.log("updateReservationStateFn==>", data);
        if (data.code === 20000) {
          ElMessage.success("修改成功");
        } else {
          ElMessage.error("修改失败");
        }
      });
    });
  };
  const showMobileFn = (mobile: string) => {
    console.log("showMobileFn==>", mobile);
    addDialog({
      title: ``,
      props: {
        mobile: mobile
      },
      width: "15%",
      draggable: true,
      fullscreen: deviceDetection(),
      fullscreenIcon: true,
      closeOnClickModal: false,
      hideFooter: true,
      contentRenderer: () => h(ShowMobile, { mobile: mobile })
    });
  };
  const getReservationTimeListFn = async (data: any) => {
    const res: any = await getReservationTimeListApi(data);
    console.log("getReservationTimeListFn==>", res);
    const arr = (res.data || []).map((iv: any) => {
      iv.reservationZoneTimes = iv.reservationZoneTimes.map((ivv: any) => {
        return {
          ...ivv,
          choosed: false
        };
      });
      return iv;
    });
    reservationTimeList.value = arr;
  };
  return {
    openDialog,
    openDialogDetail,
    openDialogProcessDetail,
    openDialogProcessForm,
    transformI18n,
    tableZoneList,
    getTableZoneListFn,
    updateReservationStateFn,
    showMobileFn,
    getReservationTimeListFn,
    reservationTimeList
  };
}
