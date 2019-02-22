document.addEventListener('keydown', (event) => {

    switch(event.key) {
        case 'ArrowRight':
            currentPiece.xPos++;
            break;
        case 'ArrowLeft':
            currentPiece.xPos--;
            break;
    }

    arena.update(currentPiece);
    draw.arena(arena);
});