import Snake from 'snake'

describe('snake', () => {
  it('initializes', () => {
    const snake = new Snake({
      columns: 12,
      rows: 10
    })
    expect(snake.data.x).toBe(5)
    expect(snake.data.y).toBe(5)
  })
})
