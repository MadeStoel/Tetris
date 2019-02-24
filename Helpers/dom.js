class Dom {
    updateScore(total) {
        document.getElementById('score').innerText = "Total score: " + total;
    }

    updateLevel(level) {
        document.getElementById('level').innerText = "Level: " + level;
    }
}