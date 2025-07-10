import { transformI18n } from "@/plugins/i18n";
import { addDialog, closeDialog } from "@/components/ReDialog";
import { deviceDetection } from "@pureadmin/utils";
import { ref, h } from "vue";
import AddAppointment from "./AddAppointment.vue";
import AppointmentDetail from "./AppointmentDetail.vue";
import ProcessDetail from "./ProcessDetail.vue";
import ProcessForm from "./ProcessForm.vue";
import { reservationDetailApi } from "@/api/apis";

export function useAddAppointment() {
  const AddAppointmentRef = ref();
  const AppointmentDetailRef = ref();
  const ProcessDetailRef = ref();
  const ProcessFormRef = ref();
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
              formInline: data,
              close: () => closeDialog(AppointmentDetailRef.value, 0, null)
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
        formInline: {}
      },
      width: "20%",
      draggable: true,
      fullscreen: deviceDetection(),
      fullscreenIcon: true,
      closeOnClickModal: false,
      hideFooter: true,
      contentRenderer: () =>
        h(ProcessDetail, { ref: ProcessDetailRef, formInline: null })
    });
  }
  function openDialogProcessForm(row?: any) {
    console.log("openDialogOne==>", row);
    reservationDetailApi({
      id: row?.id
    })
      .then(res => {
        console.log(res);
        addDialog({
          title: ``,
          props: {
            formInline: {}
          },
          width: "20%",
          draggable: true,
          fullscreen: deviceDetection(),
          fullscreenIcon: true,
          closeOnClickModal: false,
          hideFooter: true,
          contentRenderer: () =>
            h(ProcessForm, { ref: ProcessFormRef, formInline: null })
        });
      })
      .catch(err => {});
  }
  return {
    openDialog,
    openDialogDetail,
    openDialogProcessDetail,
    openDialogProcessForm,
    transformI18n
  };
}
