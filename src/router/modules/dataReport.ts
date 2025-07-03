const Layout = () => import("@/layout/index.vue");

export default {
  path: "/dataReport",
  name: "DataReportIndex",
  component: Layout,
  redirect: "/dataReport/index",
  meta: {
    icon: "ep/user-filled",
    title: "数据报告",
    rank: 5,
    showLink: true
  },
  children: [
    {
      path: "/dataReport/index",
      name: "DataReport",
      component: () => import("@/views/dataReport/index.vue"),
      meta: {
        title: "数据报告",
        showLink: true
      }
    }
  ]
} satisfies RouteConfigsTable;
