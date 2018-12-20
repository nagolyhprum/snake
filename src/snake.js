class Body {
  constructor (options) {
    this.data = Object.assign({
      skip: true
    }, options)
  }
}

export default class Snake {
  constructor (options) {
    this.data = Object.assign({
      body: [new Body({
        x: Math.floor(options.columns / 2),
        y: Math.floor(options.rows / 2),
        skip: false
      })]
    }, options)
  }

  grow () {
    const tail = this.data.body[this.data.body.length - 1].data
    this.data.body.push(new Body({
      x: tail.x,
      y: tail.y
    }))
  }

  isDead () {
    const head = this.data.body[0].data
    const isDead = this.data.body.length > 4 && this.data.body.reduce((isDead, part) => {
      return isDead || (part.data !== head && part.data.x === head.x && part.data.y === head.y)
    }, false)
    const { rows, columns } = this.data
    return isDead || head.x < 0 || head.y < 0 || head.x >= columns || head.y >= rows
  }

  move (direction) {
    for (let index = this.data.body.length - 1; index >= 0; index--) {
      const part = this.data.body[index]
      if (!part.data.skip) {
        if (index) {
          const dest = this.data.body[index - 1].data
          part.data.x = dest.x
          part.data.y = dest.y
        } else {
          switch (direction) {
            case UP:
              part.data.y--
              break
            case RIGHT:
              part.data.x++
              break
            case DOWN:
              part.data.y++
              break
            case LEFT:
              part.data.x--
              break
          }
        }
      } else {
        part.data.skip = false
      }
    }
  }
}

export const UP = 1
export const RIGHT = 2
export const DOWN = 4
export const LEFT = 8
