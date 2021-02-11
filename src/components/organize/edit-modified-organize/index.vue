<!--修改同步信息-->

<!-- 组织架构同步管理 使用中 -->

<template>
  <div i="edit-modified-organize">
    <div class="wh100 background-transparent transition-boxes-5" :class="{'background-transparency-boxes':isShow}">
      <div class="edit-modified-organize-boxes unified-content-boxes transition-boxes-2" v-if="isReveal">

        <div class="box-title">
          <div class="title-word">
            <span>修改同步信息</span>
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

            <!--第一栏-->
            <el-form-item label="部门名称" prop="name" class="input-boxes width-100">
              <el-input v-model="ruleForm.name" placeholder="请填写部门名称" disabled
                        oninput="if(value.length>36)value=value.slice(0,36)"></el-input>
            </el-form-item>

            <!--第二栏-->
            <el-form-item label="新名称" prop="newName" class="input-boxes width-100">
              <el-input v-model="ruleForm.newName" placeholder="请填写部门名称"
                        oninput="if(value.length>36)value=value.slice(0,36)"></el-input>
            </el-form-item>

            <!--第三栏-->
            <el-form-item label="部门类型" prop="deptType" class="select-boxes width-100">
              <el-select v-model="ruleForm.deptType" placeholder="请选择">
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
  /* 接口地址 */
  import * as Service from './service.js';

  export default {
    name: 'edit-modified-organize',
    data() {
      return {
        data: {},

        ruleForm: {},
        rules: {
          newName: [
            {min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur'},
            {pattern: /^[\u4E00-\u9FA5a-zA-Z\d]+$/, message: '部门名称只能是中文、26个英文字母或者数字组成', trigger: 'blur'}
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
      //选项
      deptOptions: {
        type: Array,
        default: () => {
          return []
        }
      },

      //改变数据
      dataDetails: {
        type: Object,
        default: () => {
          return {}
        }
      },
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
            this.ruleForm = JSON.parse(JSON.stringify(this.dataDetails));
          }, 200)
        }, 0)
      },

      /********************************************************************/

      //提交
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log("修改的数据---this.ruleForm--》",this.ruleForm);
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

        this.$emit('go-signUp-secede', data || null);

        this.data = {};

        this.seeDetails = false;

        this.ruleForm = {};

        setTimeout(() => {
          this.isShow = false;
          this.isReveal = false;
        }, 200)
      },
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

  [i="edit-modified-organize"] {
    width: 100%;
    height: 100%;
    position: relative;

    .edit-modified-organize-boxes {
      width: 560px; /*no*/
      height: 346px; /*no*/
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
