// Promise
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
