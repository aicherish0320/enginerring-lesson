const express = require('express')
const https = require('https')
const fs = require('fs')
const path = require('path')

const app = express()

// https 服务
const options = {
  key: fs.readFileSync(path.resolve(__dirname, './https/private.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, './https/file.crt'))
}

const httpsServer = https.createServer(options, app)

// 静态服务
app.use('/static', express.static('./static'))

// 中间件：处理请求的业务逻辑
// 中间件的第一个参数为函数时，则针对所有的请求
// app.use(function (req, res, next) {
//   console.log('before middleware')
//   next()
// })
// 路由中间件：第一个参数为匹配路由
app.use('/test', function (req, res, next) {
  res.send('<h1 style="color: cyan">test</h1>')
  next()
})

app.get('/', function (req, res, next) {
  res.send('<h1 style="color: green">Hello</h1>')
  next()
})

app.use(function (req, res, next) {
  console.log('after middleware')
})
// 全局异常捕获
process.on('uncaughtException', function (error) {})
// promise error
process.on('unhandledRejection', function (error) {})

app.listen(3330, () => {
  console.log('http 3330 port')
})

httpsServer.listen(3331, () => {
  console.log('https 3331 port')
})
