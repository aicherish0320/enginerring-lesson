import './css/public.css'
import './css/index.css'

import 'jquery'
import './js/public'
import './js/nav'

// treeShaking触发条件
// 1. 通过解构的方法获取方法，可以触发 treeShaking
// 2. 调用的 npm 包必须使用 ESM
// import { get } from 'lodash-es'
// console.log(get({ a: 1 }, 'a'))

// 同一文件的 treeShaking 有触发条件，条件是 mode=production
// import { test1, test2 } from './tools'
// 未使用 test2 也是会 treeShaking
// test1()
