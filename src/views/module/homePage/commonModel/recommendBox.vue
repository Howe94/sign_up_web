<template>
    <div i="recommend-index">
        <div class="recommend-box">
            <!-- 右侧信息  登录用户的信息-->
            <div class="sign-up-info recommend-item">
                <common-form-title title="关于我"></common-form-title>
                <div class="user-box">
                    <span class="user-name author-item">{{userInfo.user_name}}</span>
                    <p class="user-motto author-item">{{userInfo.user_motto}}</p>
                    <div class="article_info author-item">
                        <p>博客总数：<span>{{userInfo.article_count}}</span></p>
                        <p>博客阅读量：<span>{{userInfo.article_views_count}}</span></p>
                        <p>热门博客：<span>{{userInfo.article_title_more}}</span></p>
                    </div>
                </div>
            </div>
            <!-- 常驻信息 文章分类-->
            <div class="article-sort recommend-item">
                <common-form-title title="文章分类"></common-form-title>
                
            </div>
            <!-- 常驻信息 标签分类-->
            <div class="tag-summary recommend-item">
                <common-form-title title="热门标签"></common-form-title>
                
            </div>

        </div>
    </div>
  </template>
  
  <script>
      import commonFormTitle from "@/components/commonFormTitle";
    export default {
      name: "recommendBox",
      props: {},
      data() {
        return {
            userInfo: {
                user_name:"豪宗超",
                user_id:"23",
                user_motto:"天道酬寻，为我则坤",//座右铭
                article_count:23,//博客文章总数
                article_views_count:10000,//文章总阅读量
                article_title_more:"前端开发手迹"
            },//用户信息
            //文章分类
            articleSortList:[
                {
                    sort_name:"前端",
                    sort_id:"23",
                    article_num:22,//文章总数
                },
                {
                    sort_name:"后端",
                    sort_id:"13",
                    article_num:42,//文章总数
                },
                {
                    sort_name:"数据库",
                    sort_id:"13",
                    article_num:16,//文章总数
                },
                {
                    sort_name:"Javascript",
                    sort_id:"13",
                    article_num:2,//文章总数
                },
                {
                    sort_name:"Vue",
                    sort_id:"13",
                    article_num:8,//文章总数
                },
            ]
        };
      },
      components: {commonFormTitle},
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
    [i="recommend-index"] {
        .recommend-box{
            .recommend-item{
                min-height: 200px;
                padding:10px;
                background: $color-background;
                border-radius: 4px;
                &:not(:last-child){
                    margin-bottom: 20px ;
                }
            }
            .sign-up-info .user-box{
                .author-item{
                    padding: 10px 0;
                }
                .user-name{
                    font-size: 18px;
                    font-weight:600;
                }
                .user-motto{
                    font-size: 12px;
                }
                .article_info{
                    text-align: left;
                }
            }
        }
    }
  
  </style>