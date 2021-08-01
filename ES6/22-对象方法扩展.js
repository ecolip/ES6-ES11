// 对象方法扩展
// 1、Object.is 判断两个值是否完全相等
console.log(Object.is(10, 20))

// 2、Object.assign 对象合并
const obj1 = {
  name: 'username'
}
const obj2 = {
  name: 'zhishouh'
}
console.log(Object.assign(obj1, obj2))

// 3、Object.setPrototypeOf 设置原型对象
const gd = {
  name: '广东'
}
const place = {
  places: ['广州', '深圳', '汕尾', '海丰']
}
Object.setPrototypeOf(gd, place)
console.log(gd.places)
