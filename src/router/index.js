export default {
  mode: 'history',//history
  base: '/myBlog',//history
  routes: [
    /*博客首页*/
    {
      path: '/index',
      name: 'index',
      component: resolve => {
        require.ensure(['@/views/module/homePage/index.vue'], () => {
          resolve(require('@/views/module/homePage/index.vue'));
        }, 'chunk/homePage');
      },
      meta: {
        title: '主页',
        requireAuth: false
      }
    },
    {
      path: '/without',
      name: 'without',
      component: resolve => {
        require.ensure(['@/views/without/index.vue'], () => {
          resolve(require('@/views/without/index.vue'));
        }, 'chunk/without');
      },
      meta: {
        title: '404'
      }
    },

    /**************************************************************************************/
  ],
  /*滚动行为*/
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
}
