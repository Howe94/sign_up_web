import qs from 'qs';
import {http, api, httpService} from '@/common/http/http.js';


//初始化字典
export const getSignUpList = (params = {}) => {
  return http.get(api.getSignUpList, {params});
};







