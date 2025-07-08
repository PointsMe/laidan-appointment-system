const Layout = () => import("@/layout/index.vue");

export default {
  path: "/customerManagement",
  name: "CustomerManagementIndex",
  component: Layout,
  redirect: "/customerManagement/index",
  meta: {
    icon: "ep/avatar",
    title: "客户管理",
    rank: 4,
    showLink: true
  },
  children: [
    {
      path: "/customerManagement/index",
      name: "CustomerManagement",
      component: () => import("@/views/customerManagement/index.vue"),
      meta: {
        title: "客户管理",
        showLink: true
      }
    }
  ]
} satisfies RouteConfigsTable;
