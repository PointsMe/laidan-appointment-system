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
export const getReservationHomePageList = (data?: object) => {
  return http.request<ApiResponseData<any>>(
    "post",
    "/reservation/homePageList",
    {
      data
    }
  );
};
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
