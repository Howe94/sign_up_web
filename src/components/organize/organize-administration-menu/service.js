import qs from 'qs';
import {http, api, httpService} from '@/common/http/http.js';

// 获取部门子部门列表
export const getDeptChildren = (params = {}) => {
  return http.get(api.getDeptChildren, {params});
};


// 获取部门和子部门列表详情
export const getDeptAllList = (params = {}) => {
  return http.get(api.getDeptAllList, {params});
};


// 获取同步组织架构树
export const getDeptTree = (params = {}) => {
  return http.get(api.getDeptTree, {params});
};