// Promise.allSettled -- 返回成功的Promise对象
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功-1')
  }, 1000)
})
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功-2')
  }, 1000)
})
const result = Promise.allSettled([p1, p2]).then(res => console.log(res))
console.log(result)
