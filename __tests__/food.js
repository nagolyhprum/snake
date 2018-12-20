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
    for (let i = 0; i < 119; i++) {
      const food = Food.generate(snake, () => i).data
      expect(food).toBeDefined()
      expect(food).not.toEqual({
        x: 5,
        y: 6
      })
    }
    const food = Food.generate(snake, () => 119).data
    expect(food).toBeUndefined()
  })
})
