// import value, { a, plus } from './entry.js'

// console.log(a) // 1
// plus()
// console.log(a) // 2
// console.log('value >>> ', value)

// import * as m from './entry.js'

// console.log('m >>> ', m.default)
// console.log('m >>> ', m.a)
// console.log('m >>> ', m.plus)

// ES Module 是异步加载的
import('./test.js').then((mod) => {
  console.log(mod)
})
