document.addEventListener('keydown', (event) => {

    var allowMove = !currentPiece.locked;

    switch (event.key) {
        case 'ArrowRight':
            for (let i = 0; i < currentPiece.shapeSize; i++) {
                row = currentPiece.shape[i];
                if (row[currentPiece.shapeSize - 1] > 0 && currentPiece.xPos + currentPiece.shapeSize >= 10) {
                    allowMove = false;
                }
            }

            if (allowMove) currentPiece.xPos++;
            break;

        case 'ArrowLeft':
            for (let i = 0; i < currentPiece.shapeSize; i++) {
                row = currentPiece.shape[i];
                if (row[0] > 0 && currentPiece.xPos === 0) {
                    allowMove = false;
                }
            }

            if (allowMove) currentPiece.xPos--;
            break;

        case 'ArrowDown':
            currentPiece.yPos++;
            break;

        case 'x':
            currentPiece.turnClockWise();
            break;

        case 'z':
            currentPiece.turnCounterClockWise();
            break;

        default:
            return;
    }

    arena.update(currentPiece);
    draw.arena(arena);
});