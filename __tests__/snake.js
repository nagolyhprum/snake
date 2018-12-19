import Snake from 'snake'

describe('snake', () => {
  it('initializes', () => {
    const snake = new Snake({
      columns: 12,
      rows: 10
    })
    expect(snake.data.body[0].data.x).toBe(6)
    expect(snake.data.body[0].data.y).toBe(5)
  })
})
