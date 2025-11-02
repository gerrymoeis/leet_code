/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function(m, n, guards, walls) {
    const grid = Array.from({ length: m }, () => Array(n).fill(0));

    for (const [r, c] of walls)
        grid[r][c] = 1;
    for (const [r, c] of guards)
        grid[r][c] = 1;

    for (const [r, c] of guards) {
        for (let i = r - 1; i >= 0 && grid[i][c] !== 1; i--) 
            grid[i][c] = 2;
        for (let i = r + 1; i < m && grid[i][c] !== 1; i++) 
            grid[i][c] = 2;
        for (let j = c - 1; j >= 0 && grid[r][j] !== 1; j--) 
            grid[r][j] = 2;
        for (let j = c + 1; j < n && grid[r][j] !== 1; j++) 
            grid[r][j] = 2;
    }

    let unguarded = 0;
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++)
            if (grid[i][j] === 0)
                unguarded++;

    return unguarded;
};