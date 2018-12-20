import Snake, { UP } from 'snake'
import Food from 'food'

export const COLUMNS = 15
export const ROWS = 15

export default class Game {
  constructor (random) {
    this.random = random
    this.data = {}
    this.reset()
  }
  reset () {
    this.data.direction = UP
    this.data.snake = new Snake({
      columns: COLUMNS,
      rows: ROWS
    })
    this.moveFood()
  }
  moveFood () {
    this.data.food = Food.generate(this.data.snake, this.random)
  }
  update () {
    this.data.snake.move(this.data.direction)
    if(this.data.snake.isDead()) {
      this.reset()
    }
    const snake = this.data.snake.data.body[0].data
    const food = this.data.food.data
    if(snake.x === food.x && snake.y === food.y) {
      this.data.snake.grow()
      this.moveFood()
    }
  }
  setDirection(value) {
    if(value && ((value & this.data.direction) === 0)) { //prevent clashes using binary operator
      this.data.direction = value
    }
  }
}
