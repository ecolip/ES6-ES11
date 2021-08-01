// async与await读取多个文件
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
