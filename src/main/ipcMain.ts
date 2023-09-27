import { ipcMain } from "electron";
import { createMenu } from "./menu";

ipcMain.on("quitApp", () => {
  createMenu();
});
