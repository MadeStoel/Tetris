class Arena {
    constructor() {
        this.xPos = 10;
        this.yPos = 20;

        this.grid = this.initGrid();

    }

    initGrid = function () {
        const grid = {};

        for (let i = 0; i < this.yPos; i++) {
            grid[i] = [];
            for (let j = 0; j < this.xPos; j++) {
                grid[i][j] = 0;
            }
        }

        return grid;
    };

    update = function (piece) {
        this.positionActivePiece(piece);
    };

    checkCollision = function (piece) {
        for (let i = 0; i < piece.shapeSize; i++) {
            for (let j = 0; j < piece.shapeSize; j++) {
                if (piece.shape[i][j] === 1) {

                    //Bottom of the screen
                    if (piece.yPos + i >= this.yPos - 1) {
                        this.lockPiece(piece);
                        return;
                    }

                    //Other pieces
                    const nextCellPos = this.grid[piece.yPos + i + 1][piece.xPos + j];

                    if (nextCellPos > 0 && nextCellPos < 9) {
                        this.lockPiece(piece);
                        return;
                    }
                }
            }
        }
    };

    positionActivePiece = function (piece) {
        //Reset last position
        for (let i = 0; i < this.yPos; i++) {
            for (let j = 0; j < this.xPos; j++) {
                if (this.grid[i][j] === 9) {
                    this.grid[i][j] = 0;
                }
            }
        }

        //set new Position
        for (let i = 0; i < piece.shapeSize; i++) {
            for (let j = 0; j < piece.shapeSize; j++) {
                if (piece.shape[i][j] === 1) {
                    this.grid[piece.yPos + i][piece.xPos + j] = piece.locked ? piece.colorValue : 9;
                }
            }
        }
    };

    lockPiece = function (piece) {
        piece.yPos--;
        piece.locked = true;

        pieceActive = false;
    }
}