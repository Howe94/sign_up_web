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
              <li :class="['tab-item',{'active-item':selectTabId === item.tabId}]" v-for="(item,index) in tabList"
                  :key="index" @click="handelTab(item)">{{item.tabName}}
              </li>
            </ul>
          </div>
        </div>
        <!-- 用户信息 -->
        <div class="header-user">
          <!-- 未登录，及游客展示的 -->
          <div class="unsign-up" v-if="isLogin">
            <el-button type="primary" round>登录</el-button>
            <el-button type="warning" round>注册</el-button>
          </div>
          <!-- 已登录用户展示的信息 -->
          <div class="sign-up user-info" v-else>
            <el-dropdown @command="handleCommand" placement="bottom-end" class="sp-dropdown">
              <span class="el-dropdown-link user-name">
                {{userInfo.userName}}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown" class="sp-header-dropdown">
                <el-dropdown-item v-for="item in userSettingsList" :command="item.command" :key="item.command">
<!--                  <svg-icon :iconClass="item.iconClass" className="mr10"></svg-icon>-->
                  {{item.name}}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <img src="@/assets/images/header-logo.png" alt="">
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
        isLogin:false, //是is否登录
        userInfo:{
          userName:"豪宗超"
        },//用户信息
        searchTip: "", //搜索的关键字
        tabList: [
          {
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
        ],
        selectTabId: "1",//默认选中第一个
        userSettingsList:[
          {
            command: 'password',
            iconClass: 'user-password',
            name: '修改密码'
          },{
            command: 'logout',
            iconClass: 'user-logout',
            name: '退出登录'
          }
        ]
      }
    },
    components: {},
    /* 组件实例刚刚被创建，组件属性计算之前，data属性为生成 */
    beforeCreate() {
    },

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
      },
      /*//单击选中tabs事件*/
      handelTab(tabItem) {
        const that = this;
        console.log("选中的tab为====》", tabItem);
        that.selectTabId = tabItem.tabId;
      },
      /*用户信息下拉框*/
      handleCommand(){

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
      line-height: 28px;
      transition: transform .3s;
      background: $color-background-1;
      padding: 10px 20px;

      .header-left,
      .header-right {
        display: inline-block;
      }

      /* 头部logo样式 */
      .header-logo {
        cursor: pointer;

        img {
          width: 34px;
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
        right: 20px;

        .header-tab,
        .header-user {
          display: inline-block;
        }

        /* 搜索框和tab样式 */
        .header-tab {
          padding: 0 60px;

          .tab-search-input,
          .tab-content {
            display: inline-block;
            vertical-align: top;
          }

          .tab-search-input {
            .el-input {
              .el-input__inner {
                height: 32px;
                border-radius: 20px;
              }

              .el-input__icon {
                line-height: 32px;
              }
            }

          }

          .tab-content {
            font-size: 18px;
            line-height: 32px;

            .tab-list {
              .tab-item {
                float: left;
                margin-left: 20px;
                cursor: pointer;

                &:hover {
                  color: $color-primary;
                }

                &.active-item {
                  color: #2D4DAB;
                }
              }
            }

          }
        }

        /* 用户和游客样式 */
        .header-user {
          vertical-align: middle;
          .unsign-up {
            .el-button.is-round {
              padding: 8px 14px;
            }
          }
          .sign-up{
            .el-dropdown{
              font-size: 16px;
              color: $color-dominant;
            }
            img{
              margin-left: 10px;
              width: 25px;
              vertical-align: top;
            }
          }
        }
      }


    }
  }
</style>