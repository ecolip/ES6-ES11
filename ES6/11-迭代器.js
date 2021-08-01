// 迭代器
// const arr = [1, 2, 3]
// for (const item of arr) {
//   console.log(item)
// }

const club = {
  name: '银河战舰',
  players: ['C罗', '本泽马', '贝尔', '莫德里奇'],
  [Symbol.iterator] () {
    let index = 0
    return {
      next: () => {
        if (index < this.players.length) {
          const result = { value: this.players[index], done: false }
          index++
          return result
        } else {
          return { value: undefined, done: true }
        }
      }
    }
  }
}

for (const player of club) {
  console.log(player)
}
