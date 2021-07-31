// 数值扩展

// 1、Number.EPSILON 最小精度
function equal (a, b) {
  if (Math.abs(a - b) < Number.EPSILON) {
    return true
  } else {
    return false
  }
}
console.log(equal(0.1 + 0.2, 0.3))

// 2、Number.isFinite 检测是否为有限数
console.log(Number.isFinite(100))
console.log(Number.isFinite(Infinity))

// 3、进制
const b = 0b1010 // 二进制
const o = 0o777 // 八进制
const d = 100 // 十进制
const x = 0xff // 十六进制
console.log(b)
console.log(o)
console.log(d)
console.log(x)

// 4、Number.isNaN 检测是否为非数值
console.log(Number.isNaN(10))

// 5、Number.parstInt Number.parstFloat 转化为数值
console.log(Number.parseInt('1234l'))
console.log(Number.parseFloat('1234.1l'))

// 6、Number.isInterger判断一个数是否为整数
console.log(Number.isInteger(10.1))

// 7、Math.trunc将数值中的小数抹掉
console.log(Math.trunc(10.2))

// 8、Math.sign判断正 负 0
console.log(Math.sign(10))
console.log(Math.sign(0))
console.log(Math.sign(-10))
