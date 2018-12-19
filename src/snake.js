class Body {
  constructor (options) {
    this.data = Object.assign({
      skip : true
    }, options)
  }
}

export default class Snake {
  constructor (options) {
    this.data = Object.assign({
      body: [new Body({
        x: Math.floor(options.columns / 2),
        y: Math.floor(options.rows / 2),
        skip : false
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

  move () {
    this.data.body.forEach(part => {
      if(!part.data.skip) {
        part.data.y--
      } else {
        part.data.skip = false
      }
    })
  }
}
