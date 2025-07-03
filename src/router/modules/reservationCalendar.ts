const Layout = () => import("@/layout/index.vue");

export default {
  path: "/reservationCalendar",
  name: "ReservationCalendarIndex",
  component: Layout,
  redirect: "/reservationCalendar/index",
  meta: {
    icon: "ep/user-filled",
    title: "预约日历",
    rank: 2,
    showLink: true
  },
  children: [
    {
      path: "/reservationCalendar/index",
      name: "ReservationCalendar",
      component: () => import("@/views/reservationCalendar/index.vue"),
      meta: {
        title: "预约日历",
        showLink: true
      }
    }
  ]
} satisfies RouteConfigsTable;
