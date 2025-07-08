const Layout = () => import("@/layout/index.vue");

export default {
  path: "/homePageAnnouncements",
  name: "HomePageAnnouncementsIndex",
  component: Layout,
  redirect: "/homePageAnnouncements/index",
  meta: {
    icon: "ep/notebook",
    title: "首页公告",
    rank: 6,
    showLink: true
  },
  children: [
    {
      path: "/homePageAnnouncements/index",
      name: "HomePageAnnouncements",
      component: () => import("@/views/homePageAnnouncements/index.vue"),
      meta: {
        title: "首页公告",
        showLink: true
      }
    }
  ]
} satisfies RouteConfigsTable;
