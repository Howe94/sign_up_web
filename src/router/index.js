export default {
  // mode: 'history',//history
  // base: '/',//history
  routes: [
    /*组织架构同步*/
    {
      path: '/signUp',
      name: 'signUp',
      component: resolve => {
        require.ensure(['@/views/module/signUp/index.vue'], () => {
          resolve(require('@/views/module/signUp/index.vue'));
        }, 'chunk/signUp');
      },
      meta: {
        title: '组织架构同步'
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
