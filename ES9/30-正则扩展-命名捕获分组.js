// 正则扩展-命名捕获分组

// 声明一个字符串
// const str = '<a href="www.baidu.com">百度</a>'
// // 声明正则表达式
// const reg = /<a href="(.*)">(.*)<\/a>/

// console.log(reg.exec(str))
// console.log(reg.exec(str)[1])
// console.log(reg.exec(str)[2])

// 命名捕获分组
const str = '<a href="www.baidu.com">百度</a>'
// 声明正则表达式
const reg = /<a href="(?<url>.*)">(?<text>.*)<\/a>/
const result = reg.exec(str)
console.log(result)
console.log(result.groups.url)
console.log(result.groups.text)
