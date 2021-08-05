// String-prototype.matchAll

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
