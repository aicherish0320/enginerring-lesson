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
