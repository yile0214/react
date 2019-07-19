import axios from 'axios'
import PubSub from 'pubsub-js'
import store from '../store'
import * as types from '../store/types'
axios.interceptors.request.use(function (config) {
  console.log('拦截器1')
  // PubSub.publish('VIEW_LOADING',true);
  store.dispatch({type:types.VIEW_LOADING,payload:true})
  return config;
}, function (error) {
  // 错误请求，做点事
  
  return Promise.reject(error);
});

// 响应式，数据返回时
axios.interceptors.response.use(function (response) {
  console.log('拦截器2')
  store.dispatch({type:types.VIEW_LOADING,payload:false})

  // PubSub.publish('VIEW_LOADING',false);
  return response;
}, function (error) {
  
  return Promise.reject(error);
});

window.axios = axios ;
export default axios