const Layout = () => import("@/layout/index.vue");

export default {
  path: "/visitorRecord",
  name: "VisitorRecordIndex",
  component: Layout,
  redirect: "/visitorRecord/index",
  meta: {
    icon: "ep/user-filled",
    title: "访客记录",
    rank: 1,
    showLink: true
  },
  children: [
    {
      path: "/visitorRecord/index",
      name: "VisitorRecord",
      component: () => import("@/views/visitorRecord/index.vue"),
      meta: {
        title: "访客记录",
        showLink: true
      }
    }
  ]
} satisfies RouteConfigsTable;
