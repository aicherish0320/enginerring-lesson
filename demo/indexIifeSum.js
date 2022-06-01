;(function (global, api) {
  // 数据运算
  function sum(a, b) {
    return a + b
  }

  global.__Module = {
    api: api,
    sum
  }
})(window, window.__Module_API)

const m = window.__Module
const data = m.api.api()
const a = m.api.handle(data, 'a')
const b = m.api.handle(data, 'b')

const c = m.sum(a, b)
console.log(c)
