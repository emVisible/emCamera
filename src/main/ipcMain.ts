import { BrowserWindow, ipcMain } from "electron";
import { createMenu } from "./menu";
const getWindow = (win: Electron.IpcMainEvent | Electron.IpcMainInvokeEvent) => {
  return BrowserWindow.fromWebContents(win.sender);
};

ipcMain.on("quitApp", () => {
  createMenu();
});

ipcMain.handle("dragApp", (event, cord: { x: number; y: number }) => {
  const win = getWindow(event)
  const [x, y] = win!.getPosition();
  win!.setPosition(x - cord.x, y - cord.y);
});

ipcMain.on(
  "resizeApp",
  (
    event: Electron.IpcMainEvent,
    config: { aspectRatio: number; width: number; height: number },
  ) => {
    const win = getWindow(event)!;
    const { width, height, aspectRatio } = config;
    win.setAspectRatio(aspectRatio);
    win.setBounds({ width, height });
  },
);