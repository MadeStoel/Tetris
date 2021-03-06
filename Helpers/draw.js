const gameWindow = document.getElementById('game-window');
const gameWindowCtx = gameWindow.getContext('2d');

class Draw {
    colorMap = Object.assign({}, {
        0: 'black',
        1: 'purple', // T-piece
        2: 'blue', // J-piece
        3: 'cyan', // I-piece
        4: 'orange', // L-piece
        5: 'green', // S-piece
        6: 'red',  // Z-piece
        7: 'yellow', // O-piece
    });

    constructor() {
        this.cellSize = 40;
    }

    arena = function (arena) {
        for (let y = 0; y < arena.height; y++) {
            for (let x = 0; x < arena.width; x++) {
                this.cell(x, y, arena.grid[y][x]);
            }
        }
    };

    cell = function (x, y, colorKey) {
        if (colorKey === 9) {
            colorKey = currentPiece.colorValue;
        }
        gameWindowCtx.fillStyle = this.colorMap[colorKey];
        gameWindowCtx.fillRect(x * this.cellSize, y * this.cellSize, this.cellSize, this.cellSize);
    };
}