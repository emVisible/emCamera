<script setup lang="ts">
import { CameraOne, Config, Halo } from "@icon-park/vue-next";
import Camera from "./components/Camera.vue";
import Settings from "./components/Settings.vue";
// import useConfig from "./composables/useConfig";
import useDrag from "./composables/useDrag";
import { useConfigStore } from "./store/useConfigStore";
const { config } = useConfigStore();
const quit = () => {
  window.api.quit();
};
const {drag} = useDrag()
drag.run()
</script>

<template>
  <Suspense>
    <main class="w-screen h-screen relative group nodrag" @contextmenu="quit">
      <div class="">
        <Config
          v-if="config.page == 'camera'"
          class="nodrag absolute left-1/2 -translate-x-1/2 cursor-pointer mt-3 z-10 hidden group-hover:block"
          theme="outline"
          size="28"
          fill="#ced6e0"
          @click="config.page = 'setting'"
        />
        <Camera-one
          v-else
          class="nodrag absolute left-1/2 -translate-x-1/2 cursor-pointer mt-3 z-10"
          theme="outline"
          size="28"
          fill="#ced6e0"
          @click="config.page = 'camera'"
        />
        <Halo
        v-if="config.page == 'camera'"
          theme="outline"
          size="24"
          fill="#FFFFFF"
          class="nodrag absolute left-1/2 bottom-5 -translate-x-1/2 cursor-pointer mt-3 z-10 hidden group-hover:block"
          @click="config.isRound = !config.isRound"
        />
      </div>
      <div class="w-full h-full nodrag">
        <Camera v-if="config.page == 'camera'" />
        <Settings v-else />
      </div>
    </main>
  </Suspense>
</template>

<style lang="scss"></style>
