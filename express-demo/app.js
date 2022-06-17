const express = require('express')

const app = express()

app.get('/hello', (req, res) => {
  res.end('hello')
})

app.get('/html', (req, res) => {
  res.end(`<div style='color: red'>html</div>`)
}) 

app.listen(3001, () => console.log('port 3001'))
