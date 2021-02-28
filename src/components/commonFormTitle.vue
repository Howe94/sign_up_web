<!-- 表头样式组件 -->
<template>
  <div class="common-form-title">
    <template v-if="iconClass">
      <div class="form-title-icon">
        <svg-icon :iconClass="iconClass" :className="'common-title-icon '+ iconClass"></svg-icon>
        <span class="title">{{title}}</span>
      </div>
    </template>
    <template v-else>
      <div class="form-title">
        {{title}}
        <slot name="tips"></slot>
      </div>
    </template>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: 'commonFormTitle',
  props: {
    // 标题
    title: {
      type: String,
      default: ''
    },
    // svg的iconClass
    iconClass: {
      type: String,
      default: ''
    }
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.common-form-title {
  text-align: left;
  .form-title {
    height: 24px;
    line-height: 24px;
    padding-left: 14px;
    position: relative;  
    color: $color-dominant;
    font-weight: 600;
    &::after {
      content: ' ';
      position: absolute;
      top: 4px;
      left: 0;
      width: 4px;
      height: 15px;
      background-color: $color-background-2;
    }
  }
  .form-title-icon {
    height: 24px;
    line-height: 24px;
    font-size: 14px;
    font-weight: 600;
    color: $color-dominant;
    padding-left: 26px;
    position: relative;
    .common-title-icon {
      position: absolute;
      top: 2px;
      left: 0;
      width: 20px;
      height: 20px;
    }
  }
}
</style>
