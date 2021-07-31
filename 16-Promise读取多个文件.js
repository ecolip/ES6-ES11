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
