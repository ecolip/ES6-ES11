// 正则扩展-反向断言
const str = 'es666啊啊啊555啦啦啦'
// 正向断言 -- 提取出555
const reg1 = /\d+(?=啦)/
const result1 = reg1.exec(str)
console.log(result1)

// 反向断言
const reg2 = /(?<=啊)\d+/
const result2 = reg2.exec(str)
console.log(result2)
