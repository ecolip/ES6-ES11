// async函数与await表达式
const p = new Promise((resolve, reject) => {
  resolve('成功了！')
  // reject('失败了！')
})

async function main () {
  try {
    const result = await p
    console.log(result)
  } catch (e) {
    console.log(e)
  }
}
main()
