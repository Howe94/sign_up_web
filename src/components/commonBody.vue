<template>
  <div i="common-body-index">
    <div class="body-content">
      <slot name="content"></slot>
      <!--是否需要分栏-->
      <template v-if="isColumn">
        <div class="main-content">
          <div class="content-left content-item" :style="{width:'calc(100% - 20px - '+ rightWidth +')'}">
            <slot name="left"></slot>
          </div>
          <div class="content-right content-item" :style="{width:rightWidth}">
            <slot name="right"></slot>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: "commonBody",
    data(){
      return {}
    },
    props: {
      isColumn: {
        type: Boolean,
        default: false, // 是否左右布局
      },
      rightWidth: {
        type: String,
        default: '380px'
      }

    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  [i="common-body-index"] {
    /* 禁止复制文本 */
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    min-height: 100%;
    .body-content {
      padding: 40px 160px;
      min-height: inherit;
      .content-item {
        display: inline-block;
        min-height: inherit;
      }
    }

  }

</style>