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
        for (let i = 0; i < this.yPos; i++) {
            for (let j = 0; j < this.xPos; j++) {
                if (this.grid[i][j] === 9) {
                    this.grid[i][j] = 0;
                }
            }
        }

        for (let i = 0; i < piece.shape[0].length; i++) {
            for (let j = 0; j < piece.shape[0].length; j++) {
                if (piece.shape[i][j] === 1) {
                    this.grid[piece.yPos + i][piece.xPos + j] = 9;
                }
            }
        }
    }

}