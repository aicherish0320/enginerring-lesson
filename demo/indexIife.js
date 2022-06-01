;(function () {
  var obj = { x: 1 }
  function getX() {
    return obj
  }
  // 调用后端接口
  function api() {
    return {
      code: 0,
      data: {
        a: 1,
        b: 2
      }
    }
  }
  // 处理后端接口
  function handle(data, key) {
    return data.data[key]
  }
  // 数据运算
  function sum(a, b) {
    return a + b
  }

  window.__Module = {
    obj,
    getX,
    api,
    handle,
    sum
  }
})()

const m = window.__Module
const data = m.api()
const a = m.handle(data, 'a')
const b = m.handle(data, 'b')

m.obj.x = 33

console.log(m.obj, m.getX())
// ! 函数作用域和对象属性的区别 CommonJS 中也有类似问题

// 都是挂在 window 上
