const Layout = () => import("@/layout/index.vue");

export default {
  path: "/eventNotice",
  name: "EventNoticeIndex",
  component: Layout,
  redirect: "/eventNotice/index",
  meta: {
    icon: "ep/bell",
    title: "活动通知",
    rank: 6,
    showLink: true
  },
  children: [
    {
      path: "/eventNotice/index",
      name: "EventNotice",
      component: () => import("@/views/eventNotice/index.vue"),
      meta: {
        title: "活动通知",
        showLink: true
      }
    }
  ]
} satisfies RouteConfigsTable;
