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

const defaultPieceBag = ['j', 'l', 's', 'z', 't', 'i', 'o'];
let currentPieceBag = [];
let nextPieceBag = [];

let currentPiece;

update = function (time = 0) {
    checkPieceBag();
    checkForActivePiece();

    const deltaTime = time - lastTime;

    //TODO refactor timer so it can be reset.
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

checkPieceBag = function () {
    if (currentPieceBag.length === 0) {
        if (nextPieceBag.length === 0) {
            nextPieceBag = shufflePieceBag(defaultPieceBag.slice());
            nextPieceBag = instantiatePieceBag(nextPieceBag);
        }

        currentPieceBag = nextPieceBag.slice();
        nextPieceBag = shufflePieceBag(defaultPieceBag.slice());
        nextPieceBag = instantiatePieceBag(nextPieceBag);
    }
};

instantiatePieceBag = function (pieceBag) {
    const result = [];
    for (const piece of pieceBag) {
        result.push(getNewPiece(piece));
    }

    return result;
};

shufflePieceBag = function (pieceBag) {
    let j, x;
    for (let i = pieceBag.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = pieceBag[i];
        pieceBag[i] = pieceBag[j];
        pieceBag[j] = x;
    }
    return pieceBag;

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

        currentPiece = currentPieceBag.shift();

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

getNewPiece = function (selectedPiece) {
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