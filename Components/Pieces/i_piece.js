class IPiece extends Piece {
    constructor() {
        super();

        this.colorValue = 3;
        this.shapeSize = 4;

        this.shape = [
            [ 0, 1, 0, 0 ],
            [ 0, 1, 0, 0 ],
            [ 0, 1, 0, 0 ],
            [ 0, 1, 0, 0 ],
        ];
    }

    turnClockWise() {
      this.shape = super.turnClockWise(this.shape);
    }

    turnCounterClockWise() {
      this.shape = super.turnCounterClockWise(this.shape);
    }
}