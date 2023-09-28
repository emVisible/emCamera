import { ElectronAPI } from "@electron-toolkit/preload";

declare global {
  interface Window {
    electron: ElectronAPI;
    api: {
      quit: Function;
      drag: Function;
    };
  }
}
