import { BrowserWindow, ipcMain } from "electron";
import { createMenu } from "./menu";

ipcMain.on("quitApp", () => {
  createMenu();
});

ipcMain.handle('dragApp', (event, cord:{x:number, y:number})=>{
  const win = BrowserWindow.fromWebContents(event.sender)
  const [x, y] = win!.getPosition()
  win!.setPosition(x- cord.x, y - cord.y)
})