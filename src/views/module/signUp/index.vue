<template>
  <div i="organize-index">
    <div class="organize-list-boxes">
      投票系统
    </div>
  </div>
</template>

<script>
  /* 接口地址 */
  import * as Service from "./service.js";
  export default {
    name: "organize",
    data() {
      return {};
    },

    /* 组件实例刚创建，组件属性计算之前 */
    beforeCreate() {
    },

    /* 组件实例创建完成，属性已绑定，但是DOM还未生成，$el属性还不存在 */
    created() {
      const that = this;
      //获取字典
      that.initDictionary();
    },

    /* 模板编译/挂载之后 */
    mounted() {
      const that = this;
      that.$nextTick(() => {
      });
    },

    methods: {

      /************************ 初始化字典项 ************************/

      initDictionary() {
        const that = this;
        let params = {
          // page:1,
          // pageCount:1
        };
        Service.getSignUpList(params)
            .then(res => {
              if (res) {
                let data = JSON.parse(JSON.stringify(res));
                this.deptOptions = data;
              }
            })
            .catch(err => {
              if (err) {
                that.$notify.error({
                  title: "错误",
                  message: err.message
                });
              }
            });
      },
    },
    watch: {
    },
    components: {},
    filters: {}
  };
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "~style/common/table";

  [i="organize-index"] {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;

    /* 禁止复制文本 */
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;

    .organize-list-boxes {
      .main-boxes {
        min-width: 925px;
        width: -webkit-calc(100% - 520px); /*no*/
        width: -moz-calc(100% - 520px); /*no*/
        width: calc(100% - 520px); /*no*/
        .table-content-boxes .content-boxes .button-boxes .input-button .el-input {
          width: 160px;

          .el-input__inner {
            border: 1px solid $color-border-3;
            border-radius: 0;
          }
        }
      }

      .site-boxes {
        min-width: 260px;
        background: $color-white;

        .organize-dropdown-btn, .organize-group-btn {
          width: 100%;
          position: absolute;
          bottom: 0px;

          .blue-button {
            height: 32px;
            line-height: 32px;
            text-align: center;
            color: $color-white;
            background-color: $color-background-1;
          }
        }
      }

      .data-entity {
        height: -webkit-calc(100% - 130px); /*no*/
        height: -moz-calc(100% - 130px); /*no*/
        height: calc(100% - 130px); /*no*/
      }
    }
  }
</style>
