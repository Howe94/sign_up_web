import qs from 'qs';
import {http, api, httpService} from '@/common/http/http.js';

//新增角色
export const syncUpdateititon = (params = {}) => {
  return http.put(api.syncDeptOperation, params);
}

//表单请求  name为请求名称
// export const name = (params = {}) => {
//   let qs = require('qs');
//   return http.post(api.name, qs.stringify(params), {
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     }
//   }).then(function (response) {
//     return response;
//   });
// }

//普通请求post
// export const name = (params = {}) => {
//   return http.post(api.name, params);
// }

//普通请求get
// export const name = (params = {}) => {
//   return http.get(api.name, {params});
// }

