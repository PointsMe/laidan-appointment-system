const Layout = () => import("@/layout/index.vue");

export default {
  path: "/userManagement",
  name: "UserManagementIndex",
  component: Layout,
  redirect: "/userManagement/index",
  meta: {
    icon: "ep/user",
    title: "用户管理",
    rank: 9,
    showLink: true
  },
  children: [
    {
      path: "/userManagement/index",
      name: "UserManagement",
      component: () => import("@/views/userManagement/index.vue"),
      meta: {
        title: "用户管理",
        showLink: true
      }
    }
  ]
} satisfies RouteConfigsTable;
