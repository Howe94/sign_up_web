<template>
  <div id="app">
    <!--    头部组件-->
    <howe-header></howe-header>
    <!--    主体-->
    <router-view></router-view>
    <div class="body-bg"></div>
  </div>
</template>

<script>
  //引入头部组件
  import howeHeader from "./components/howeHeader";

  import Vue from 'vue'

  export default {
    name: 'app',
    data() {
      return {
        innerWidth: 0,
      }
    },
    components: {howeHeader},
    /* 组件实例刚刚被创建，组件属性计算之前，data属性为生成 */
    beforeCreate() {

    },

    /* 组件实例创建完成，属性已绑定，但是DOM还未生成，$el属性还不存在 */
    created() {
      const that = this;
      that.mixtureInit();
    },

    /* 模板编译/挂载之后 */
    mounted() {
      const that = this;

      that.$nextTick(() => {
        that.init();
      });

      console.log(`
        く__,.ヘヽ.        /  ,ー､ 〉
                 ＼ ', !-─‐-i  /  /´
                 ／｀ｰ'       L/／｀ヽ､
               /   ／,   /|   ,   ,       ',
             ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i
              ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |
                !,/7 '0'     ´0iソ|    |
                |.从"    _     ,,,, / |./    |
                ﾚ'| i＞.､,,__  _,.イ /   .i   |
                  ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |
                    | |/i 〈|/   i  ,.ﾍ |  i  |
                   .|/ /  ｉ：    ﾍ!    ＼  |
                    kヽ>､ﾊ    _,.ﾍ､    /､!
                    !'〈//｀Ｔ´', ＼ ｀'7'ｰr'
                    ﾚ'ヽL__|___i,___,ンﾚ|ノ
                        ﾄ-,/  |___./
                        'ｰ'    !_,.:
      `);
    },

    /* 组件销毁前 */
    beforeDestroy() {
      const that = this;

    },

    methods: {
      /* 初始化 */
      init() {
        const that = this;

        //注入错误提示
        Vue.$notify = that.$notify;

        Vue.$loadingEnd = () => {
          this.$bus.$emit("loading", false);
        };
      },

      /* 全局方法 */
      mixtureInit() {
        Vue.mixin({
          /* 全局方法 */
          methods: {

            //加载中
            loadingStart() {
              this.$bus.$emit("loading", true);
            },
            loadingEnd() {
              this.$bus.$emit("loading", false);
            },

            //获取导航栏
            getCode() {
              const that = this;
              let queryData = {};
              let hash = JSON.parse(JSON.stringify(window.location.hash));

              let hashSearch = hash.substring(hash.indexOf("/"));
              let hashDataArr = hashSearch.substring(1).split("/");

              if (hashDataArr.length === 2 && hashDataArr[1] != '') {

                queryData.category = hashDataArr[0];
                queryData.article = hashDataArr[1];
                return queryData;
              } else {
                return false;
              }
            },
          },
        });
      }
    },
  }
</script>

<style lang="scss">
  @import '../assets/css/basic.scss';

  #app {
    font-family: PingFangSC, PingFangSC-Regular, PingFangSC-Medium;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    min-width: 1020px;
    height: 100%;
    min-height: 656px;
    overflow: hidden;
    .body-bg{
      position: fixed;
      left: 0;
      top: 0;
      z-index: -999999;
      height: 100vh;
      width: 100vw;
      transition: background .5s;
      background: url("~@/assets/images/blog-bg.jpg") center center / cover no-repeat;
      /*opacity: 0.5;*/
      -webkit-filter: blur(5px);
      -moz-filter: blur(5px);
      -o-filter: blur(5px);
      -ms-filter: blur(5px);
      filter: blur(5px);
    }
  }

</style>
