import { MenuItemConstructorOptions, Menu, app } from "electron";

export const createMenu = () => {
  const config = [
    {
      label: "退出",
      click() {
        app.quit();
      },
    },
  ] as MenuItemConstructorOptions[];
  const menu = Menu.buildFromTemplate(config);
  menu.popup();
};
