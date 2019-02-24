document.addEventListener('keydown', (event) => {

    var allowMove = !currentPiece.locked;

    switch (event.key) {
        case 'ArrowRight':
            outer: for (let i = 0; i < currentPiece.shapeSize; i++) {
                for (let j = 0; j < currentPiece.shapeSize; j++) {
                    if (currentPiece.shape[i][j] === 1) {
                        //check right wall
                        if (currentPiece.xPos + (j + 1) >= 10) allowMove = false;

                        //check for block on right
                        const rightCell = arena.grid[currentPiece.yPos + i][currentPiece.xPos + j + 1];
                        if (rightCell > 0 && rightCell < 9) {
                            allowMove = false;

                            break outer;
                        }
                    }
                }
            }
            if (allowMove) currentPiece.xPos++;
            break;

        case 'ArrowLeft':
            outer: for (let i = 0; i < currentPiece.shapeSize; i++) {
                for (let j = 0; j < currentPiece.shapeSize; j++) {
                    if (currentPiece.shape[i][j] === 1) {
                        //check left wall
                        if (currentPiece.xPos + j <= 0) allowMove = false;

                        //check for block on left
                        const leftCell = arena.grid[currentPiece.yPos + i][currentPiece.xPos + j - 1];
                        if (leftCell > 0 && leftCell < 9) {

                            allowMove = false;
                            break outer;
                        }
                    }
                }
            }

            if (allowMove) currentPiece.xPos--;
            break;

        case 'ArrowDown':
            arena.checkCollision(currentPiece);
            currentPiece.yPos++;


            break;

        case 'x':
            currentPiece.turnClockWise();
            break;

        case 'z':
            currentPiece.turnCounterClockWise();
            break;

        case 'r':
            newGame();
            break;

        default:
            return;
    }

    arena.update(currentPiece);
    draw.arena(arena);
});