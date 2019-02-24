const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const draw = new Draw();
const score = new Score();
const dom = new Dom();

let arena;

let lastTime = 0;
let gameSpeed = 1100;
let gameLevel;
const maxLevel = 9;

let pieceActive = false;

let gameOver = false;
let totalLines;

const pieceBag = ['j', 'l', 's', 'z', 't', 'i', 'o'];
let currentPieceBag = [];
let currentPiece;

update = function (time = 0) {
    checkForActivePiece();

    const deltaTime = time - lastTime;
    if (deltaTime > (gameSpeed - (gameLevel * 100))) {

        arena.checkCollision(currentPiece);
        currentPiece.yPos++;

        arena.update(currentPiece);
        draw.arena(arena);

        lastTime = time;
    }


    if (!gameOver) {
        requestAnimationFrame(update);
    } else {
        console.log('game over!');
    }
};

checkForActivePiece = function () {
    if (!pieceActive) {
        const completedRows = arena.checkForCompletedRows();

        if (completedRows > 0) {
            addLinesCleared(completedRows);

            score.add(completedRows, gameLevel);
            score.updateScore();
        }

        gameOver = arena.checkForGameOver();

        currentPiece = getNewPiece();

        arena.update(currentPiece);

        draw.arena(arena);

        pieceActive = true;
    }
};

addLinesCleared = function (completedRows) {
    totalLines += completedRows;

    if (gameLevel < maxLevel) {
        gameLevel = Math.floor(totalLines / 10) + 1;

        dom.updateLevel(gameLevel);
    }
};

getNewPiece = function () {
    if (currentPieceBag.length === 0) {
        currentPieceBag = pieceBag.slice();
    }

    const randomNum = Math.floor(Math.random() * currentPieceBag.length);
    selectedPiece = currentPieceBag.splice(randomNum, 1)[0];

    switch (selectedPiece) {
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

newGame = function () {
    arena = new Arena();
    pieceActive = false;
    gameOver = false;

    gameLevel = 1;
    totalLines = 0;

    score.total = 0;
    score.updateScore();

    dom.updateLevel(gameLevel);

    update();
};

newGame();