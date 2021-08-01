// 引入fs模块
const fs = require('fs')

// 调用fs读取文件
fs.readFile('./resource/content.txt', (err, data) => {
  if (err) throw err
  console.log(data.toString())
})

// 使用Promise封装
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
