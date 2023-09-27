<template>
  <div class="w-full h-full bg-[#2d3436] p-4 flex flex-col pt-12">
    <h3
      class="drag text-center text-[#ced6e0ee] mb-4 border-b-[#57606f] border-b-2 pb-2"
    >
      参数设置
    </h3>
    <el-form
      ref="form"
      :inline="false"
      size="large"
      class="tooltip-base-box drag flex flex-col"
    >
      <el-form-item>
        <el-tooltip
          class="box-item"
          effect="dark"
          content="摄像头设备"
          placement="top"
        >
          <el-select
            v-model="config.deviceId"
            clearable
            filterable
            placeholder="请选择摄像头"
            class="w-full"
          >
            <el-option
              v-for="device in devices"
              :key="device.deviceId"
              :label="device.label"
              :value="device.deviceId"
            >
            </el-option>
          </el-select>
        </el-tooltip>
      </el-form-item>
      <el-form-item>
        <el-tooltip
          class="box-item"
          effect="dark"
          content="边框粗细"
          placement="top"
        >
          <el-input
            v-model="config.borderWidth"
            placeholder="请输入边框粗细"
            size="large"
            clearable
            @change=""
          ></el-input>
        </el-tooltip>
      </el-form-item>
      <el-form-item>
        <el-tooltip
          class="box-item"
          effect="dark"
          content="边框颜色"
          placement="top"
        >
          <el-input
            v-model="config.borderColor"
            placeholder="请输入边框颜色"
            size="large"
            clearable
            @change=""
          ></el-input>
        </el-tooltip>
      </el-form-item>
      <el-form-item>
        <el-tooltip
          class="box-item"
          effect="dark"
          content="圆角"
          placement="top"
        >
          <el-input
            v-model="config.borderRadius"
            placeholder="请输入边框圆角"
            size="large"
            clearable
            @change=""
          ></el-input>
        </el-tooltip>
      </el-form-item>
      <!-- <el-form-item>
        <el-button class="nodrag w-full" type="primary" @click="updateConfig"
          >保存</el-button
        >
      </el-form-item> -->
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { useConfigStore } from "@renderer/store/useConfigStore";
const { config } = useConfigStore();
// import useConfig from '@renderer/composables/useConfig';
// const {config, updateConfig} = useConfig()
const enumeratorPromise = await navigator.mediaDevices.enumerateDevices();
const devices = enumeratorPromise.filter((device) => {
  return device.kind == "videoinput";
});
</script>

<style scoped lang="scss"></style>
