import { http } from "@/utils/http";
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
};
