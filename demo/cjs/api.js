const handle = require('./handle')

console.log('api')

var x = 1

function api() {
  return {
    code: 0,
    data: {
      a: 1,
      b: 2
    }
  }
}

module.exports = {
  api,
  handle,
  x
}
