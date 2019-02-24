const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const draw = new Draw();
const arena = new Arena();

let lastTime = 0;
let pieceActive = false;

const pieceBag = ['j', 'l', 's', 'z', 't',  'i', 'o'];
let currentPieceBag = [];
let currentPiece;

update = function (time = 0) {
    checkForActivePiece();

    const deltaTime = time - lastTime;
    if (deltaTime > 800) {

        arena.checkCollision(currentPiece);
        currentPiece.yPos++;

        arena.update(currentPiece);
        draw.arena(arena);

        lastTime = time;
    }

    requestAnimationFrame(update);
};

checkForActivePiece = function () {
    if (!pieceActive) {
        arena.checkForCompletedRows();

        currentPiece = getNewPiece();
        console.log(currentPiece);

        arena.update(currentPiece);

        draw.arena(arena);

        pieceActive = true;
    }
};

getNewPiece = function () {
    if(currentPieceBag.length === 0) {
        currentPieceBag = pieceBag.slice();
    }

    const randomNum = Math.floor(Math.random() * currentPieceBag.length);
    selectedPiece = currentPieceBag.splice(randomNum, 1)[0];

    switch (selectedPiece){
        case 'j': {
            return new JPiece();
        }
        case 'l': {
            return new LPiece();
        }
        case 's': {
            return new SPiece();
        }
        case 'z': {
            return new ZPiece();
        }
        case 'i': {
            return new IPiece();
        }
        case 't': {
            return new TPiece();
        }
        case 'o': {
            return new OPiece();
        }
        default: {
            console.log('undefined piece!');
        }
    }
};

update();