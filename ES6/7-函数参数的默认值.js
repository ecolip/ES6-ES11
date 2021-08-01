// 函数参数的默认值

// 1、形参初始值
// function fn (a, b, c = 10) {
//   return a + b + c
// }
// console.log(fn(1, 2))

// // 2、与解构赋值结合
// function connect ({ host = 'unlocalhost', username, password, port }) {
//   console.log(host)
//   console.log(username)
//   console.log(password)
//   console.log(port)
// }
// connect({
//   // host: 'localhost',
//   username: 'admin',
//   password: '123123',
//   port: 8080
// })
