import axios from 'axios';
import * as api from './api.js';

//引入Vue
import Vue from 'vue';


/* 获取本地存储信息 */
const getKey = () => {

  return;
};


let http = axios.create({
  //baseURL: httpService,

  /*data: {
     token: JSON.parse(sessionStorage.getItem('user')) ? JSON.parse(sessionStorage.getItem('user')).token : ''
  }*/
});

/* headers添加 */
// axios全局配置，允许跨域带cookie
axios.defaults.withCredentials = true;
// axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Content-Type'] = 'application/json';

//2020/6/10添加
axios.defaults.headers.post['Accept'] = 'application/json';

/* 请求 */
http.interceptors.request.use(function (config) {

  // /* 需要的请求参数 */
  // let appId = getKey() ? getKey().id : '';
  //
  // if (!appId) {
  //   Vue.$notify.error({
  //     title: '状态异常',
  //     message: '系统Id异常，请刷新重试！'
  //   });
  // }
  //
  // let params = {
  //   appId: appId,
  // };
  //
  // //get 请求
  // if (config.method === 'get') {
  //   config.params = Object.assign(config.params || {}, params);
  // }
  //
  // //post put 请求
  // else if (config.method === 'post' || config.method === 'put') {
  //   if (!config.data.appId) {
  //     config.data.appId = params.appId;
  //   }
  // }
  //
  // //delete 请求
  // else if (config.method === 'delete') {
  //   config.params = Object.assign(config.params || {}, params);
  // }

  return config;
});


/* 返回值 */
http.interceptors.response.use(
  function (response) {

    /* 成功返回 */
    let data = response.data || {};

    if (response.status === 200 || response.status === '200') {
      return data;
      //return response.data;
    } else {
      return response;
    }

  }, function (error) {
    Vue.$loadingEnd();

    //未登录 登录超时 重新加载
    if (error.response.status === 401 || error.response.status === '401') {
      //window.location.reload();
      Vue.$notify.error({
        title: '登录状态异常',
        message: '请重新登录'
      });

      setTimeout(() => {
        //parent.location.reload();
      }, 300);

      return;
    }

    /* 失败返回 */
    let tipMessage = {
      status: error.response.status,
      message: error.response.data.message
    };

    if (error.response.status === 403 || error.response.status === '403') {
      Vue.$notify.info({
        title: '提示',
        message: '您暂时没有当前操作的权限，请联系管理员！',
      });

      return Promise.reject(null);
    } else if (error.response.status === 500 || error.response.status === '500') {
      Vue.$notify.info({
        title: '提示',
        message: '服务器错误，请刷新重试！',
      });

      return Promise.reject(null);
    }

    return Promise.reject(tipMessage);
  }
);

export default http;

export {
  api,
  http,
};
