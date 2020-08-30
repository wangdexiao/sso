import axios from 'axios'
import Router from '../router/index'
import {Message} from 'element-ui'
import Vuex from '../store/index'
import qs from 'qs'
import store from '../store'


export function request (config) {

  const instance = axios.create({
    baseURL : 'http://192.168.1.100:8000/',
    timeout : 500000000000,
    headers :{
      // 'X-Requested-With' : 'XMLHttpRequest',
      // 'Content-Type': 'application/x-www-form-urlencoded'
      // 'Accept':  '*/*'
    },
    withCredentials: true,
    //转换请求数据，// 有qs 就不需要这个了,会自动添加 headers: { 'content-type': 'application/x-www-form-urlencoded' },
    transformRequest: data => {
      // console.log('请求参数' + JSON.stringify(data))
      return qs.stringify(data)
    }
  });

  //axios 的拦截器
  //请求拦截器
  instance.interceptors.request.use(
    config =>{
      return config;
    },
    error => {
      return error;
    }
  );

  //响应拦截器
  instance.interceptors.response.use(
    res => {
      console.log("http请求响应:" + JSON.stringify(res))
      let result = res.data;


      return result;
    },
    error => {
      console.log("http请求响应错误:"+  JSON.stringify(error))
      return error
    }
  );

  return instance(config);
}
