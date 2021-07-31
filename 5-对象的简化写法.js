// 对象的简化写法
const NAME = 'zhishouh'
const change = function () {
  console.log('执行了这个函数')
}
const ALL = {
  NAME,
  change,
  improve () {
    return 1
  }
}
console.log(ALL)
