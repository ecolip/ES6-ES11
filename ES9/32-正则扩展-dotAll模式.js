// 正则扩展-dotAll模式
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
