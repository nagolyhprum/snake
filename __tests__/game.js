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
})
