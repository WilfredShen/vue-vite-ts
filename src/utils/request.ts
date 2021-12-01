import axios from "axios";
import errorCode from "./errorCode";

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 10000,
  headers: { "Content-Type": "application/json;charset=utf-8" },
});

// request拦截器
service.interceptors.request.use(
  config => config,
  error => {
    console.log(error);
    Promise.reject(error);
  },
);

// response拦截器
service.interceptors.response.use(
  res => {
    const code = (res.data.code as number) || 200;
    if (code === 200) return res.data;
    const msg = errorCode[code] || res.data.msg || errorCode.default;
    return Promise.reject(new Error(msg));
  },
  error => {
    console.log("err", error);
    return Promise.reject(error);
  },
);

export default service;
