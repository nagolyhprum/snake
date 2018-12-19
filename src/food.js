export default class Food {
  static generate (snake, random) {
    return {
      data: {
        x: random(),
        y: random()
      }
    }
  }
}
