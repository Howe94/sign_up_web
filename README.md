# 项目中心

## 1 项目概述

同步程序项目

## 2 项目开发


### 3.1 接口说明

接口请求地址

- 文档地址：[http://192.168.16.186:8888/swagger-ui.html#/](http://192.168.16.186:8888/swagger-ui.html#/)


### 3.2 项目运行

1、命令运行

```bash
$ npm install   // 下载依赖

$ npm run dev   // 运行项目

$ npm run build  // 打包项目
```

## 目录结构描述

```
├── Readme.md                       帮助文档
├── build                           项目构建(webpack)相关代码
│   ├── build.js                    生产环境构建代码
│   ├── check-versions.js           检查node&npm等版本
│   ├── dev-client.js               热加载相关
│   ├── dev-server.js               构建本地服务器
│   ├── utils.js                    构建配置公用工具
│   ├── vue-loader.conf.js          vue加载器
│   ├── webpack.base.conf.js        webpack基础环境配置
│   ├── webpack.dev.conf.js         webpack开发环境配置
│   └── webpack.prod.conf.js        webpack生产环境配置
├── config                          项目开发环境配置相关代码
│   ├── dev.env.js                  开发环境变量
│   ├── index.js                    项目一些配置变量
│   └── prod.env.js                 生产环境变量
├── dist                            打包后文件
├── src                             源码目录
│   ├── assets                      系统静态源文件
│   │   ├── css                     系统公用的样式库
│   │   └── images                  系统公用图片
│   ├── common                      系统网络
│   │   ├── http                    系统请求方式封装、接口地址
│   │   └── js                      表单请求
│   ├── entry                       多页应用入口
│   │   └── APP                     一级外框
│   ├── components                  系统组件库
│   ├── router                      路由文件
│   ├── views                       页面
│   │   ├── module                  页面内容
│   │   │   ├── account             用户同步
│   │   │   ├── management          同步管理
│   │   │   └── organize            组织架构同步
│   │   └── without                 404                    
│   ├── vuex                        vuex
│   └── main.js                     一级主要引入
├── index.html                      一级入口
├── static                          静态文件，比如一些图片，json数据等
├── .babelrc                        ES6语法编译配置
├── .editorconfig                   定义代码格式
├── .gitignore                      git上传需要忽略的文件格式
├── .postcssrc.js                   css3样式补充
└── package.json                    项目基本信息
```
