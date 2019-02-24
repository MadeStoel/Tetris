class OPiece extends Piece {
    constructor() {
        super();

        this.colorValue = 7;
        this.shapeSize = 2;

        this.shape = [
            [ 1, 1 ],
            [ 1, 1 ],
        ];
    }

    turnClockWise() {
      this.shape = super.turnClockWise(this.shape);
    }

    turnCounterClockWise() {
      this.shape = super.turnCounterClockWise(this.shape);
    }
}