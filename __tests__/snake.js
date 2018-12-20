import Snake, {
  UP,
  RIGHT,
  DOWN,
  LEFT
} from 'snake'

describe('snake', () => {
  it('initializes', () => {
    const snake = new Snake({
      columns: 12,
      rows: 10
    })
    expect(snake.data.body[0].data).toEqual({
      x: 6,
      y: 5,
      skip: false
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
      skip: false
    })
    expect(snake.data.body[1].data).toEqual({
      x: 6,
      y: 5,
      skip: true
    })
  })
  it('moves', () => {
    const snake = new Snake({
      columns: 12,
      rows: 10
    })
    snake.move(UP)
    expect(snake.data.body[0].data).toEqual({
      x: 6,
      y: 4,
      skip: false
    })
  })
  it('skips new ones', () => {
    const snake = new Snake({
      columns: 12,
      rows: 10
    })
    snake.grow()
    expect(snake.data.body[1].data).toEqual({
      x: 6,
      y: 5,
      skip: true
    })
    snake.move(UP)
    expect(snake.data.body[1].data).toEqual({
      x: 6,
      y: 5,
      skip: false
    })
    snake.move(UP)
    expect(snake.data.body[1].data).toEqual({
      x: 6,
      y: 4,
      skip: false
    })
  })
  it('head follows directions', () => {
    const snake = new Snake({
      columns: 12,
      rows: 10
    })
    expect(snake.data.body[0].data).toEqual({
      x: 6,
      y: 5,
      skip: false
    })
    snake.move(UP)
    expect(snake.data.body[0].data).toEqual({
      x: 6,
      y: 4,
      skip: false
    })
    snake.move(RIGHT)
    expect(snake.data.body[0].data).toEqual({
      x: 7,
      y: 4,
      skip: false
    })
    snake.move(DOWN)
    expect(snake.data.body[0].data).toEqual({
      x: 7,
      y: 5,
      skip: false
    })
    snake.move(LEFT)
    expect(snake.data.body[0].data).toEqual({
      x: 6,
      y: 5,
      skip: false
    })
  })
  it('tail follows head', () => {
    const snake = new Snake({
      columns: 12,
      rows: 10
    })
    snake.grow()
    expect(snake.data.body[1].data).toEqual({
      x: 6,
      y: 5,
      skip: true
    })
    snake.move(UP)
    expect(snake.data.body[1].data).toEqual({
      x: 6,
      y: 5,
      skip: false
    })
    snake.move(RIGHT)
    expect(snake.data.body[1].data).toEqual({
      x: 6,
      y: 4,
      skip: false
    })
    snake.move(DOWN)
    expect(snake.data.body[1].data).toEqual({
      x: 7,
      y: 4,
      skip: false
    })
    snake.move(LEFT)
    expect(snake.data.body[1].data).toEqual({
      x: 7,
      y: 5,
      skip: false
    })
    snake.move(UP)
    expect(snake.data.body[1].data).toEqual({
      x: 6,
      y: 5,
      skip: false
    })
  })
  it('dies out of bounds', () => {
    const snake = new Snake({
      columns: 12,
      rows: 10
    })
    snake.data.body[0].data.x = 5
    snake.data.body[0].data.y = 5
    expect(snake.isDead()).toBeFalsy()
    snake.data.body[0].data.x = -1
    snake.data.body[0].data.y = 5
    expect(snake.isDead()).toBeTruthy()
    snake.data.body[0].data.x = 5
    snake.data.body[0].data.y = -1
    expect(snake.isDead()).toBeTruthy()
    snake.data.body[0].data.x = 13
    snake.data.body[0].data.y = 5
    expect(snake.isDead()).toBeTruthy()
    snake.data.body[0].data.x = 5
    snake.data.body[0].data.y = 13
    expect(snake.isDead()).toBeTruthy()
  })
  it('can eat itself', () => {
    const snake = new Snake({
      columns: 12,
      rows: 10
    })
    expect(snake.isDead()).toBeFalsy()
    snake.grow()
    snake.move(UP)
    expect(snake.isDead()).toBeFalsy()
    snake.grow()
    snake.move(RIGHT)
    expect(snake.isDead()).toBeFalsy()
    snake.grow()
    snake.move(DOWN)
    expect(snake.isDead()).toBeFalsy()
    snake.grow()
    snake.move(LEFT)
    expect(snake.isDead()).toBeTruthy()
  })
  it('can eat itself immediately', () => {
    const snake = new Snake({
      columns: 12,
      rows: 10
    })
    expect(snake.isDead()).toBeFalsy()
    snake.grow()
    expect(snake.isDead()).toBeTruthy()
  })
})
