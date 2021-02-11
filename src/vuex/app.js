/* 1.state在vuex中用于存储数据 */
const state = {
  isLoading: false,
  $now_width: 0,
  $now_height: 0,
  $theme_color:'2D4DAB'//默认为2D4DAB
};

/* 2.mutations里面放的是方法，方法主要改变state里面的数据 */
const mutations = {
  //加载中
  loading() {
    state.isLoading = !state.isLoading;
  },

  //更新主题颜色
  setThemeColor(state,color){
    state.$theme_color = color;
  },

  //改变宽度
  changeWidth(state, width) {
    state.$now_width = width;
  },

  //改变高度
  changeHeight(state, height) {
    state.$now_height = height;
  },
};

const actions = {
  changeWidth(context, width) {
    context.commit('changeWidth', width);
  },

  changeHeight(context, height) {
    context.commit('changeHeight', height);
  },
};

export default {
  state,
  mutations,
  actions,
}
