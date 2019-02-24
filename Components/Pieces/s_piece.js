class SPiece extends Piece {
    constructor() {
        super();

        this.colorValue = 5;
        this.shapeSize = 3;

        this.shape = [
            [ 0, 0, 0 ],
            [ 0, 1, 1 ],
            [ 1, 1, 0 ],
        ];
    }

    turnClockWise() {
      this.shape = super.turnClockWise(this.shape);
    }

    turnCounterClockWise() {
      this.shape = super.turnCounterClockWise(this.shape);
    }
}