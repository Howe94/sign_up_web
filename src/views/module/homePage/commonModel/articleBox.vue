<template>
  <div i="article-box-index">
    <div class="article-box-content">
      <el-card class="article-card" v-for="(item,index) in articleList" :key="index">
        <div slot="header" class="card-header">
          <h2 class="article-title">{{item.article_tilte}}</h2>
          <div class="article-info">
            <span class="author"><i class="el-icon-s-custom"></i>{{item.user_name}}</span>
            <span><i class="el-icon-date"></i>{{item.last_update_time}}</span>
            <span><i class="el-icon-view"></i>{{item.article_comment_count}}</span>
          </div>
        </div>
        <div class="card-body">
          <div class="article-img" v-if="index === 0">
            <img :src="item.article_image" alt="">
          </div>
          <p class="article-content">
            {{item.article_content}}
          </p>
        </div>
        <div class="card-footer">
          <el-button style="float: right; padding: 3px 0" type="text">阅读更多</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: "articleBox",
    props: {},
    data() {
      return {
        articleList: [
          {
            article_id: "1",
            user_id: "232",
            user_name: "howe",
            article_tilte: "k8s+jenkins自动部署前后台",
            article_image: "https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200427163531.jpg",
            article_content: "很多人喜欢选择APP或网站中的深色模式，也许他们更喜欢这样的外观，或者他们想让自己的眼睛免受疲劳。很多人喜欢选择APP或网站中的深色模式，也许他们更喜欢这样的外观，或者他们想让自己的眼睛免受疲劳。这篇文章将告诉你如何在网站中实现一个自动的CSS深色模式，根据访客的系统主题来自动响应。很多人喜欢选择APP或网站中的深色模式，也许他们更喜欢这样的外观，或者他们想让自己的眼睛免受疲劳。",
            article_views: 10,
            article_comment_count: 12,//评论总数
            article_create_date: "2020-03-28",//博客发表时间
            last_update_time: "2020-03-28",//最新更新时间
            article_like_count: 50,//博客点赞数
          },
          {
            article_id: "2",
            user_id: "232",
            user_name: "howe",
            article_tilte: " 如何根据系统主题自动响应CSS深色模式",
            article_image: "https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200427163531.jpg",
            article_content: "很多人喜欢选择APP或网站中的深色模式，也许他们更喜欢这样的外观，或者他们想让自己的眼睛免受疲劳。这篇文章将告诉你如何在网站中实现一个自动的CSS深色模式，根据访客的系统主题来自动响应。",
            article_views: 10,
            article_comment_count: 12,//评论总数
            article_create_date: "2020-03-28",//博客发表时间
            last_update_time: "2020-03-28",//最新更新时间
            article_like_count: 50,//博客点赞数
          }
        ]
      };
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
  [i="article-box-index"] {
    .article-box-content {
      text-align: left;

      .article-card {
        margin-bottom: 20px;
        padding: 0 20px;

        .el-card__header {
          padding: 10px 0;

          .card-header {
            .article-title {
              display: inline-block;
              cursor: pointer;
              font-size: 1.4rem;
              font-weight: 500;
              margin: 4px 0;
              &:hover{
                color: $color-dominant;
              }
            }

            .article-info {
              font-size: 12px;
              span {
                i{
                  color: $color-dominant;
                  margin-right: 5px;
                }
                &:not(:nth-of-type(0)) {
                  margin-right: 12px;
                }
                &.author{
                  &:hover{
                    cursor: pointer;
                  color: $color-dominant;
                  font-weight:600;
                  }
                }
              }
            }
          }
        }

        .el-card__body{
          padding: 20px 0;
          .card-body {
            .article-img {
              text-align: center;
              img {
                width: 500px;
              }
            }
            .article-content{
              color: $color-texts-2;
              text-overflow: -o-ellipsis-lastline;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              line-clamp: 2;
              -webkit-box-orient: vertical;
            }
          }
        }
        .card-footer{
          padding: 5px 0 20px;
          .el-button{
            font-size: 16px;
          }

        }

      }

    }
  }

</style>