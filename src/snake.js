export default class Snake {
  constructor (options) {
    this.data = Object.assign({}, options, {
      x: Math.floor(options.columns / 2),
      y: Math.floor(options.rows / 2)
    })
  }
}
