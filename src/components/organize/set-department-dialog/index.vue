<!--设置部门类型信息-->

<!-- 组织架构同步管理 使用中 -->

<template>
  <div i="organize-department-type">
    <div class="wh100 background-transparent transition-boxes-5" :class="{'background-transparency-boxes':isShow}">
      <div class="organize-synchronization-boxes unified-content-boxes transition-boxes-2" v-if="isReveal">

        <div class="box-title">
          <div class="title-word">
            <span>设置部门类型</span>
          </div>
          <div class="title-icon" @click="goSecede(null)">
            <i class="fa fa-close"></i>
          </div>
        </div>

        <div class="box-form-boxes">
          <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="box-form-content">

            <!--第三栏-->
            <el-form-item label="部门类型" prop="deptType" class="select-boxes width-100">
              <el-select v-model="ruleForm.deptType" placeholder="请选择部门类型">
                <el-option v-for="(item, i) in deptOptions" :key="i" :label="item.name"
                           :value="item.value"></el-option>
              </el-select>
            </el-form-item>

          </el-form>
        </div>

        <div class="box-button-boxes">
          <div class="box-button default-button" @click="resetForm('ruleForm')">关闭</div>
          <div class="box-button primary-button" @click="submitForm('ruleForm')">确定</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'set-department-dialog',
    data() {
      return {
        data: {},

        ruleForm: {
          deptType: '',//部门类型
        },
        rules: {
          deptType: [
            {required: true, message: '部门类型为必选项', trigger: 'change'},
          ],
        },

        /**********************/

        isShow: false,
        isReveal: false,
      }
    },
    props: {
      //第一次
      type: Boolean,

      //部门类型字典
      deptOptions: {
        type: Array,
        default: () => {
          return []
        }
      }

    },
    created() {
      const that = this;

    },
    methods: {
      init() {
        setTimeout(() => {
          this.isShow = true;
          setTimeout(() => {
            this.isReveal = true;
          }, 200)
        }, 0)
      },

      /********************************************************************/

      //提交
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {

            this.goSecede(this.ruleForm);

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

      //取消
      resetForm(formName) {
        this.$refs[formName].resetFields();
        this.goSecede(null);
      },

      //取消/退出
      goSecede(data) {

        this.$emit('go-signUp-depart-type', data || null);

        this.data = {};

        this.ruleForm = {
          deptType: '',//部门类型
        };

        setTimeout(() => {
          this.isShow = false;
          this.isReveal = false;
        }, 200)
      },

      /********************************************************************/

    },
    watch: {
      'type'() {
        const that = this;
        if (that.type) {
          that.init();
        }
      },
    }
  }
</script>

<!--scoped="scoped"去掉  修改Element-->

<style lang="scss">
  @import "~style/common/box";

  [i="organize-department-type"] {
    width: 100%;
    height: 100%;
    position: relative;

    .organize-synchronization-boxes {
      width: 560px; /*no*/
      height: 222px; /*no*/
      background-color: $color-white;
      position: absolute;
      left: 50%;
      top: 50%;
      -moz-transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);

      .box-form-boxes {
        .box-form-content {
          width: 100%;
          position: relative;
        }
      }
    }
  }
</style>
