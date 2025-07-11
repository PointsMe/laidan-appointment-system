<script setup lang="ts">
import { ref, onMounted } from "vue";
defineOptions({
  name: "showMobile"
});
const props = defineProps<{
  mobile: string;
}>();
const mobile = ref(props.mobile);
onMounted(() => {
  console.log("showMobile==>", mobile.value);
});
</script>
<template>
  <div class="show-mobile">
    <div class="show-mobile-header text-center text-2xl font-bold">
      {{ mobile }}
    </div>
  </div>
</template>
<style scoped lang="scss">
.show-mobile {
  width: 100%;
  height: 100%;
  .show-mobile-header {
    width: 100%;
    height: 100%;
  }
}
</style>
