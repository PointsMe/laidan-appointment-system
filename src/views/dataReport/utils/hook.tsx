import { getEmployeeList } from "@/api/user";
import { reactive, ref, onMounted, toRaw } from "vue";

export function useDataReport() {
  const form = reactive({
    username: ""
  });

  const dataList = ref([]);
  const loading = ref(true);
  async function onSearch() {
    loading.value = true;
    const { data } = await getEmployeeList({
      ...toRaw(form),
      kind: 101
    });
    dataList.value = data.list;

    setTimeout(() => {
      loading.value = false;
    }, 500);
  }

  onMounted(async () => {
    onSearch();
  });

  return {
    form,
    loading,
    dataList,
    onSearch
  };
}
