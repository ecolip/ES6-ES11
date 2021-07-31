class Phone {
  constructor (name, price) {
    this.name = name
    this.price = price
  }

  call () {
    console.log('我可以拨打电话！')
  }
}
class SmartPhone extends Phone {
  constructor (name, price, color, size) {
    super(name, price)
    this.color = color
    this.size = size
  }

  watch () {
    console.log('我可以看剧')
  }

  playGame () {
    console.log('我可以打游戏')
  }

  call () {
    console.log('我可以视频通话')
  }

  get rams () {
    console.log('内存128g')
    return 1
  }

  set rams (newVal) {
    console.log(`现内存${newVal}g`)
  }
}

const xiaomi = new SmartPhone('xiaomi', 1999, '黑色', '5.5inci')
console.log(xiaomi.call())
xiaomi.rams = 256
