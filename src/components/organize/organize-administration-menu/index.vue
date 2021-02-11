<template>
  <div i="organize-administration-menu">
    <div class="organize-administration-menu-main" v-if="module==='administration-sync'">
      <!-- 加载中 -->
      <loading ref='loading'></loading>
      <div class="tree-boxes">
        <el-tree
            v-if="refreshTreeLeft"
            :data="organizeData"
            node-key="uuid"
            icon-class="fa fa-chevron-down"
            :props="lazyPropsLeft"
            :load="getLoadOrganizeTree"
            :expand-on-click-node="false"
            @node-expand="organizeExpand"
            :lazy="lazyType"
            show-checkbox
            :check-strictly="true"
            ref="organizeTemplateTree">
        </el-tree>
      </div>
    </div>

    <div class="organize-administration-menu-main" v-if="module==='digitalgd-sync'">
      <div class="tree-boxes">
        <el-tree
            v-if="refreshTreeRight"
            :data="synchronizationData"
            node-key="uuid"
            icon-class="fa fa-chevron-down"
            :props="lazyPropsRight"
            highlight-current
            :expand-on-click-node="false"
            default-expand-all
            @node-click="syncCheckedTree"
            ref="syncTemplateTree">
          <div class="tree-content-boxes" slot-scope="{ node, data }">
            <div class="el-tree-node__label">
              <span class="el-tree-label-loop"></span>
              <span>{{ node.data.name }}</span>
            </div>
            <div class="plus-boxes" v-if="node.data.toMount">
              <img src="~images/icon-new.png" alt="待挂载数据">
            </div>
          </div>

        </el-tree>
      </div>
    </div>

  </div>
</template>

<script>
  /* 接口地址 */
  import * as Service from './service.js';

  export default {
    name: 'organize-administration-menu',
    data() {
      return {
        //重新刷新左侧组织树
        refreshTreeLeft: true,
        //重新刷新右侧组织树
        refreshTreeRight: true,
        //组织
        organizeData: [],

        //懒加载状态
        lazyType: true,

        lazyPropsLeft: {
          children: 'children',
          label: 'name',
          disabled: this.disabledFun
        },

        lazyPropsRight: {
          children: 'children',
          label: 'name',
        },

        //右侧组织机构树
        synchronizationData: [],

        //待同步组织节点信息
        staySyncNode: {},
      }
    },

    props: {
      module: String,
      addSyncData: {
        type: Array,
        default: () => {
          return []
        }
      }
    },

    /* 组件实例刚创建，组件属性计算之前 */
    beforeCreate() {
    },

    /* 组件实例创建完成，属性已绑定，但是DOM还未生成，$el属性还不存在 */
    created() {
      const that = this;
    },

    /* 模板编译/挂载之后 */
    mounted() {
      const that = this;
      that.$nextTick(() => {
        that.init();
      })
    },

    methods: {
      //树节点 disabled 设置已加入清单的为禁用状态
      disabledFun(data, node) {
        const that = this;
        let disabled = false;
        that.addSyncData.filter(item => {
          if (item.uuid === data.uuid) {
            disabled = true;
          }
        });
        return disabled

      },
      //初始化操作
      init() {
        const that = this;
        that.module === 'digitalgd-sync' ? that.getLoadSyncTree() : null;
      },

      /**************************************区域单位**************************************/

      //获取区域树
      getLoadOrganizeTree(node, resolve) {
        const that = this;

        let params = {
          deptCode: node.data.deptCode || null,
        };

        Service.getDeptChildren(params).then(res => {
          if (res) {

            let data = JSON.parse(JSON.stringify(res));

            let assembleData = [];
            data.constructor === Array ? assembleData = data : assembleData.push(data);
            return resolve(assembleData);
          }
        }).catch(err => {
          if (err) {
            that.$notify.error({
              title: '错误',
              message: err.message
            });
          }
        });
      },

      //区域树展开
      organizeExpand() {
        const that = this;
        setTimeout(() => {
          that.setCheckedNodes()
        }, 500)
      },

      /************************* 仅同步选中的数据到待同步清单 ****************************/
      //获取选中的区域数组
      getCheckedNodes() {
        const that = this;

        let _checkAreaData = [];
        let checkAreaData = that.$refs.organizeTemplateTree.getCheckedNodes();
        //过滤未加入清单的节点
        checkAreaData.forEach(item => {
          let result = that.addSyncData.some(syncItem => syncItem.uuid === item.uuid);
          if (!result) {
            _checkAreaData.push(item);
          }
        });
        if (_checkAreaData.length === 0) {
          that.$notify.info({
            title: "提示",
            message: "请选择要加入待同步清单数据！"
          });
        }
        return _checkAreaData;
      },
      //设置选中状态
      setCheckedNodes() {
        const that = this;
        that.$nextTick(() => {
          that.$refs.organizeTemplateTree.setCheckedNodes(that.addSyncData);
        });
      },

      /************************* 同步选中的数据的子部门到待同步清单 ****************************/

      //获取key值
      getCheckedKeys() {
        return new Promise((resolve) => {
          const that = this;

          let checkKeyList = [];
          //获取选中的节点数组
          let checkNodes = that.$refs.organizeTemplateTree.getCheckedNodes();

          //过滤未加入清淡的节点
          checkNodes.forEach(item => {
            let result = that.addSyncData.some(syncItem => syncItem.uuid === item.uuid);
            if (!result) {
              checkKeyList.push(item.deptCode);
            }
          });

          if (checkKeyList.length !== 0) {
            that.getDeptList(checkKeyList.toString()).then(res => {
              if (res) {
                resolve(res);
              }
            });
          } else {
            that.$notify.info({
              title: "提示",
              message: "请选择要加入待同步清单数据！"
            })
          }

        })
      },


      /**************************************选择下级单位**************************************/

      //获取部门子集的同步单位。
      getDeptList(deptCodes) {
        return new Promise((resolve) => {
          const that = this;
          that.loadingStart();//请求延迟的问题
          let params = {
            ids: deptCodes || ''
          };
          Service.getDeptAllList(params).then(res => {
            if (res) {
              that.loadingEnd();//清除加载动画
              let data = JSON.parse(JSON.stringify(res));
              resolve(data);
            }
          }).catch(err => {
            if (err) {
              that.$notify.error({
                title: '错误',
                message: err.message
              });
            }
          });
        })

      },


      /**************************************组织架构**************************************/

      getLoadSyncTree() {
        const that = this;

        let params = {};

        Service.getDeptTree(params).then(res => {
          if (res) {
            that.synchronizationData = JSON.parse(JSON.stringify(res));
          }
        }).catch(err => {
          if (err) {
            that.$notify.error({
              title: '错误',
              message: err.message
            });
          }
        });
      },

      //点击组织架构树
      syncCheckedTree(data, checked, indeterminate) {
        const that = this;

        that.staySyncNode = data;
      },

      //挂载节点操作
      setMountChild(childrenNodes) {
        const that = this;
        Object.prototype.hasOwnProperty.call(that.staySyncNode, "uuid") ? that.addMount(childrenNodes, that.staySyncNode) : that.$notify.info({
          title: "提示",
          message: "请选择要挂载的节点！"
        });
      },

      //挂载合并到节点的children
      addMount(nodes, data) {
        const that = this;

        let mountData = []; //挂载数据集合，用于返回做数据缓存
        for (let item of nodes) {
          //如果存在就删除已经挂载再节点上的 数据
          if (item.uuid !== data.uuid) {
            that.$refs.syncTemplateTree.remove(item);
            item.areaCode = data.areaCode;
            item.parentCode = data.deptCode ? data.deptCode : "ROOT";
            item.parentName = data.name;
            item.children = [];//默认初始化的是空
            that.$refs.syncTemplateTree.updateKeyChildren(data.uuid, data.children.concat(item));
            mountData.push(Object.assign(item, {'isMount': true}));
          } else {
            that.$notify.info({
              title: "提示",
              message: "挂载目标和要挂载的节点一致，请重新选择！"
            });
            return;
          }
        }
        that.$emit("get-update-synchro", mountData);
      },

      //取消挂载
      removeMount(nodes) {
        const that = this;

        for (let item of nodes) {
          that.$refs.syncTemplateTree.remove(item);
        }

      },

      //更新树节点
      updataOrganizeTree(updateData) {
        const that = this;
        updateData.map((item) => {

          that.refreshTreeRight = false;
          that.getUpdateNode(that.synchronizationData, item.uuid);
          that.$nextTick(() => {
            that.refreshTreeRight = true;
          })
        })
      },
      //递归遍历树节点数据
      getUpdateNode(nodes, updateKey) {
        const that = this;
        nodes.forEach(nodeItem => {
          if (nodeItem.uuid == updateKey) {
            return Object.assign(nodeItem, {toMount: false});
          }
          that.getUpdateNode(nodeItem.children, updateKey);
        })
      }

      /**************************************添加下级单位**************************************/


    },
    watch: {
      addSyncData(val) {
        this.setCheckedNodes();
      }
    },
    components: {},
    filters: {},
  }
</script>

<style rel="stylesheet/scss" lang="scss">

  [i="organize-administration-menu"] {
    width: 100%;
    height: -webkit-calc(100% - 92px);
    height: -moz-calc(100% - 92px);
    height: calc(100% - 92px);
    position: relative;

    /* 禁止复制文本 */
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;

    .organize-administration-menu-main {
      width: 100%;
      height: 100%;
      position: relative;

      /* tree */
      .tree-boxes {
        width: 100%;
        height: 100%;
        background-color: $color-white;
        position: relative;
        overflow-y: auto;
        overflow-x: scroll;

        .el-tree {
          min-width: 100%;
          display: inline-block !important;


          .tree-content-boxes {
            width: 100%;
            position: relative;
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            align-items: center;

            .plus-boxes {
              width: 15px; /*no*/
              height: 15px; /*no*/
              line-height: 15px; /*no*/
              text-align: center;
              margin-left: 10px; /*no*/
              /* position: absolute;
               top: 50%;
               right: 30px; !*no*!
               -webkit-transform: translate(0, -50%);
               -ms-transform: translate(0, -50%);
               transform: translate(0, -50%);*/
              img {
                width: 100%;
              }
            }


          }
        }

        /* 原始 */
        .el-tree-node.is-focusable {
          .el-tree-node__content {
            padding-right: 20px; /*no*/

            .el-tree-node__label {
              font-size: 14px; /*no*/
              font-weight: 600;
            }
          }

          //二级
          .el-tree-node__children {
            .el-tree-node.is-focusable {
              .el-tree-node__content {
                .el-tree-node__label {
                  font-size: 14px; /*no*/
                  font-weight: 400;
                }
              }
            }

            .el-tree-node.is-expanded.is-focusable {

              //三级
              .el-tree-node__children {
                .el-tree-node.is-focusable {
                  .el-tree-node__content {
                    .el-tree-node__label {
                      font-size: 14px; /*no*/
                      font-weight: 400;
                    }
                  }
                }
              }
            }

            //二级点击
            .el-tree-node.is-current.is-focusable {

              .el-tree-node__content {

                .el-tree-node__label {
                  font-size: 14px; /*no*/
                  font-weight: 600 !important;
                  color: $color-texts-1;
                }
              }

              .el-tree-node__children {
                .el-tree-node.is-focusable {
                  .el-tree-node__content {
                    .el-tree-node__label {
                      font-size: 14px; /*no*/
                      font-weight: 400 !important;
                      color: $color-texts-3;
                    }
                  }
                }
              }
            }
          }
        }

        .el-tree-node__expand-icon {
          -webkit-transform: rotateZ(-90deg);
          -ms-transform: rotate(-90deg);
          transform: rotateZ(-90deg);
        }

        /* 改变旋转方向 */

        //一级
        .el-tree-node.is-expanded.is-focusable {
          .el-tree-node__content {
            .el-tree-node__label {
              font-size: 14px; /*no*/
              font-weight: 600;
            }

            .el-tree-node__expand-icon.fa.fa-chevron-down {
              -webkit-transform: rotateZ(0deg);
              -ms-transform: rotate(0deg);
              transform: rotateZ(0deg);
            }
          }

          //二级
          .el-tree-node__children {
            .el-tree-node.is-focusable {
              .el-tree-node__content {
                .el-tree-node__label {
                  font-size: 14px; /*no*/
                  font-weight: 400;
                }

                .el-tree-node__expand-icon.fa.fa-chevron-down {
                  -webkit-transform: rotateZ(-90deg);
                  -ms-transform: rotate(-90deg);
                  transform: rotateZ(-90deg);
                }
              }
            }

            .el-tree-node.is-expanded.is-focusable {
              .el-tree-node__content {
                .el-tree-node__expand-icon.fa.fa-chevron-down {
                  -webkit-transform: rotateZ(0deg);
                  -ms-transform: rotate(0deg);
                  transform: rotateZ(0deg);
                }
              }

              //三级
              .el-tree-node__children {
                .el-tree-node.is-focusable {
                  .el-tree-node__content {

                    .el-tree-node__label {
                      font-size: 14px; /*no*/
                      font-weight: 400;
                    }

                    .el-tree-node__expand-icon.fa.fa-chevron-down {
                      -webkit-transform: rotateZ(-90deg);
                      -ms-transform: rotate(-90deg);
                      transform: rotateZ(-90deg);
                    }
                  }
                }

                .el-tree-node.is-expanded.is-focusable {
                  .el-tree-node__content {
                    .el-tree-node__expand-icon.fa.fa-chevron-down {
                      -webkit-transform: rotateZ(0deg);
                      -ms-transform: rotate(0deg);
                      transform: rotateZ(0deg);
                    }
                  }

                  //四级
                  .el-tree-node__children {
                    .el-tree-node.is-focusable {
                      .el-tree-node__content {
                        .el-tree-node__expand-icon.fa.fa-chevron-down {
                          -webkit-transform: rotateZ(-90deg);
                          -ms-transform: rotate(-90deg);
                          transform: rotateZ(-90deg);
                        }
                      }
                    }

                    .el-tree-node.is-expanded.is-focusable {
                      .el-tree-node__content {
                        .el-tree-node__expand-icon.fa.fa-chevron-down {
                          -webkit-transform: rotateZ(0deg);
                          -ms-transform: rotate(0deg);
                          transform: rotateZ(0deg);
                        }
                      }

                      //五级
                      .el-tree-node__children {
                        .el-tree-node.is-focusable {
                          .el-tree-node__content {
                            .el-tree-node__expand-icon.fa.fa-chevron-down {
                              -webkit-transform: rotateZ(-90deg);
                              -ms-transform: rotate(-90deg);
                              transform: rotateZ(-90deg);
                            }
                          }
                        }

                        .el-tree-node.is-expanded.is-focusable {
                          .el-tree-node__content {
                            .el-tree-node__expand-icon.fa.fa-chevron-down {
                              -webkit-transform: rotateZ(0deg);
                              -ms-transform: rotate(0deg);
                              transform: rotateZ(0deg);
                            }
                          }

                          //六级
                          .el-tree-node__children {
                            .el-tree-node.is-focusable {
                              .el-tree-node__content {
                                .el-tree-node__expand-icon.fa.fa-chevron-down {
                                  -webkit-transform: rotateZ(-90deg);
                                  -ms-transform: rotate(-90deg);
                                  transform: rotateZ(-90deg);
                                }
                              }
                            }

                            .el-tree-node.is-expanded.is-focusable {
                              .el-tree-node__content {
                                .el-tree-node__expand-icon.fa.fa-chevron-down {
                                  -webkit-transform: rotateZ(0deg);
                                  -ms-transform: rotate(0deg);
                                  transform: rotateZ(0deg);
                                }
                              }

                              //七级
                              .el-tree-node__children {
                                .el-tree-node.is-focusable {
                                  .el-tree-node__content {
                                    .el-tree-node__expand-icon.fa.fa-chevron-down {
                                      -webkit-transform: rotateZ(-90deg);
                                      -ms-transform: rotate(-90deg);
                                      transform: rotateZ(-90deg);
                                    }
                                  }
                                }

                                .el-tree-node.is-expanded.is-focusable {
                                  .el-tree-node__content {
                                    .el-tree-node__expand-icon.fa.fa-chevron-down {
                                      -webkit-transform: rotateZ(0deg);
                                      -ms-transform: rotate(0deg);
                                      transform: rotateZ(0deg);
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }

            //二级点击
            .el-tree-node.is-current.is-focusable {

              .el-tree-node__content {

                .el-tree-node__label {
                  font-size: 14px; /*no*/
                  font-weight: 600 !important;
                  color: $color-texts-1;
                }
              }

              .el-tree-node__children {
                .el-tree-node.is-focusable {
                  .el-tree-node__content {
                    .el-tree-node__label {
                      font-size: 14px; /*no*/
                      font-weight: 400 !important;
                      color: $color-texts-3;
                    }

                  }
                }
              }
            }
          }
        }

        /* 点击方向 */
        //一级点击
        .el-tree-node.is-current.is-focusable {
          .el-tree-node__content {

            .el-tree-node__label {
              font-size: 14px; /*no*/
              font-weight: 600;
              color: $color-texts-1;
            }
          }

          .el-tree-node__children {
            .el-tree-node.is-focusable {
              .el-tree-node__content {
                .el-tree-node__label {
                  font-size: 14px; /*no*/
                  font-weight: 400;
                  color: $color-texts-3;
                }

              }
            }
          }
        }

        .el-tree-node {
          .el-tree-node__content {
            height: 40px; /*no*/
            font-size: 14px; /*no*/
            color: $color-texts-3;
          }

          .el-tree-node__children {
            .el-tree-node__children {
              .el-tree-node__content {
                font-weight: 500;
              }
            }
          }
        }
      }
    }
  }
</style>
