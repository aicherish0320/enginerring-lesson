const { api, handle, x } = require('./api')
require('./api')
const sum = require('./sum')

const data = api()
const a = handle(data, 'a')
const b = handle(data, 'b')
const c = sum(a, b)

console.log(x)
x = 123 // error
console.log(x)
