class Draw {
    colorMap = Object.assign({}, {
        0: 'black',
        1: 'red',
        9: 'hotpink'
    });

    constructor() {
        this.cellSize = 40;
    }

    arena = function (arena) {
        for (let y = 0; y < arena.yPos; y++) {
            for (let x = 0; x < arena.xPos; x++) {
                this.cell(x, y, arena.grid[y][x]);
            }
        }
    };

    cell = function (x, y, colorKey) {
        if(colorKey === 9) {
            colorKey = currentPiece.colorValue;
        }
        ctx.fillStyle = this.colorMap[colorKey];
        ctx.fillRect(x * this.cellSize, y * this.cellSize, this.cellSize, this.cellSize);
    };
}