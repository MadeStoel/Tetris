class Arena {
    constructor() {
        this.width = 10;
        this.height = 20;

        this.grid = this.initGrid(this.width, this.height);

    }

    initGrid = function (x, y) {
        const grid = [];

        while (y--) {
            grid[y] = new Array(x).fill(0);
        }

        return grid;
    };

    update = function (piece) {
        this.positionActivePiece(piece);
    };

    checkForCompletedRows = function () {
        let completedRows = 0;

        this.grid.forEach((row, index) => {
            const completed = row.every(value => {
                return value > 0 && value < 9
            });

            if (completed) {
                this.grid.splice(index, 1);
                this.grid.unshift(new Array(this.width).fill(0));

                completedRows++;
            }
        });

        if (completedRows > 0) return completedRows;
    };

    checkCollision = function (piece) {
        for (let i = 0; i < piece.shapeSize; i++) {
            for (let j = 0; j < piece.shapeSize; j++) {
                if (piece.shape[i][j] === 1) {

                    //Bottom of the screen
                    if (piece.yPos + i >= this.height - 1) {
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
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
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

    checkForGameOver = function () {
        return (this.grid[0][4] !== 0 || this.grid[0][5] !== 0);
    };

    lockPiece = function (piece) {
        piece.yPos--;
        piece.locked = true;

        pieceActive = false;
    }
}