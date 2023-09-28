import { ref } from "vue";

/*
  使用浏览器自带的localstorage进行setting的持久化
*/

type ConfigType = {
  deviceId: string;
  page: string;
};
const defaultConfig = {
  deviceId: "No Device Chosen",
  page: "camera",
};

export default () => {
  const cache: ConfigType = localStorage.getItem("config")
    ? (JSON.parse(localStorage.getItem("config")!) as ConfigType)
    : defaultConfig;
  const config = ref<ConfigType>(cache);

  const updateConfig = () => {
    localStorage.setItem("config", JSON.stringify(config.value));
    return "设置成功";
  };
  return {
    config,
    updateConfig,
  };
};