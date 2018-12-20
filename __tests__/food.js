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
  it('generates where the snake isnt', () => {
    const snake = new Snake({
      columns: 10,
      rows: 12
    })
    let index = 5
    expect(Food.generate(snake, () => index++).data).toEqual({
      x: 7,
      y: 8
    })
  })
})
