import Game, {
  COLUMNS,
  ROWS
} from 'game'
import Food from 'food'
import Snake, {
  UP,
  RIGHT,
  DOWN,
  LEFT
} from 'snake'

describe('game', () => {
  it('starts', () => {
    const random = () => 0
    const game = new Game(random)
    expect(game.data.food).toEqual(new Food(random))
    expect(game.data.snake).toEqual(new Snake({
      columns: COLUMNS,
      rows: ROWS
    }))
  })
  it('updates', () => {
    const random = () => 0
    const game = new Game(random)
    game.update()
    expect(game.data.snake.data.body[0].data).toEqual({
      x: Math.floor(COLUMNS / 2),
      y: Math.floor(ROWS / 2) - 1,
      skip: false
    })
  })
  it('kills the snake', () => {
    const random = () => 0
    const game = new Game(random)
    game.data.snake.data.body[0].data.y = 0
    game.update()
    expect(game.data.snake.data.body[0].data).toEqual({
      x: Math.floor(COLUMNS / 2),
      y: Math.floor(ROWS / 2),
      skip: false
    })
  })
  it('can set direction', () => {
    const random = () => 0
    const game = new Game(random)
    game.setDirection(UP)
    expect(game.data.direction).toBe(UP)
    game.setDirection(RIGHT)
    expect(game.data.direction).toBe(RIGHT)
    game.setDirection(DOWN)
    expect(game.data.direction).toBe(DOWN)
    game.setDirection(LEFT)
    expect(game.data.direction).toBe(LEFT)
    game.setDirection()
    expect(game.data.direction).toBe(LEFT)
  })
  it('fights certain directions', () => {

      const random = () => 0
      const game = new Game(random)

      game.data.snake.grow()

      game.setDirection(LEFT)
      game.setDirection(RIGHT)
      expect(game.data.direction).toBe(LEFT)

      game.setDirection(UP)
      game.setDirection(DOWN)
      expect(game.data.direction).toBe(UP)

      game.setDirection(RIGHT)
      game.setDirection(LEFT)
      expect(game.data.direction).toBe(RIGHT)

      game.setDirection(DOWN)
      game.setDirection(UP)
      expect(game.data.direction).toBe(DOWN)
  })
})
