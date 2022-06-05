# Webpack 快速上手

## Webpack 核心概念

- entry：入口模块文件路径
- output：输出 bundle 文件路径
- module：模块，webpack 构建对象
- bundle：输出文件，webpack 构建产物
- chunk：中间文件，webpack 构建的中间产物
- loader：文件转换器
- plugin：插件，执行特定任务

### Loader

处理文件转换类型

### plugin

webpack 构建生命周期功能定制问题，webpack 本身就是一个构建过程的状态机，其自身的核心功能也是构建在 loader 和 plugin 的机制上

文件压缩、文件变更、定制

### webpack hooks

- compiler
- compilation
