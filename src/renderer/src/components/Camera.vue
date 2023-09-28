<template>
  <div
    class="w-full h-full overflow-hidden flex"
    :style="`border:solid ${config.borderWidth} ${config.borderColor};
    border-radius: ${config.borderRadius}; border-radius: ${
      config.isRound ? '50%' : config.borderRadius
    };`"
  >
    <video
      class="object-cover flex-1"
      :style="`border-radius: ${config.borderRadius}; border-radius: ${
        config.isRound ? '50%' : '0px'
      };`"
    ></video>
  </div>
</template>

<script setup lang="ts">
import { useConfigStore } from "@renderer/store/useConfigStore";
import { onMounted } from "vue";
const { config } = useConfigStore();

onMounted(() => {
  const video = document.querySelector("video")!;
  const constraints = {
    audio: false,
    video: {
      deviceId: config.deviceId,
    },
  } as MediaStreamConstraints;
  navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
    video.srcObject = stream;
    video.play();
  });
});
</script>

<style scoped lang="scss"></style>
