// 数组扩展方法 flat与flatMap
const arr = [1, 2, 3, 4, [5, 6, [7, 8, 9]]]
console.log(arr.flat(2))

const arr2 = [1, 2, 3, 4]
const result = arr2.flatMap(item => [item * 10])
console.log(result)
