class Piece {
  constructor() {
      this.xPos = 3;
      this.yPos = 0;

      this.locked = false;
  }

  turnClockWise(shape) {
      let result = [];
      for(let i = 0; i < shape[0].length; i++) {
          let row = shape.map(col => col[i]).reverse();
          result.push(row);
      }
      return result;
  }

  turnCounterClockWise(shape) {
      let result = [];
      for(let i = shape[0].length - 1; i >= 0; i--) {
          let row = shape.map(col => col[i]);
          result.push(row);
      }
      return result;
  }
}