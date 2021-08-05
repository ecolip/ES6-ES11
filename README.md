### ES6-ES11

------

#### 目录

ES6

1、[let声明变量](#ES6-1)

2、[const 声明常量](#ES6-2)

3、[解构赋值](#ES6-3)

4、[字符串模板](#ES6-4)

5、[对象的简化写法](#ES6-5)

6、[箭头函数](#ES6-6)

7、[函数参数的默认值](#ES6-7)

8、[rest参数](#ES6-8)

9、[扩展运算符](#ES6-9)

10、[Symbol](#ES6-10)

11、[迭代器](#ES6-11)

12、[生成器](#ES6-12)

13、[Promise](#ES6-13)

14、[Promise读取文件](#ES6-14)

15、[Promise封装AJAX](#ES6-15)

16、[Promise读取多个文件](#ES6-16)

17、[Set集合](#ES6-17)

18、[Map数据结构](#ES6-18)

19、[class类定义](#ES6-19)

20、[数值扩展](#ES6-20)

21、[对象方法扩展](#ES6-21)

22、[模块化](#ES6-22)

ES7

1、[includes](#ES7-1)

2、[幂远算](#ES7-2)

ES8

1、[async函数和await表达式](#ES8-1)

2、[async与await读取多个文件](#ES8-2)

3、[async与await-AJAX请求](#ES8-3)

4、[ES8对象方法扩展](#ES8-4)

ES9

1、[对象-rest参数和扩展运算符](#ES9-1)

2、[正则扩展-命名捕获分组](#ES9-2)

3、[正则扩展-反向断言](#ES9-3)

4、[正则扩展-dotAll模式](#ES9-4)

ES10

1、[Object.formEntries创建对象](#ES10-1)

2、[字符串的扩展方法](#ES10-2)

3、[数组的扩展方法](#ES10-3)

4、[Symbol扩展](#ES10-4)

ES11

1、[私有属性](#ES11-1)

2、[Promise.allSettled](#ES11-2)

3、[String-prototype.matchAll](#ES11-3)

4、[可选链操作符](#ES11-4)

5、[动态import](#ES11-5)

6、[BigInt类型](#ES11-6)

7、[globalThis](#ES11-7)

------



#### ES6

##### <span id="ES6-1">let声明变量</span>

1. ```javascript
   不能重复声明
   let name = 'zhishouh'
   let name = 'LaO_Huang'
   console.log(name) // Identifier 'name' has already been declared
   ```

2. ```javascript
   块级作用域
   {
     let name = 'zhishouh'
   } 
   console.log(name)  // name is not defined
   ```

3. ```javascript
   不存在变量提升
   console.log(name) // Cannot access 'name' before initialization
   const name = 'zhishouh
   ```

4. ```javascript
   不影响作用域链
   {
      let name = 'zhishouh'
      function person () {
          console.log(name)
      }
      person()  // zhishouh
   }
   ```



#####  <span id="ES6-2">const 声明常量</span>

1. ```javascript
   一定要赋初始值
   const NAME = 'ZHISHOUH'
   console.log(NAME)
   const AGE;
   console.log(AGE)  // Missing initializer in const declaration
   ```

2. ```javascript
   一般常量用大写
   const TEST = 'test
   ```

3. ```javascript
   常量的值不能修改
   const age = 19
   age = 20 // Assignment to constant variable
   console.log(age)
   ```

4. ```javascript
   块级作用域
   {
     const AGE = 19
   }
   console.log(AGE) // AGE is not defined
   ```

5. ```javascript
   对于数组、对象的修改，不算是对常量的修改，不会报错
   const ARRTEST = [1, 2, 3]
   ARRTEST.push(4)
   console.log(ARRTEST)
   
   const PERSON = {
     name: 'zhishouh',
     age: 20,
     hobby: 'football'
   }
   PERSON.age = 19
   console.log(PERSON.age)
   ```



#####  <span id="ES6-3">解构赋值</span>

1. ```javascript
   数组解构
   const TEST = ['甲', '乙', '丙', '丁']
   let [a, b, c, d] = TEST
   console.log(a)
   console.log(b)
   console.log(c)
   console.log(d)
   ```

2. ```javascript
   对象解构
   const PERSON = {
     name: 'zhishouh',
     age: 19,
     hobby: 'football'
   }
   const { name, age, hobby } = PERSON
   console.log(name)
   console.log(age)
   console.log(hobby)
   ```



#####  <span id="ES6-4">字符串模板 【``】</span>

1. ```javascript
   声明
   const NAME = 'ZHISHOUH'
   console.log(NAME)
   ```

2. ```javascript
   换行
   const TEST = `<ul>
                   <li>1</li>
                   <li>2</li>
                   <li>3</li>
                 </ul>`
   console.log(TEST)
   ```

3. ```javascript
   变量拼接
   const NAME = 'zhishouh'
   const AGE = 19
   const content = `${NAME}--${AGE}`
   console.log(content)
   
   ```

   

#####  <span id="ES6-5">对象的简化写法</span>

```javascript
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
```



#####  <span id="ES6-6">箭头函数</span>

```javascript
const fn = (a, b) => {
  return a + b
}
const result = fn(1, 2)
console.log(result)
```

1. ```javascript
   箭头函数的this是静态的，this指向函数声明时所在作用域下的this值
   function getName1 () {
     console.log(this.name)
   }
   const getName2 = () => {
     console.log(this.name)
   }
   window.name = 'zhishouh'
   const test = {
     name: 'zhishou'
   }
   
   直接调用
   getName1()
   getName2()
   
   call调用
   getName1.call(test)
   getName2.call(test)
   
   ```

2. ```javascript
   不能作为构造函数
   const Person = (name, age) => {
     this.name = name
     this.age = age
   }
   const P = new Person('黄', 19)
   
   console.log(P)
   ```

3. ```javascript
   不能使用arguments变量
   function a () {
     console.log(arguments)
   }
   a(1, 2, 3)
   
   const fn = () => {
     console.log(arguments)
   }
   fn(1, 2, 3)
   ```

4. ```javascript
   简写
   // 形参只有一个时，省略()
   // 代码块只有一条语句时省略{}，return也要省略
   const fn = n => n + n
   console.log(fn(3)) 
   ```

   

#####  <span id="ES6-7">函数参数的默认值</span>

1. ```javascript
   形参初始值
   function fn (a, b, c = 10) {
     return a + b + c
   }
   console.log(fn(1, 2))
   ```

   

2. ```javascript
   与解构赋值结合
   function connect ({ host = 'unlocalhost', username, password, port }) {
     console.log(host)
     console.log(username)
     console.log(password)
     console.log(port)
   }
   connect({
     // host: 'localhost',
     username: 'admin',
     password: '123123',
     port: 8080
   })
   ```



#####  <span id="ES6-8">rest参数 -- 用于获取函数的实参，代替arguments</span>

1. ```javascript
   ES5 获取实参的方式
   function fn () {
     console.log(arguments)
   }
   fn(1, 2, 3) // [Arguments] { '0': 1, '1': 2, '2': 3 }
   ```

2. ```javascript
   rest参数获取实参
   function fn2 (...args) {
     console.log(args)
   }
   fn2(1, 2, 3, 4) // [ 1, 2, 3, 4 ]
   ```

   

#####  <span id="ES6-9">扩展运算符 【...】 能将数组转化为逗号分隔符的参数序列</span>

```javascript
const arr = ['H', 'T', 'T', 'P']
function fn () {
  console.log(arguments)
}
fn(...arr) // [Arguments] { '0': 'H', '1': 'T', '2': 'T', '3': 'P' }
```

1. ```javascript
   数组的合并
   const arr1 = [1, 2, 3]
   const arr2 = [4, 5, 6]
   const arr = [...arr1, ...arr2]
   console.log(arr)
   ```

2. ```javascript
   数组的克隆
   const arr1 = [1, 2, 3]
   const arr2 = [...arr1]
   console.log(arr2)
   ```

3. ```javascript
   将伪数组转化为正数组
   ```



#####  <span id="ES6-10">Symbol--原始数据类型</span>

1. ```javascript
   创建symbol
   const s = Symbol('z')
   console.log(s)
   
   const s1 = Symbol('Z')
   const s2 = Symbol('Z')
   console.log(s1 === s2)  // false
   
   const s3 = Symbol.for('z')
   const s4 = Symbol.for('z')
   console.log(s3 === s4)  // true
   ```

2. ```javascript
   不能运算
   console.log(s + s1) // Cannot convert a Symbol value to a number
   ```

3. ```javascript
   对象添加symbol类型的属性
   const game = {
     name: 'FIFA',
     [Symbol('player')]: function () {
       console.log('我是玩家')
     },
     [Symbol('football')]: function () {
       console.log('我是个球')
     }
   }
   console.log(game)
   ```



#####  <span id="ES6-11">迭代器</span>

1. ```javascript
   const arr = [1, 2, 3]
   for (const item of arr) {
     console.log(item)
   }
   ```

2. ```javascript
   const club = {
     name: '银河战舰',
     players: ['C罗', '本泽马', '贝尔', '莫德里奇'],
     [Symbol.iterator] () {
       let index = 0
       return {
         next: () => {
           if (index < this.players.length) {
             const result = { value: this.players[index], done: false }
             index++
             return result
           } else {
             return { value: undefined, done: true }
           }
         }
       }
     }
   }
   
   for (const player of club) {
     console.log(player)
   }
   ```
   
   

#####  <span id="ES6-12">生成器</span>

```javascript
function one () {
  setTimeout(() => [
    console.log(111)
  ], 1000)
}
function two () {
  setTimeout(() => {
    console.log(222)
  }, 2000)
}
function three () {
  setTimeout(() => {
    console.log(333)
  }, 3000)
}

function * gen () {
  yield one()
  yield two()
  yield three()
}

// 调用生成器函数
const iterator = gen()
iterator.next()
iterator.next()
iterator.next()
iterator.next()
```



#####  <span id="ES6-13">Promise</span>

```javascript
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    const n = Math.round(Math.random() * 100)
    if (n <= 50) {
      resolve(n)
    } else {
      reject(n)
    }
  }, 1000)
})
p.then(value => {
  console.log(`成功：${value}`)
}, reason => {
  console.log(`失败：${reason}`)
})
```



#####   <span id="ES6-14">Promise读取文件</span>

```javascript
引入fs模块
const fs = require('fs')

调用fs读取文件
fs.readFile('./resource/content.txt', (err, data) => {
  if (err) throw err
  console.log(data.toString())
})

使用Promise封装
const p = new Promise((resolve, reject) => [
  fs.readFile('./resource/content.txt', (err, data) => {
    if (err) reject(err)
    resolve(data.toString())
  })
])
p.then(value => {
  console.log(value)
}, reason => {
  console.log('读取失败!')
})
```



#####  <span id="ES6-15">Promise封装AJAX</span>

```javascript
const p = new Promise((resolve, reject) => {
  // 接口地址 https://api.apiopen.top/getJoke
  const xhr = new XMLHttpRequest()
  xhr.open()
  xhr.send()
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.status)
      } else {
        reject(xhr.status)
      }
    }
  }
})

p.then(value => {
  console.log(value)
}, reason => {
  console.error(reason)
})
```



#####  <span id="ES6-16">Promise读取多个文件</span>

```javascript
const fs = require('fs')
const p = new Promise((resolve, reject) => {
  fs.readFile('./resource/1.txt', (err, data) => {
    if (err) reject(err)
    resolve(data)
  })
})

p.then(value => {
  return new Promise((resolve, reject) => {
    fs.readFile('./resource/2.txt', (err, data) => {
      if (err) reject(err)
      resolve([value, data])
    })
  })
}).then(value => {
  return new Promise((resolve, reject) => {
    fs.readFile('./resource/3.txt', (err, data) => {
      if (err) reject(err)
      value.push(data)
      resolve(value)
    })
  })
}).then(value => {
  console.log(value.toString())
})
```



#####  <span id="ES6-17">Set集合</span>

```javascript
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
```

```javascript
const arr1 = [1, 2, 3, 4, 5, 1]
const arr2 = [3, 4, 5]

// 交集
const result = [...new Set(arr1)].filter(item => {
  const s2 = new Set(arr2)
  if (s2.has(item)) {
    return true
  } else {
    return false
  }
})
const result = [...new Set(arr1)].filter(item => new Set(arr2).has(item))
console.log(result)

// 并集
const union = [...new Set([...arr1, ...arr2])]
console.log(union)

// 差集
const diff = [...new Set(arr1)].filter(item => !(new Set(arr2).has(item)))
console.log(diff)
```



#####  <span id="ES6-18">Map数据结构</span>

```javascript
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
m.clear()
console.log(m)

// 遍历
for (const v of m) {
  console.log(v)
}
```



##### <span id="ES6-19">class类定义</span>

```javascript
class Phone {
  constructor (name, price) {
    this.name = name
    this.price = price
  }

  call () {
    console.log('我可以拨打电话！')
  }
}
class SmartPhone extends Phone {
  constructor (name, price, color, size) {
    super(name, price)
    this.color = color
    this.size = size
  }

  watch () {
    console.log('我可以看剧')
  }

  playGame () {
    console.log('我可以打游戏')
  }

  call () {
    console.log('我可以视频通话')
  }

  get rams () {
    console.log('内存128g')
    return 1
  }

  set rams (newVal) {
    console.log(`现内存${newVal}g`)
  }
}

const xiaomi = new SmartPhone('xiaomi', 1999, '黑色', '5.5inci')
console.log(xiaomi.call())
xiaomi.rams = 256
```



##### <span id="ES6-20">数值扩展</span>

```javascript
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

```



#####  <span id="ES6-21">对象方法扩展</span>

```javascript
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

```



#####  <span id="ES6-22">模块化</span>

```js
  <script type="module">
    // 1、普通方式导入
    import * as m1 from './23-模块化js/m1.js'
    console.log(m1)
    import * as m2 from './23-模块化js/m2.js'
    console.log(m2)
    import * as m3 from './23-模块化js/m3.js'
    console.log(m3)
    m3.default.video()

    // 2、解构赋值导入
    import {name, hobby} from './23-模块化js/m1.js'
    import {name as LH, game} from './23-模块化js/m2.js'
    import {default as m3} from './23-模块化js/m3.js'
    console.log(name,hobby)
    console.log(LH,game)
    console.log(m3)

    // 3、简便形式 -- 只针对默认
    import m3 from './23-模块化js/m3.js'
    console.log(m3)
  </script>

// m1.js
export const name = 'zhishouh'
export function hobby () {
  console.log('我有很多兴趣！')
}
// m2.js
const name = 'zhishouh'
function game () {
  console.log('我有很多游戏！')
}
export { name, game }

// m3.js
// 默认暴露
export default {
  name: 'zhishouh',
  video: function (params) {
    console.log('dada')
  }
}

```



#### es7

#####  <span id="ES7-1">includes -- 检测元素是否存在数组，返回布尔值</span>

```javascript
const arr = ['A', 'B', 'C', 'D']
console.log(arr.includes('A'))
console.log(arr.includes('a'))
```

#####  <span id="ES7-2">【**】 -- 幂远算</span>

```javascript
console.log(2 ** 10)
console.log(Math.pow(2, 10))
```



#### ES8

#####  <span id="ES8-1">async函数和await表达式</span>

```javascript
const p = new Promise((resolve, reject) => {
  resolve('成功了！')
  // reject('失败了！')
})

async function main () {
  try {
    const result = await p
    console.log(result)
  } catch (e) {
    console.log(e)
  }
}
main()
```



#####  <span id="ES8-2">async与await读取多个文件</span>

```javascript

// 引入fs模块
const fs = require('fs')

function one () {
  return new Promise((resolve, reject) => {
    fs.readFile('./resource/1.txt', (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}

function two () {
  return new Promise((resolve, reject) => {
    fs.readFile('./resource/2.txt', (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}

function three () {
  return new Promise((resolve, reject) => {
    fs.readFile('./resource/3.txt', (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}

async function main () {
  const o = await one()
  const t = await two()
  const h = await three()
  console.log(o.toString())
  console.log(t.toString())
  console.log(h.toString())
}
main()
```



#####  <span id="ES8-3">async与await-AJAX请求</span>

```javascript
function sendAJAX (url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.send()
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response)
        } else {
          reject(xhr.status)
        }
      }
    }
  })
}

// Promise.then方法调用
sendAJAX('https://restapi.amap.com/v3/weather/weatherInfo?parameters').then(value => {
  console.log(value)
}, reason => {
  console.log(reason)
})

// async与await调用
async function main () {
  const aj = await sendAJAX('https://restapi.amap.com/v3/weather/weatherInfo?parameters')
  console.log(aj)
}
main()
```



#####  <span id="ES8-4">ES8对象方法扩展</span>

```javascript
// ES8对象方法扩展
const person = {
  name: 'zhishouh',
  hobby: ['sing', 'dance', 'rap', 'backetball']
}
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))
// 对象属性的描述对象
console.log(Object.getOwnPropertyDescriptors(person))
```



#### ES9

##### <span id="ES9-1">对象-rest参数和扩展运算符</span>

```javascript
// rest参数
function main ({ host, prot, ...user }) {
  console.log(host)
  console.log(prot)
  console.log(user)
}
main({
  host: 'localhost',
  prot: 3306,
  username: 'admin',
  password: 'admin',
  other: 'nill'
})

// 对象-扩展运算符
const a = {
  one: '甲'
}
const b = {
  two: '乙'
}
const c = {
  three: '丙'
}
const d = {
  four: '丁'
}
const all = {
  ...a,
  ...b,
  ...c,
  ...d
}
console.log(all)
```



##### <span id="ES9-2">正则扩展-命名捕获分组</span>

```javascript
// 声明一个字符串
const str = '<a href="www.baidu.com">百度</a>'
// // 声明正则表达式
const reg = /<a href="(.*)">(.*)<\/a>/

console.log(reg.exec(str))
console.log(reg.exec(str)[1])
console.log(reg.exec(str)[2])

// 命名捕获分组
const str = '<a href="www.baidu.com">百度</a>'
// 声明正则表达式
const reg = /<a href="(?<url>.*)">(?<text>.*)<\/a>/
const result = reg.exec(str)
console.log(result)
console.log(result.groups.url)
console.log(result.groups.text)
```



##### <span id="ES9-3">正则扩展-反向断言</span>

```javascript
const str = 'es666啊啊啊555啦啦啦'
// 正向断言 -- 提取出555
const reg1 = /\d+(?=啦)/
const result1 = reg1.exec(str)
console.log(result1)

// 反向断言
const reg2 = /(?<=啊)\d+/
const result2 = reg2.exec(str)
console.log(result2)

```



##### <span id="ES9-4">正则扩展-dotAll模式</span>

```javascript
const str = `
  <ul>
    <li>
      <a>《肖申克的救赎》</a>
      <p>上映日期：1994-09-10</p>
    </li>
    <li>
      <a>《阿甘正传》</a>
      <p>上映日期：1994-07-06</p>
    </li>
  </ul>
`
// const reg = /<li>\s+<a>(.*?)<\/a>\s+<p>(.*?)<\/p>/
const reg = /<li>.*?<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/gs
// const result = reg.exec(str)
// console.log(result)
let result
const data = []
while (result = reg.exec(str)) {
  data.push({ title: result[1], time: result[2] })
}
console.log(data)
```



#### ES10

##### <span id="ES10-1">Object.formEntries创建对象</span>

```javascript
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
console.log(result2) // { name: 'zhihsouh', hobby: 'football' }
```



##### <span id="ES10-2">字符串的扩展方法</span>

```javascript
const str = '    zhishouh    '
console.log(str)
console.log(str.trim())
console.log(str.trimStart())
console.log(str.trimEnd())
```



##### <span id="ES10-3">数组的扩展方法</span>

```javascript
const arr = [1, 2, 3, 4, [5, 6, [7, 8, 9]]]
console.log(arr.flat(2))

const arr2 = [1, 2, 3, 4]
const result = arr2.flatMap(item => [item * 10])
console.log(result)
```



##### <span id="ES10-4">Symbol扩展</span>

```javascript
const s = Symbol('黄智守')
console.log(s.description)
```



#### ES11

##### <span id="ES11-1">私有属性</span>

```javascript
class Person {
  // 公有属性
  name
  // 私有属性
  #age
  #weight
  constructor(name,age,weight){
    this.name = name
    this.#age = age
    this.#weight = weight
  }
  intro(){
    console.log(this.name)
    console.log(this.#age)
    console.log(this.#weight)
  }
}

const p = new Person('zhishouh',19,150)
// console.log(p.name)
// console.log(p.#age)
// console.log(p.#weight)
p.intro()
```



##### <span id="ES11-2">Promise.allSettled</span>

```javascript
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功-1')
  }, 1000)
})
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功-2')
  }, 1000)
})
const result = Promise.allSettled([p1, p2]).then(res => console.log(res))
console.log(result)
```



##### <span id="ES11-3"> String-prototype.matchAll</span>

```javascript
const str = `
  <ul>
    <li>
      <a>肖申克的救赎</a>
      <p>豆瓣评分：9.0</p>
    </li>
    <li>
      <a>阿甘正传</a>
      <p>豆瓣评分：9.0</p>
    </li>
  </ul>
`
// 声明正则
const reg = /<li>.*?<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/gs

const result = str.matchAll(reg)
console.log(result)
// for...of遍历
// for (const r of result) {
//   console.log(r)
// }
// ...扩展运算符
const arr = [...result]
console.log(arr)
```



##### <span id="ES11-4">可选链操作符</span>

```javascript
function mian (config) {
  const dbHost = config?.db?.host
  console.log(dbHost)
}
mian({
  db: {
    host: '127.0.0.1',
    prot: 8800
  },
  cache: {
    host: '127.0.0.2',
    username: 'admin'
  }
})
```



##### <span id="ES11-5">动态import</span>

```
import() -> 返回Promise对象
```



##### <span id="ES11-6">BigInt类型</span>

```javascript
const n = 123n

const num = 123
console.log(BigInt(num)) // 123n
```



##### <span id="ES11-7">全局对象globalThis</span>

```javascript
console.log(globalThis) //指向全局对象
```

