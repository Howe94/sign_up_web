<template>
  <div i="howe-header-index">
    <div class="howe-header-boxs">
      <!--      头部logo-->
      <div class="header-logo">
        <img src="@/assets/images/header-logo.png" alt="">
        <span class="header-name">技术大脑</span>
      </div>
      <!--      头部标签-->
      <div class="header-tag">

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "howeHeader",
    data() {
      return {
      }
    },
    components: {},
    /* 组件实例刚刚被创建，组件属性计算之前，data属性为生成 */
    beforeCreate() {},

    /* 组件实例创建完成，属性已绑定，但是DOM还未生成，$el属性还不存在 */
    created() {
      const that = this;
    },

    /* 模板编译/挂载之后 */
    mounted() {
    },

    /* 组件销毁前 */
    beforeDestroy() {
      const that = this;
    },
    methods: {
      /* 初始化 */
      init() {
        const that = this;
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  [i="howe-header-index"] {
    width: 100%;
    box-sizing: border-box;

    /* 禁止复制文本 */
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;

    .howe-header-boxs {
      padding: .7rem 1.5rem;
      line-height: 2.2rem;
      transition: transform .3s;
      background: $color-white;
      .header-logo{
        cursor: pointer;
        img{
          height: 2.2rem;
          min-width: 2.2rem;
          margin-right: .8rem;
          vertical-align: top;
        }
        .header-name{
          font-size: 28px;
          font-weight: 600;
          color: $color-dominant;
        }
      }
    }
  }
</style>