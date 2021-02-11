let joinService = location.pathname.split('/')[1];

//本地测试

if (location.origin === 'http://localhost:8888') {
  joinService = 'http://8.129.110.202:1002';
} else {
  joinService = '.'
}

/**************************************报名接口**************************************/

//获取报名列表
export const getSignUpList= `${joinService}/api/question-naire/1`;

//获取部门所有子孙部门列表详情
export const getDeptAllChildrenInfo = `${joinService}/dept/allChildrenInfo`;

//获取部门子部门列表
export const getDeptChildren = `${joinService}/dept/children`;

//获取部门子部门列表详情
export const getDeptChildrenInfo = `${joinService}/dept/childrenInfo`;

//获取字典列表
export const getDeptDicts = `${joinService}/dept/dicts`;

//同步选中部门数据
export const postDeptSync = `${joinService}/dept/sync`;

//获取同步组织架构树
export const getDeptTree = `${joinService}/dept/tree`;

//根据部门列表更新数广部门数据
export const postDeptDeptInfoList = `${joinService}/dept/deptInfoList`;

//获取部门子部门列表
export const getDeptAllList = `${joinService}/dept/allList`;

//获取所需部门及子部门列表
export const getDeptList = `${joinService}/dept/list`;
