// rest参数
function main ({ host, prot, ...user }) {
  console.log(host)
  console.log(prot)
  console.log(user)
}
main({
  host: 'localhost',
  prot: 3306,
  username: 'admin',
  password: 'admin',
  other: 'nill'
})

// 对象-扩展运算符
const a = {
  one: '甲'
}
const b = {
  two: '乙'
}
const c = {
  three: '丙'
}
const d = {
  four: '丁'
}
const all = {
  ...a,
  ...b,
  ...c,
  ...d
}
console.log(all)
