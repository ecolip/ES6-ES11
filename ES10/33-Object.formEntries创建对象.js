// Object,formEntries创建对象
// 二维数组
const result = Object.fromEntries([
  ['name', 'zhihsouh'],
  ['hobby', 'football']
])
console.log(result) // { name: 'zhihsouh', hobby: 'football' }
// Map
const m = new Map()
m.set('name', 'zhishouh')
m.set('hobby', 'football')
const result2 = Object.fromEntries(m)
console.log(result2)
