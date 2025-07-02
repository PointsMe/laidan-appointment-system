import { transformI18n } from "@/plugins/i18n";
import { addDialog } from "@/components/ReDialog";
import { deviceDetection } from "@pureadmin/utils";
import { ref, h } from "vue";
import AddAppointment from "./AddAppointment.vue";

export function useAddAppointment() {
  const AddAppointmentRef = ref();

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
      contentRenderer: () =>
        h(AddAppointment, { ref: AddAppointmentRef, formInline: null }),
      beforeSure: (done, { options }) => {
        done(); // 关闭弹框
      }
    });
  }

  return {
    openDialog,
    transformI18n
  };
}
