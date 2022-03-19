import Axios from "axios";

const BASE_URL = 'http://localhost:3000';

const request = Axios.create({
  baseURL: BASE_URL,
  headers:{
    myHeader: 'hello'
  }
});

// 请求拦截器
request.interceptors.request.use((config)=>{
  // Do something，请求开始前做一些事
  return config;
}, error=>{
  return Promise.reject(error);
})

// 响应拦截器
request.interceptors.response.use((response)=>{
  // 响应后，对响应的结果处理，再返回
  return response;
}, error=>{
  return Promise.reject(error);
})

export default request;