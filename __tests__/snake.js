import Snake from 'snake'

describe('snake', () => {
  it('initializes', () => {
    const snake = new Snake({
      columns: 12,
      rows: 10
    })
    expect(snake.data.body[0].data).toEqual({
      x: 6,
      y: 5,
      skip : false
    })
  })
  it('grows', () => {
    const snake = new Snake({
      columns: 12,
      rows: 10
    })
    snake.grow()
    expect(snake.data.body[0].data).toEqual({
      x: 6,
      y: 5,
      skip : false
    })
    expect(snake.data.body[1].data).toEqual({
      x: 6,
      y: 5,
      skip : true
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
      y: 4,
      skip : false
    })
  })
  it('skips new ones', () => {
    const snake = new Snake({
      columns: 12,
      rows: 10
    })
    snake.grow()
    expect(snake.data.body[0].data).toEqual({
      x: 6,
      y: 5,
      skip : false
    })
    expect(snake.data.body[1].data).toEqual({
      x: 6,
      y: 5,
      skip : true
    })
    snake.move()
    expect(snake.data.body[0].data).toEqual({
      x: 6,
      y: 4,
      skip : false
    })
    expect(snake.data.body[1].data).toEqual({
      x: 6,
      y: 5,
      skip : false
    })
    snake.move()
    expect(snake.data.body[0].data).toEqual({
      x: 6,
      y: 3,
      skip : false
    })
    expect(snake.data.body[1].data).toEqual({
      x: 6,
      y: 4,
      skip : false
    })
  })
})
