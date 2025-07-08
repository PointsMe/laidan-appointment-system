const Layout = () => import("@/layout/index.vue");

export default {
  path: "/evaluationManagement",
  name: "EvaluationManagementIndex",
  component: Layout,
  redirect: "/evaluationManagement/index",
  meta: {
    icon: "ep/message",
    title: "评价管理",
    rank: 3,
    showLink: true
  },
  children: [
    {
      path: "/evaluationManagement/index",
      name: "EvaluationManagement",
      component: () => import("@/views/evaluationManagement/index.vue"),
      meta: {
        title: "评价管理",
        showLink: true
      }
    }
  ]
} satisfies RouteConfigsTable;
