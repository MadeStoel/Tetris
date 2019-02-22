const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const draw = new Draw();
const arena = new Arena();

debugging = false;

let lastTime = 0;
let pieceActive = false;

let currentPiece;

update = function (time = 0) {
    checkForActivePiece();

    const deltaTime = time - lastTime;
    if (deltaTime > 500) {

        arena.checkCollision(currentPiece);
        currentPiece.yPos++;

        arena.update(currentPiece);
        draw.arena(arena);

        lastTime = time;
    }

    if(!debugging) {
        requestAnimationFrame(update);
    } else {
        console.table(arena.grid);
    }
};

checkForActivePiece = function () {
    if (!pieceActive) {
        currentPiece = new TPiece();

        arena.update(currentPiece);
        draw.arena(arena);
        pieceActive = true;
    }
};

update();