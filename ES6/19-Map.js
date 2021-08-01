// Map
const m = new Map()

// 添加元素
m.set('姓名', '黄智守')
m.set('兴趣', function () {
  console.log('看综艺！')
})
const key = {
  test: 'testtt'
}
m.set(key, [1, 2, 3])
console.log(m)

// 删除
m.delete(key)
console.log(m)

// 获取
console.log(m.get('姓名'))

// 清空
// m.clear()
// console.log(m)

// 遍历
for (const v of m) {
  console.log(v)
}
