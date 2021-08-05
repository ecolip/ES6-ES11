// 可选链操作符
function mian (config) {
  const dbHost = config?.db?.host
  console.log(dbHost)
}
mian({
  db: {
    host: '127.0.0.1',
    prot: 8800
  },
  cache: {
    host: '127.0.0.2',
    username: 'admin'
  }
})
