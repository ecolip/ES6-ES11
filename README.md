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



##### *cosnt 声明常量*

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



##### *解构赋值*

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



##### *字符串模板 【``】*

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

   