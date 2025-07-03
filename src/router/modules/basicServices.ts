const Layout = () => import("@/layout/index.vue");

export default {
  path: "/basicServices",
  name: "BasicServicesIndex",
  component: Layout,
  redirect: "/basicServices/index",
  meta: {
    icon: "ep/user-filled",
    title: "基本服务",
    rank: 4,
    showLink: true
  },
  children: [
    {
      path: "/basicServices/index",
      name: "BasicServices",
      component: () => import("@/views/basicServices/index.vue"),
      meta: {
        title: "基本服务",
        showLink: true
      }
    }
  ]
} satisfies RouteConfigsTable;
