import request from "../utils/request";
import type { QueryParam } from "../types";

export const getData = async (query: QueryParam) => {
  return request({
    url: "/demo/test",
    method: "get",
    params: query,
  });
};
