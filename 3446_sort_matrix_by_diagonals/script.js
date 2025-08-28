/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var sortMatrix = function(grid) {
    const diagonals = {};
    const n = grid.length;    
    for (let r=0; r < n; ++r) {
        for (let c=0; c < n; ++c) {
            if (!diagonals[r-c]) {
                diagonals[r-c] = [];
            }
            diagonals[r-c].push(grid[r][c]);
        }
    }

    for (const i in diagonals) {
        const dIndex = parseInt(i);
        if (dIndex >= 0) diagonals[dIndex].sort((a,b) => b-a);
        else diagonals[dIndex].sort((a,b) => a-b);
    }

    for (let r=0; r < n; ++r) {
        for (let c=0; c < n; ++c) {
            grid[r][c] = diagonals[r-c].shift();
        }
    }
    return grid;
};