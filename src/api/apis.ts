import { http } from "@/utils/http";
type UserResult = {
  token: string;
  account: {
    id: string;
    username: string;
    number: string;
    mobile: string;
    avatar: string;
    email: string;
    perms: Array<string>;
  };
};
/** 获取预约首页列表 */
export const getReservationHomePageList = (data?: object) => {
  return http.request<ApiResponseData<any>>(
    "post",
    "/reservation/homePageList",
    {
      data
    }
  );
};
/** 获取预约详情 */
export const reservationDetailApi = (data?: object) => {
  return http.request<ApiResponseData<any>>("post", "/reservation/detail", {
    data
  });
  // return new Promise((resolve, reject) => {
  //   resolve({
  //     code: 20000,
  //     msg: "OK",
  //     data: {
  //       id: "232275129905815554",
  //       createdAt: "2025-07-09T09:44:32+0000",
  //       customerId: "232129540175360002",
  //       source: null,
  //       state: 101,
  //       dinerCount: 2,
  //       adultCount: 1,
  //       childCount: 1,
  //       username: "juuu",
  //       mobile: "86-18888888888",
  //       email: "1234567890@qq.com",
  //       address: "中国北京", // 地区
  //       remark: "需要一个安静的角落座位，需要一个安静的角落座位。",
  //       startedAt: "2025-07-09T16:01:54+0000",
  //       endedAt: "2025-07-09T17:31:54+0000",
  //       tableIds: ["232156419157925889"],
  //       tableNumbers: ["20"],
  //       diningPeriod: 101,
  //       customer: {
  //         id: "232129540175360002",
  //         name: "表海燕",
  //         blacklisted: false // 是否黑名单
  //       },
  //       tableZone: { id: "232156419157925889", name: "室外花园" }
  //     }
  //   });
  // });
};
/** 登录 */
export const getLogin = (data?: object) => {
  return http.request<ApiResponseData<UserResult>>(
    "post",
    "/login",
    { data },
    {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
  );
  // return new Promise((resolve, reject) => {
  //   resolve({
  //     code: 20000,
  //     msg: "OK",
  //     data: {
  //       token: "ENjhkNGU2NGMxMWRjNGI0N2JkNjY0ZDc0MTMwZDBlYTc=",
  //       account: {
  //         id: "232129540175360002",
  //         username: "juuu",
  //         number: "86-18888888888",
  //         mobile: "86-18888888888",
  //         avatar: "https://img.yzcdn.cn/vant/cat.jpeg",
  //         email: "1234567890@qq.com",
  //         perms: ["admin"]
  //       }
  //     }
  //   });
  // });
};
/** 获取区域列表 */
export const getTableZoneList = (data?: object) => {
  return http.request<ApiResponseData<any>>("post", "/tableZone/list", {
    data
  });
};
/** 更新预约 */
export const updateReservationApi = (data?: object) => {
  return http.request<ApiResponseData<any>>("post", "/reservation/update", {
    data
  });
};
/** 修改预约状态 */
export const updateReservationStateApi = (data?: object) => {
  return http.request<ApiResponseData<any>>(
    "post",
    "/reservation/state/update",
    {
      data
    }
  );
};
/**
 *
 * @returns 获取预约时间
 */
export const getReservationTimeListApi = (data?: object) => {
  return new Promise((resolve, reject) => {
    resolve({
      code: 20000,
      msg: "OK",
      data: [
        {
          tableZone: {
            id: "232156419157925889",
            name: "室外花园"
          },
          reservationZoneTimes: [
            {
              reservationTime: "10:00",
              reservationed: false
            },
            {
              reservationTime: "10:15",
              reservationed: true
            },
            {
              reservationTime: "10:30",
              reservationed: true
            },
            {
              reservationTime: "10:45",
              reservationed: true
            },
            {
              reservationTime: "11:00",
              reservationed: true
            },
            {
              reservationTime: "11:15",
              reservationed: true
            },
            {
              reservationTime: "11:30",
              reservationed: true
            },
            {
              reservationTime: "11:45",
              reservationed: true
            },
            {
              reservationTime: "12:00",
              reservationed: true
            },
            {
              reservationTime: "12:15",
              reservationed: true
            },
            {
              reservationTime: "12:30",
              reservationed: true
            }
          ]
        },
        {
          tableZone: {
            id: "232156437411536897",
            name: "室内天台"
          },
          reservationZoneTimes: [
            {
              reservationTime: "10:00",
              reservationed: true
            },
            {
              reservationTime: "10:15",
              reservationed: true
            },
            {
              reservationTime: "10:30",
              reservationed: true
            },
            {
              reservationTime: "10:45",
              reservationed: true
            },
            {
              reservationTime: "11:00",
              reservationed: true
            },
            {
              reservationTime: "11:15",
              reservationed: true
            },
            {
              reservationTime: "11:30",
              reservationed: true
            },
            {
              reservationTime: "11:45",
              reservationed: true
            },
            {
              reservationTime: "12:00",
              reservationed: true
            },
            {
              reservationTime: "12:15",
              reservationed: true
            },
            {
              reservationTime: "12:30",
              reservationed: true
            }
          ]
        }
      ],
      errors: []
    });
  });
  // return http.request<ApiResponseData<any>>("post", "/reservation/time/list", {
  //   data
  // });
};
/** 创建预约 */
export const createReservationApi = (data?: object) => {
  return http.request<ApiResponseData<any>>("post", "/reservation/create", {
    data
  });
};
