// const arr1 = [1, 2, 3, 4, 5, 1]
// const arr2 = [3, 4, 5]

// // 交集
// const result = [...new Set(arr1)].filter(item => {
//   const s2 = new Set(arr2)
//   if (s2.has(item)) {
//     return true
//   } else {
//     return false
//   }
// })
// const result = [...new Set(arr1)].filter(item => new Set(arr2).has(item))
// console.log(result)

// // 并集
// const union = [...new Set([...arr1, ...arr2])]
// console.log(union)

// // 差集
// const diff = [...new Set(arr1)].filter(item => !(new Set(arr2).has(item)))
// console.log(diff)
