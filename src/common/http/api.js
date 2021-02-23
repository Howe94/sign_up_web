let joinService = location.pathname.split('/')[1];

//本地测试

if (location.origin === 'http://localhost:8888') {
  joinService = 'signUpService';
} else {
  joinService = '.'
}

/**************************************报名接口**************************************/

//获取报名列表
export const getSignUpList= `${joinService}/api/question-naire/1`;
