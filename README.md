### ES6-ES11**

------

##### let声明变量

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



##### const 声明常量

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



##### 解构赋值

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



##### 字符串模板 【``】

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

   

##### 对象的简化写法

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



##### 箭头函数

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

   

##### 函数参数的默认值

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



##### rest参数 -- 用于获取函数的实参，代替arguments

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

   

##### 扩展运算符 【...】 能将数组转化为逗号分隔符的参数序列

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



##### Symbol--原始数据类型

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



##### 迭代器

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

   

##### 生成器

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

