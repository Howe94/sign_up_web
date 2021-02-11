function isIE() {
  if (!!window.ActiveXObject || "ActiveXObject" in window)
    return true;
  else
    return false;
}

if (isIE()) {
  var userAgent = navigator.userAgent;
  var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
  reIE.test(userAgent);
  var fIEVersion = parseFloat(RegExp["$1"]);
  //console.log(fIEVersion);

  if (fIEVersion <= 10) { //ie10以下
    var num = 0;
    var timer = setTimeout(function time() {
      document.getElementById("app").innerHTML = "<div style='margin: 0 auto;width: 100%;margin-top: 20%;font-size: 30px;text-align: center;'>浏览器版本过低，请更换或更新您的浏览器！</div>";
      num++
      if (num == 3) {
        timer = "";
        clearTimeout(timer);
      } else {
        time();
      }
    }, 500);
  }
}

import Vue from 'vue';
import App from './entry/App';
import VueBus from 'vue-bus';
import VueRouter from 'vue-router'
import mainRouter from './router';

import store from './vuex/store';

/* 引入图标 */
import 'font-awesome/css/font-awesome.min.css';

/* 窗口 */
import loading from './components/loading/index.vue';

/* ElementUI */
import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-chalk/index.css'

import './assets/css/element/element-variables.scss'


/* Jquery */
let app = window;

/* vue去掉警告 */
Vue.config.productionTip = false;

/* loading */
Vue.component(loading.name, loading);

Vue.use(ElementUI);
Vue.use(VueBus);
Vue.use(VueRouter);

/* 判断是否为新标签页 */
if (!sessionStorage.length) {
  // Ask other tabs for session storage
  localStorage.setItem('getSessionStorage', Date.now());
}

/* 将纪录过的sessionStorage保存到新标签页 */
window.addEventListener('storage', function (event) {

  if (event.key == 'getSessionStorage') {
    // Some tab asked for the sessionStorage -> send it
    localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));
    localStorage.removeItem('sessionStorage');

  } else if (event.key == 'sessionStorage' && !sessionStorage.length) {
    // sessionStorage is empty -> fill it
    let p = [];

    if (event.newValue) {
      p = JSON.parse(event.newValue);
    }

    for (let key in p) {
      sessionStorage.setItem(key, p[key]);
    }
  }
});


/* 定义路由 */
const router = new VueRouter(mainRouter);

/* 等待storage监听执行完后再执行以下 */
window.addEventListener('load', () =>  {

  /* 初次打开,检查权限 */
  router.beforeEach((to, from, next) => {
    next();
  });

  router.onError((error) => {
    console.log(error)

    const pattern = /Loading chunk (\d)+ failed/g;
    const isChunkLoadFailed = error.message.match(pattern);
    const targetPath = router.history.pending.fullPath;
    if (isChunkLoadFailed) {
      router.replace(targetPath);
    }
  });

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
  })
});
