export function test1() {
  console.log('test1')
}

export function test2() {
  console.log('test2')
}

// 不满足 treeShaking 条件
export default {
  test1,
  test2
}
