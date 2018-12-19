import Snake from 'snake'

describe('snake', () => {
  it('initializes', () => {
    const snake = new Snake({
      columns: 12,
      rows: 10
    })
    expect(snake.data.body[0].data).toEqual({
      x: 6,
      y: 5
    })
  })
  it('grows', () => {
    const snake = new Snake({
      columns: 12,
      rows: 10
    })
    snake.grow()
    expect(snake.data.body).toHaveLength(2)
    expect(snake.data.body[0].data).toEqual({
      x: 6,
      y: 5
    })
    expect(snake.data.body[1].data).toEqual({
      x: 6,
      y: 5
    })
  })
  it('moves', () => {
    const snake = new Snake({
      columns: 12,
      rows: 10
    })
    snake.move()
    expect(snake.data.body[0].data).toEqual({
      x: 6,
      y: 4
    })
  })
})
