const Layout = () => import("@/layout/index.vue");

export default {
  path: "/basicInformation",
  name: "BasicInformationIndex",
  component: Layout,
  redirect: "/basicInformation/index",
  meta: {
    icon: "ep/user-filled",
    title: "基本信息",
    rank: 4,
    showLink: true
  },
  children: [
    {
      path: "/basicInformation/index",
      name: "BasicInformation",
      component: () => import("@/views/basicInformation/index.vue"),
      meta: {
        title: "基本信息",
        showLink: true
      }
    }
  ]
} satisfies RouteConfigsTable;
