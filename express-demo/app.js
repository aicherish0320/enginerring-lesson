const express = require('express')

const app = express()

// 中间件第一个参数为回调函数时，则针对所有请求生效

// 中间件：处理请求的业务逻辑
app.use((req, res, next) => {
  console.log('before middleware')

  next()
})

// 路由中间件：第一个参数为匹配路由，第二个参数为回调函数
app.use('/test', (req, res, next) => {
  res.send('test')
  throw new Error('error')
  next()
})

app.get('/html', (req, res, next) => {
  res.end(`<h1 style='color: red'>html</h1>`)
  next()
})

app.use((req, res, next) => {
  console.log('after middleware')
})

// 异常中间件：回调函数包含了 4 个参数
// 注意事项：
// 1. 异常中间件全局只包含一个
// 2. 异常中间件可以传递给普通中间件
// 3. 异常中间件需要放在所有中间件的最后
app.use((err, req, res, next) => {
  console.error('error：', err.message)
})

app.listen(3001, () => console.log('port 3001'))
