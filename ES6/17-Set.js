// set集合
const s = new Set()
console.log(s, typeof s)

const s2 = new Set([1, 2, 3, 4, 5, 6, 1, 2])
console.log(s2)

// 元素个数
console.log(s2.size)

// 添加元素
s2.add(7)
console.log(s2)

// 删除元素
s2.delete(2)
console.log(s2)

// 检测元素
console.log(s2.has(3))

// 清空元素
// s2.clear()
// console.log(s2)

// 遍历数据
for (const v of s2) {
  console.log(v)
}
