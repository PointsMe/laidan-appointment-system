const Layout = () => import("@/layout/index.vue");

export default {
  path: "/specialDate",
  name: "SpecialDateIndex",
  component: Layout,
  redirect: "/specialDate/index",
  meta: {
    icon: "ep/user-filled",
    title: "特殊日期",
    rank: 4,
    showLink: true
  },
  children: [
    {
      path: "/specialDate/index",
      name: "SpecialDate",
      component: () => import("@/views/specialDate/index.vue"),
      meta: {
        title: "特殊日期",
        showLink: true
      }
    }
  ]
} satisfies RouteConfigsTable;
