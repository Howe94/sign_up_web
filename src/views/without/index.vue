<template>
  <div i="index">
    <div class="not-container-box">
      <div class="not-container">
        <img src="~images/404.png">
        <div class="not-container-text">
          <div>抱歉，页面被外星人劫走了~~</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        param: this.$route.query,
        data: {},
        lists: [],
      }
    },

    /* 组件实例刚创建，组件属性计算之前 */
    beforeCreate() {

    },

    /* 组件实例创建完成，属性已绑定，但是DOM还未生成，$el属性还不存在 */
    created() {

    },

    /* 模板编译/挂载之后 */
    mounted() {
      const that = this;
      that.$nextTick(() => {
        that.init();
      })
    },

    methods: {
      //初始化操作
      init() {

      },
    },
    watch: {},
    components: {},
    filters: {},
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  [i="index"] {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;

    .not-container-box {
      width: 100%;
      height: 100%;

      .not-container {
        width: 100%;
        height: 100%;
        margin: auto;

        img {
          width: 100%;
          height: 100%;
        }

        .not-container-text {
          margin: auto;
          width: 888px;
          position: relative;
          top: -320px;
          text-align: center;
          font-size: 64px;
          font-weight: bold;
          font-family: PingFangSC-Medium;
          //color: #fff;
          //background: -webkit-gradient(linear,center top,center bottom,from(#ccc), to(#000));
          background-image: -webkit-linear-gradient(left bottom, #ff0000, #ff3300, #ff6600, #ff9900, #ffff00, #99ff00, #00ff00, #00ffff, #0000ff, #6600ff, #ff00ff, #ff0066);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }
</style>
