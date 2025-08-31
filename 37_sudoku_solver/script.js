/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    solve(board);
};

function solve(board) {
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] === ".") {
                for (let d = 1; d <= 9; d++) {
                    let ch = String(d);
                    if (isValid(board, r, c, ch)) {
                        board[r][c] = ch;
                        if (solve(board)) return true;
                        board[r][c] = ".";
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function isValid(board, r, c, d) {
    for (let i = 0; i < 9; i++) {
        if (board[r][i] === d) return false;
        if (board[i][c] === d) return false;
        if (board[3 * Math.floor(r / 3) + Math.floor(i / 3)]
                [3 * Math.floor(c / 3) + (i % 3)] === d) return false;
    }
    return true;
}