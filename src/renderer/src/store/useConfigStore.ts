import { defineStore } from "pinia";
import { ref } from "vue";

export const useConfigStore = defineStore(
  "config",
  () => {
    const config = ref({
      page: "camera",
      deviceId: "",
      borderWidth: "8px",
      borderColor: "#f1f2f6",
      borderRadius: "10%",
      isRound: true,
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
