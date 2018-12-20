export default class Food {
  static generate (snake, random) {
    // the following code determines where i can place food, the snake can block it
    const tiles = []
    for (let i = 0; i < snake.data.columns; i++) {
      for (let j = 0; j < snake.data.rows; j++) {
        const isBlocking = snake.data.body.reduce((isBlocking, part) => {
          return isBlocking || (part.data.x === i && part.data.y === j)
        }, false)
        if (!isBlocking) {
          tiles.push({
            x: i,
            y: j
          })
        }
      }
    }
    // then i randomly choose one of those foods
    return {
      data: tiles[random(tiles.length)]
    }
  }
}
