const { Menu, Tray } = require("electron");
const path = require('path')

const createTray = () => {
  const tray = new Tray(path.resolve(__dirname, "../../resources/trayTemplate@2x.png"));
  const contextMenu = Menu.buildFromTemplate([{ label: "退出", role: "quit" }]);
  tray.setToolTip("EMC");
  tray.setContextMenu(contextMenu);
};
export { createTray };
