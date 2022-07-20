import { onMounted, onUnmounted } from "vue";

export const useGlobalEvent = (event, callback)=> {
  onMounted(() => {
    document.body.addEventListener(event, callback);
  });
  onUnmounted(() => {
    document.body.removeEventListener(event, callback);
  });
}
