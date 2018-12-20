import Game, {
  COLUMNS,
  ROWS
} from 'game'
import Food from 'food'
import Snake from 'snake'

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
})
