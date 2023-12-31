import { defineStore } from "pinia";
import { ref } from "vue";

/*
  使用pinia进行数据持久化
*/

export const useConfigStore = defineStore(
  "config",
  () => {
    const config = ref({
      page: "camera",
      deviceId: "",
      borderWidth: "8px",
      borderColor: "#f1f2f6",
      borderRadius: "10%",
      isRound: false,
    });

    const updateConfig = () => {
      console.log("update");
    };
    return { config, updateConfig };
  },
  {
    persist: true,
  },
);
