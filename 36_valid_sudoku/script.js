/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = new Array(9).fill(0);
    const cols = new Array(9).fill(0);
    const boxes = new Array(9).fill(0);
    for (let r=0; r < board.length; ++r) {
        for (let c=0; c < board[0].length; ++c) {
            const num = board[r][c];
            if (num !== ".") {
                const d = num.charCodeAt(0) - 49;
                const mask = 1 << d;
                const b = ((r / 3) | 0) * 3 + ((c / 3) | 0);
                if ((rows[r] & mask) || (cols[c] & mask) || (boxes[b] & mask)) return false;

                rows[r] |= mask;
                cols[c] |= mask;
                boxes[b] |= mask;
            }
        }
    }
    return true;
};