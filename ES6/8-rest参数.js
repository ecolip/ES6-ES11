// rest参数 -- 用于获取函数的实参，代替arguments

// ES5 获取实参的方式
function fn () {
  console.log(arguments)
}
fn(1, 2, 3) // [Arguments] { '0': 1, '1': 2, '2': 3 }

// rest参数获取实参
function fn2 (...args) {
  console.log(args)
}
fn2(1, 2, 3, 4) // [ 1, 2, 3, 4 ]
