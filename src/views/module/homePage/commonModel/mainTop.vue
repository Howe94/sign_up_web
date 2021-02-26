<template>
  <div i="main-top-index">
    <div class="content-top">
      <h1 class="content-title">TechnologyBrain's Blog </h1>
      <p class="description">IT技术博客，大道至简，砥砺前行</p>
      <div class="recommends">
        <div class="recommend">
          <div class="ih-item circle effect3 bottom_to_top"><a href="#">
            <div class="img"><img src="@/assets/images/operations.png" alt="img"></div>
            <div class="info">
              <h3>运维相关</h3>

              <p>K8s、Docker、zabbix、shell等运维技术</p>
            </div>
          </a></div>
        </div>
        <div class="recommend">
          <div class="ih-item circle effect3 bottom_to_top"><a href="#">
            <div class="img"><img src="@/assets/images/technology.png" alt="img"></div>
            <div class="info">
              <h3>安装部署</h3>

              <p>各组件搭建技术</p>
            </div>
          </a></div>
        </div>
        <div class="recommend">
          <div class="ih-item circle effect3 bottom_to_top"><a href="#">
            <div class="img"><img src="@/assets/images/documentation.png" alt="img"></div>
            <div class="info">
              <h3>踩坑总结</h3>

              <p>技术文档、教程、技巧、总结等文章</p>
            </div>
          </a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "mainTop"
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "~style/common/animation";
  [i="main-top-index"] {

    /* 禁止复制文本 */
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;

    .content-top {
      max-width: 1100px;
      margin: 0 auto;
      color: $color-white;
      margin-top: 3rem;

      .content-title {
        font-size: 3.2rem;
      }

      .description {
        margin: 1.5rem auto;
      }

      /*三大区块样式*/
      .recommends {
        padding: 2rem 0;
        margin-top: 2.5rem;

        .recommend {
          cursor: pointer;
          display: inline-block;
          width: 30%;
          text-align: center;
          text-align: -moz-center;
          text-align: -webkit-center;
        }
      }
    }
  }
</style>