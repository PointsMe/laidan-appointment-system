const Layout = () => import("@/layout/index.vue");

export default {
  path: "/userRole",
  name: "UserRoleIndex",
  component: Layout,
  redirect: "/userRole/index",
  meta: {
    icon: "ep/user",
    title: "用户角色",
    rank: 9,
    showLink: false
  },
  children: [
    {
      path: "/userRole/index",
      name: "UserRole",
      component: () => import("@/views/userRole/index.vue"),
      meta: {
        title: "用户角色",
        showLink: true
      }
    }
  ]
} satisfies RouteConfigsTable;
