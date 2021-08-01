// 箭头函数 【=>】
// const fn = (a, b) => {
//   return a + b
// }
// const result = fn(1, 2)
// console.log(result)

// 1、箭头函数的this是静态的，this指向函数声明时所在作用域下的this值
// function getName1 () {
//   console.log(this.name)
// }
// const getName2 = () => {
//   console.log(this.name)
// }
// // window.name = 'zhishouh'
// const test = {
//   name: 'zhishou'
// }
// 直接调用
// getName1()
// getName2()
// call调用
// getName1.call(test)
// getName2.call(test)

// 2、不能作为构造函数
// const Person = (name, age) => {
//   this.name = name
//   this.age = age
// }
// const P = new Person('黄', 19)

// console.log(P)

// 3、不能使用arguments变量
// const fn = () => {
//   console.log(arguments)
// }
// fn(1, 2, 3)

// function a () {
//   console.log(arguments)
// }
// a(1, 2, 3)

// 4、简写
// 形参只有一个时，省略()
// 代码块只有一条语句时省略{}，return也要省略
// const fn = n => n + n
// console.log(fn(3))
