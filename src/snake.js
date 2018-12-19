class Body {
  constructor (options) {
    this.data = Object.assign({}, options)
  }
}

export default class Snake {
  constructor (options) {
    this.data = Object.assign({}, options, {
      body: [new Body({
        x: Math.floor(options.columns / 2),
        y: Math.floor(options.rows / 2)
      })]
    })
  }

  grow () {
    const tail = this.data.body[this.data.body.length - 1].data
    this.data.body.push(new Body({
      x: tail.x,
      y: tail.y
    }))
  }
}
