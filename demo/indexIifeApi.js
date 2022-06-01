;(function (global) {
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

  global.__Module_API = {
    obj,
    getX,
    api,
    handle,
    sum
  }
})(window)
