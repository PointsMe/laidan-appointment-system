const Layout = () => import("@/layout/index.vue");

export default {
  path: "/floorPlan",
  name: "FloorPlanIndex",
  component: Layout,
  redirect: "/floorPlan/index",
  meta: {
    icon: "ep/user-filled",
    title: "平面图",
    rank: 7,
    showLink: true
  },
  children: [
    {
      path: "/floorPlan/index",
      name: "FloorPlan",
      component: () => import("@/views/floorPlan/index.vue"),
      meta: {
        title: "平面图",
        showLink: true
      }
    }
  ]
} satisfies RouteConfigsTable;
