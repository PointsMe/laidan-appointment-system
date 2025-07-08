// 这里存放本地图标，在 src/layout/index.vue 文件中加载，避免在首启动加载
import { getSvgInfo } from "@pureadmin/utils";
import { addIcon } from "@iconify/vue/dist/offline";

// https://icon-sets.iconify.design/ep/?keyword=ep
import EpHomeFilled from "~icons/ep/home-filled?raw";

// https://icon-sets.iconify.design/ri/?keyword=ri
import RiSearchLine from "~icons/ri/search-line?raw";
import RiInformationLine from "~icons/ri/information-line?raw";

import EpUserFilled from "~icons/ep/user-filled?raw";
import EpWallet from "~icons/ep/wallet?raw";
import EpCollection from "~icons/ep/collection?raw";
import EpCreditCard from "~icons/ep/credit-card?raw";
import EpSetting from "~icons/ep/setting?raw";
import EpDocumentDelete from "~icons/ep/document-delete?raw";
import EpMemo from "~icons/ep/memo?raw";
import EpTickets from "~icons/ep/tickets?raw";
import EpCalendar from "~icons/ep/calendar?raw";
import EpMessage from "~icons/ep/message?raw";
import EpAvatar from "~icons/ep/avatar?raw";
import EpHistogram from "~icons/ep/histogram?raw";
import EpUser from "~icons/ep/user?raw";
import EpBell from "~icons/ep/bell?raw";
import EpNotebook from "~icons/ep/notebook?raw";
import EpScaleToOriginal from "~icons/ep/scale-to-original?raw";
import EpOperation from "~icons/ep/operation?raw";
import EpPlace from "~icons/ep/place?raw";
import EpBellFilled from "~icons/ep/bell-filled?raw";
const icons = [
  // Element Plus Icon: https://github.com/element-plus/element-plus-icons
  ["ep/home-filled", EpHomeFilled],
  // Remix Icon: https://github.com/Remix-Design/RemixIcon
  ["ri/search-line", RiSearchLine],
  ["ri/information-line", RiInformationLine],
  ["ep/user-filled", EpUserFilled],
  ["ep/collection", EpCollection],
  ["ep/credit-card", EpCreditCard],
  ["ep/setting", EpSetting],
  ["ep/wallet", EpWallet],
  ["ep/document-delete", EpDocumentDelete],
  ["ep/memo", EpMemo],
  ["ep/calendar", EpCalendar],
  ["ep/message", EpMessage],
  ["ep/avatar", EpAvatar],
  ["ep/histogram", EpHistogram],
  ["ep/user", EpUser],
  ["ep/bell", EpBell],
  ["ep/notebook", EpNotebook],
  ["ep/scale-to-original", EpScaleToOriginal],
  ["ep/operation", EpOperation],
  ["ep/place", EpPlace],
  ["ep/bell-filled", EpBellFilled]
];

// 本地菜单图标，后端在路由的 icon 中返回对应的图标字符串并且前端在此处使用 addIcon 添加即可渲染菜单图标
icons.forEach(([name, icon]) => {
  addIcon(name as string, getSvgInfo(icon as string));
});
