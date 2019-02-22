class TPiece extends Piece {
    constructor(xPos, yPos) {
        super(xPos, yPos);

        this.colorValue = 1;
        this.shapeSize = 3;

        this.shape = [
            [ 0, 1, 0 ],
            [ 1, 1, 1 ],
            [ 0, 0, 0 ],
        ];
    }
}