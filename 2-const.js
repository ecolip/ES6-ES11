// cosnt 声明常量

// 1、一定要赋初始值
// const NAME = 'ZHISHOUH'
// console.log(NAME)
// const AGE;
// console.log(AGE)  // Missing initializer in const declaration

// 2、一般常量用大写
// const TEST = 'test'

// 3、常量的值不能修改
// const age = 19
// age = 20 // Assignment to constant variable
// console.log(age)

// 4、块级作用域
// {
//   const AGE = 19
// }
// console.log(AGE) // AGE is not defined

// 5、对于数组、对象的修改，不算是对常量的修改，不会报错
// const ARRTEST = [1, 2, 3]
// ARRTEST.push(4)
// console.log(ARRTEST)

// const PERSON = {
//   name: 'zhishouh',
//   age: 20,
//   hobby: 'football'
// }
// PERSON.age = 19
// console.log(PERSON.age)
