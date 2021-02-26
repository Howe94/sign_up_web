<template>
  <div i="common-body-index">

  </div>
</template>

<script>
  export default {
    name: "commonComponent",
    props: {},
    data() {
      return {};
    },
    components: {},
    watch: {},

    filters: {},
    /* 组件实例刚创建，组件属性计算之前 */
    beforeCreate() {
    },

    /* 组件实例创建完成，属性已绑定，但是DOM还未生成，$el属性还不存在 */
    created() {
      const that = this;
      //获取字典
    },

    /* 模板编译/挂载之后 */
    mounted() {
      const that = this;
      that.$nextTick(() => {
      });
    },
    methods: {}
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  [i="common-body-index"] {
    /* 禁止复制文本 */
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;

  }

</style>