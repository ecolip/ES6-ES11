// 扩展运算符 【...】 能将数组转化为逗号分隔符的参数序列

// const arr = ['H', 'T', 'T', 'P']
// function fn () {
//   console.log(arguments)
// }
// fn(...arr) // [Arguments] { '0': 'H', '1': 'T', '2': 'T', '3': 'P' }

// 1、数组的合并
// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]
// const arr = [...arr1, ...arr2]
// console.log(arr)

// 2、数组的克隆
// const arr1 = [1, 2, 3]
// const arr2 = [...arr1]
// console.log(arr2)

// 3、将伪数组转化为正数组
