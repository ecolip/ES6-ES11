// let 声明变量

// 1、不能重复声明
// let name = 'zhishouh'
// let name = 'LaO_Huang'
// console.log(name) // Identifier 'name' has already been declared

// 2、块级作用域
// {
//   let name = 'zhishouh'
// }
// console.log(name)  // name is not defined

// 3、不存在变量提升
// console.log(name) // Cannot access 'name' before initialization
// const name = 'zhishouh'

// 4、不用谢作用域链
// {
//   let name = 'zhishouh'
//   function person () {
//     console.log(name)
//   }
//   person()  // zhishouh
// }
