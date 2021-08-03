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
