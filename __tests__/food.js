import Food from 'food'
import Snake from 'snake'

describe('food', () => {
  it('generates', () => {
    const snake = new Snake({
      columns: 10,
      rows: 12
    })
    expect(Food.generate(snake, () => 0).data).toEqual({
      x: 0,
      y: 0
    })
  })
})
