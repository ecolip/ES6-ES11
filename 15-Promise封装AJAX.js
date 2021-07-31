const p = new Promise((resolve, reject) => {
  // 接口地址 https://api.apiopen.top/getJoke
  const xhr = new XMLHttpRequest()
  xhr.open()
  xhr.send()
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.status)
      } else {
        reject(xhr.status)
      }
    }
  }
})

p.then(value => {
  console.log(value)
}, reason => {
  console.error(reason)
})
