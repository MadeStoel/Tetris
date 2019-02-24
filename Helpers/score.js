class Score {
    constructor() {
        this.total = 0;
        this.multiplier = [1, 2, 4, 8];
    }

    add(lines, level) {
        this.total += 100 * this.multiplier[lines - 1] * level;
    }

    updateScore() {
        dom.updateScore(this.total);
    }
}