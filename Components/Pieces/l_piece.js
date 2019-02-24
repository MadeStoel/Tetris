class LPiece extends Piece {
    constructor() {
        super();

        this.colorValue = 4;
        this.shapeSize = 3;

        this.shape = [
            [ 0, 1, 0 ],
            [ 0, 1, 0 ],
            [ 0, 1, 1 ],
        ];
    }

    turnClockWise() {
      this.shape = super.turnClockWise(this.shape);
    }

    turnCounterClockWise() {
      this.shape = super.turnCounterClockWise(this.shape);
    }
}