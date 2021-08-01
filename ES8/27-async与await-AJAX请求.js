function sendAJAX (url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.send()
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response)
        } else {
          reject(xhr.status)
        }
      }
    }
  })
}

// Promise.then方法调用
sendAJAX('https://restapi.amap.com/v3/weather/weatherInfo?parameters').then(value => {
  console.log(value)
}, reason => {
  console.log(reason)
})

// async与await调用
async function main () {
  const aj = await sendAJAX('https://restapi.amap.com/v3/weather/weatherInfo?parameters')
  console.log(aj)
}
main()
