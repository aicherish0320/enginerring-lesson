# 前端工程化

前端工程化包含从编码、发布到运维的整个前端研发生命周期
前端工程化，把软件工程相关的方法和思想应用到前端开发
前端工程化的目标是提升研发效率、研发质量和访问性能，如：webpack rollup gulp jest

阶段一：前端原生项目工程化架构升级

阶段目标：

- 完成前端原生 JS 项目升级模块化开发 + MVVM 框架
- 掌握并实践 Webpack 各种优化技巧
- 掌握 Vue2 和 Vue3 框架搭建原理和方法

课程安排:

- Webpack 核心概念入门：bundle、chunk、loader、plugin 等
- ZBestPC 商城项目源码分析和工程化痛点分析
- ZBestPC 商城项目从原生 JS 项目升级到 Webpack 工程化开发
- ZBestPC 商城项目升级 Vue2、Vue3 框架开发

课程收获：

- 掌握 Webpack 的基本概念和企业级项目的完整实践过程
- 解决 Webpack 实际应用过程中碰到的各种问题
- 掌握 Vue2 和 Vue3 框架的搭建和升级的具体方法
- 掌握 SPA 和 MPA 架构的区别和搭建方法

前端工程化发展历史
前端工程化是如何一步一步发展到今天的？前端开发模式是如何逐步演化的？

- 1995 -> 发明的 JavaScript
- 2005 Ajax
- 2008 V8 引擎
- 2009 Node.js 发布
- 2010 npm
- 2013 Webpack
- 2013 react
- 2014 vue

前端工程化解决什么问题？

- 前端开发效率、开发规范、访问性能等
  - 问题 1：JS 全局作用域冲突 -> 模块化规范 -> 通过 webpack 打包、npm 上传管理包
  - 问题 2：编码规范问题 -> eslint
  - 问题 3：资源合并和压缩问题
  - 问题 4：高版本 js 预发降级

前端工程化的应用场景

- 前端工程化贯穿整个研发流程，解决研发流程中的问题
- 工程化的核心目标是三点：效率、规范、性能
- 只有了解前端研发流程的痛点，才能够进行诊断和优化
- 需要站在研发场景的角度去思考研发流程痛点

企业前端项目面临的真实问题

- 项目量级增加：几千行代码 => 几万行代码
- 项目数量扩大：几个项目 => 几千个项目
- 项目复杂度高：web 项目 => H5/PC/小程序/服务端/脚手架
- 团队人数增长：几个前端 => 几百个前端

企业前端工程问题解法

- 项目量级增加：模块化(CommonJS、ESM)、npm、webpack
- 项目数量扩大：研发平台、研发脚手架
- 项目复杂度高：工程脚手架（统一解决不同技术栈的工程差异）
- 团队人数增长：研发平台、研发脚手架

企业前端工程化应用场景

- 项目研发模式升级（模块化 + MVVM）
- 工程脚手架
- 研发脚手架
- 项目性能优化

课程三大项目介绍

- ZBestPC 项目架构升级 原生 js => webpack + vue
- vue-elm 项目架构升级 工程架构升级 + 性能优化
- imooc-build 工程化脚手架开发，vie-cli => imooc-build

- 项目研发模式升级
- 工程脚手架
- 研发脚手架
- 项目性能优化

前端工程化核心技术之模块化

- 内容：讲解前端工程化关键技术的实现原理
- 范围：覆盖主流模块化规范：CommonJS、AMD、CMD、ESM
- 目标：对前端工程化知识体系建立基础认知

前端模块化的背景

- 前端模块化是一种标准，不是实现
- 理解模块化是理解前端工程化的前提
- 前端模块化是前端项目规模化的必然结果

什么是前端模块化？

- 将复杂程序根据规范拆分成若干模块，一个模块包括输入和输出
- 模块的内部实现是是私有的，对外暴露接口与其他模块通信

前端模块化的进化过程

- 第一阶段：全局 function 模式，将不同功能封装成不同函数
  - 缺陷： 容易引发全局命名空间冲突
- 第二阶段：全局 namespace 模式，通过对象封装模块
  - 缺陷：外部能够修改模块内部数据
- 第三阶段：IIFE 模式，通过自执行函数创建闭包，解决 namespace 私有化问题
  - 缺陷：无法解决模块间相互依赖问题
- 第四阶段：IIFE 模式增强，支持传入自定义依赖
  - 缺陷：
    - 多依赖传入时，代码阅读困难
    - 无法支持大规模的模块化开发
    - 无特定语法支持，代码简陋

## CommonJS 规范介绍

- Node.js 默认模块化规范，每个文件就是一个模块，有自己的作用域
- Node 中 CJS 模块加载采用同步加载方式
- 通过 require 加载模块，通过 exports 或 module.exports 输出模块

### CommonJS 规范特点

- 所有代码都运行在模块作用域，不会污染全局作用域。
- 模块可以多次加载，第一次加载时会运行模块，模块输出结果会被缓存，再次加载时，会从缓存结果中直接读取模块输出结果。
- 模块加载的顺序，按照其在代码中出现的顺序。
- 模块输出的值是值的拷贝，类似 IIFE 方案中的内部变量

```js
// Node CommonJS 原理
// IIEF
;(function (require, module, exports, __filename, __dirname) {
  // TODO
})(require, module, exports, __filename, __dirname)
```

### CommonJS 模块打包

- 安装 browserify: `npm install browserify -g`
- 模块打包命令：`browserify module_test/cjs/entry.js -o dist/bundle.js`
- 注意，当存在多个模块时，每个模块都需要单独打包

#### browserify 打包原理

- 本质还是通过自执行函数实现模块化
- 将每个模块编号，存入一个对象，每个模块标记依赖模块
- 实现了 require 方法，核心是通过 call 方法调用模块，并传入 require、module、exports 方法，通过 module 存储模块信息，通过 exports 存储模块输出信息

## AMD 规范介绍

- AMD 规范采用非同步加载模块，允许指定回调函数
- Node 模块通常都位于本地，加载速度快，所以适用于同步加载
- 浏览器环境下，模块需要请求获取，所以适用于异步加载
- require.js 是 AMD 的一个具体实现库

## CMD 规范介绍

- CMD 整合了 CommonJD 和 AMD 的优点，模块加载是异步的
- CMD 专门用于浏览器，sea.js 是 CMD 规范的一个实现
- AMD 和 CMD 最大的问题是没有通过语法升级解决模块化

## ESModule 规范介绍

- ESModule 设计理念是希望在编译时就确定模块依赖关系及输入输出
- CommonJS 和 AMD 必须在运行时才能确定依赖和输入、输出
- ESM 通过 import 加载模块，通过 export 输出模块

### CommonJS 和 ESModule 规范对比

- CommonJS 模块输出的是值的拷贝，ES6 模块输出的是值的引用
- CommonJS 模块是运行时加载，ES6 模块是编译时输出接口
- CommonJS 是单个值导出，ES6 module 可以导出多个
- CommonJS 模块为同步加载，ES6 Module 支持异步加载
- CommonJS 的 this 是当前模块，ES6 Module 的 this 是 undefined
- CommonJS 和 ES6 Module 的语法不同

### 脚本和模块比对

- 模块具备更高的开发效率（可读性强、复用高效）
- 脚本具有更高的页面性能（模块文件多、加载速度慢）
- 模块在浏览器中运行会存在兼容性问题，要特别注意

### 浏览器模块化的局限

- 缺乏模块管理能力，模块分散在各个项目中
- 性能加载慢，无法大型项目中直接使用
- 这两个问题是 npm 和 webpack 核心解决的问题

## 前端工程化关键技术之 npm + webpack 原理

### npm 诞生背景

- npm 由程序员 Isaac 发明
- 初步实现思路
  - 集中管理所有模块，所有模块都上传到仓库 registry
  - 模块内创建 package.json 标注模块的基本信息
  - 通过 npm publish 发布模块，上传到 registry
  - 通过 npm install 安装模块，模块安装到 node_modules 目录

#### npm 介绍

- npm 解决的核心问题是模块管理问题
- npm 包含 cli、模块仓库、官网三大部分

#### npm 原理总结

- npm init 创建模块，npm install 安装模块，npm publish 发布模块
- npm link 本地开发，npm config 调整配置，npm run 调用 scripts
- npm 规范：package.json 管理模块信息，node_modules 保存依赖

#### npm 的局限

- npm 只能解决模块的搞笑管理和获取问题
- npm 无法解决性能加载性能问题
- 模块化发明后，制约其广泛应用的因素是性能问题

### webpack 诞生背景

- 最初的 webpack 核心解决的问题就是代码合并与拆分
- webpack 的核心理念是将资源都视为模块，统一进行打包和处理
- webpack 提供了 loader 和 plugins 完成功能扩展

## ZBestPC 项目的问题

- css 和 js 资源多，且全部采用同步加载，渲染时需多次请求和加载，降低页面加载性能
- css 和 js 源码未压缩
- 开发模式陈旧，需要同时维护 html、js 和 css，代码逻辑和结构不清晰，迭代困难
- 项目不支持 source-map，调试困难，手动维护 source-map 成本大

### 项目改造

#### 第一阶段：项目 webpack 改造

- 项目初始化
  - 创建 npm 项目
  - 安装 webpack 依赖
  - 创建 js 入口文件
  - 创建 webpack 配置文件
  - 配置 package.json 的 build 命令
  - 执行 npm run build 打包
- 首页移植
  - 资源文件拷贝
  - 删除 index.html 中的 link 和 script
  - 安装 html-webpack-plugin 插件
  - 配置 html-webpack-plugin
  - 在 src/index.js 中添加 js 引用
  - 调整 index.html 中的图片路径
- 登录页移植
- 进阶操作
