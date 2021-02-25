<template>
  <div i="howe-header-index">
    <div class="howe-header-boxs">
      <!--      头部logo-->
      <div class="header-logo header-left">
        <img class="logo-item" src="@/assets/images/header-logo.png" alt="">
        <span class="header-name logo-item">技术大脑</span>
      </div>
      <div class="header-right">
        <!--      头部标签-->
        <div class="header-tab">
          <div class="tab-search-input">
            <el-input placeholder="请输入搜索的内容" prefix-icon="el-icon-search" v-model="searchTip">
            </el-input>
          </div>
          <div class="tab-content">
            <ul class="tab-list">
              <li class="tab-item" v-for="(item,index) in tabList" :key="index">{{item.tabName}}</li>
            </ul>
          </div>
        </div>
        <!-- 用户信息 -->
        <div class="header-user">
          <!-- 未登录，及游客展示的 -->
          <div class="unsign-up">
            <el-button type="primary" round>登录</el-button>
            <el-button type="warning" round>注册</el-button>
          </div>
          <!-- 已登录用户展示的信息 -->
          <div class="sign-up user-info">

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "howeHeader",
    data() {
      return {
        searchTip: "", //搜索的关键字
        tabList: [{
            tabName: "前端",
            tabId: "1"
          },
          {
            tabName: "后端",
            tabId: "2"
          },
          {
            tabName: "算法",
            tabId: "3"
          },
          {
            tabName: "其他",
            tabId: "4"
          }
        ]
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
    mounted() {},

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

      position: relative;
      line-height: 2.8rem;
      transition: transform .3s;
      background: $color-white;
      vertical-align: top;
      padding: 0 1rem;

      .header-left,
      .header-right {
        display: inline-block;
        vertical-align: middle;
      }
        /* 头部logo样式 */
        .header-logo {
         
          cursor: pointer;
          img {
            height: 2.2rem;
            min-width: 2.2rem;
            margin-right: .8rem;
            vertical-align: top;
          }

          .header-name {
            font-size: 28px;
            font-weight: 600;
            color: $color-dominant;
          }
        }


      .header-right {
        position: absolute;
        right: 0px;

        .header-tab,
        .header-user {
          display: inline-block;
        }

        /* 搜索框和tab样式 */
        .header-tab {
          padding: 0 20px;

          .tab-search-input,
          .tab-content {
            display: inline-block;
            vertical-align: top;
          }

          .tab-search-input {
            .el-input .el-input__inner {
              height: 32px;
              border-radius: 20px;
            }

          }

          .tab-content {
            font-size: 18px;

            .tab-list {
              .tab-item {
                float: left;
                margin-left: 20px;

                &:hover {
                  color: $color-sidebar-hover;
                  background: $color-background-3;
                }
              }
            }

          }
        }

        /* 用户和游客样式 */
        .header-user {}
      }


    }
  }
</style>