import { UP, RIGHT, DOWN, LEFT } from 'snake'
import Game, { COLUMNS, ROWS } from 'game'

const CANVAS_WIDTH = 300
const CANVAS_HEIGHT = 300
const CELL_WIDTH = CANVAS_WIDTH / COLUMNS
const CELL_HEIGHT = CANVAS_HEIGHT / ROWS
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = CANVAS_WIDTH
canvas.height = CANVAS_HEIGHT

const game = new Game(input => Math.floor(Math.random() * input))

const draw = () => {
  context.fillStyle = 'black'
  context.fillRect(0, 0, canvas.width, canvas.height)
  context.fillStyle = 'white'
  game.data.snake.data.body.forEach(part => {
    const x = part.data.x * CELL_WIDTH
    const y = part.data.x * CELL_HEIGHT
    context.fillRect(x, y, CELL_WIDTH, CELL_HEIGHT)
  })
}

const update = () => {
  game.update()
}

update()
draw()
