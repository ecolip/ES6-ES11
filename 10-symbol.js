// Symbol--原始数据类型

// 创建symbol
// const s = Symbol('z')
// console.log(s)

// const s1 = Symbol('Z')
// const s2 = Symbol('Z')
// console.log(s1 === s2)

// const s3 = Symbol.for('z')
// const s4 = Symbol.for('z')
// console.log(s3 === s4)

// 不能运算
// console.log(s + s1) // Cannot convert a Symbol value to a number

// 对象添加symbol类型的属性
// const game = {
//   name: 'FIFA',
//   [Symbol('player')]: function () {
//     console.log('我是玩家')
//   },
//   [Symbol('football')]: function () {
//     console.log('我是个球')
//   }
// }
// console.log(game)
