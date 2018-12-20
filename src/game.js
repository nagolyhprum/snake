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
    this.data.food = new Food(this.snake, this.random)
  }
  update () {
    this.data.snake.move(this.data.direction)
    if(this.data.snake.isDead()) {
      this.reset()
    }
  }
}
