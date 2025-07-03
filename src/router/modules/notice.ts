const Layout = () => import("@/layout/index.vue");

export default {
  path: "/notice",
  name: "NoticeIndex",
  component: Layout,
  redirect: "/notice/index",
  meta: {
    icon: "ep/user-filled",
    title: "通知",
    rank: 8,
    showLink: true
  },
  children: [
    {
      path: "/notice/index",
      name: "Notice",
      component: () => import("@/views/notice/index.vue"),
      meta: {
        title: "通知",
        showLink: true
      }
    }
  ]
} satisfies RouteConfigsTable;
