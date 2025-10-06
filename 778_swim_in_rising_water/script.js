/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
    const n = grid.length;
    const dirs = [[1,0], [-1,0], [0,1], [0,-1]];

    function canReach(t) {
        const visited = Array.from({ length: n }, () => Array(n).fill(false));

        function dfs(x, y) {
            if (x === n - 1 && y === n - 1) return true;
            visited[x][y] = true;

            for (const [dx, dy] of dirs) {
                const nx = x + dx, ny = y + dy;
                if (
                    nx >= 0 && ny >= 0 && nx < n && ny < n &&
                    !visited[nx][ny] && grid[nx][ny] <= t
                ) {
                    if (dfs(nx, ny)) return true;
                }
            }
            return false;
        }

        return grid[0][0] <= t && dfs(0, 0);
    }

    let left = Math.max(grid[0][0], grid[n-1][n-1]);
    let right = n * n - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (canReach(mid)) right = mid;
        else left = mid + 1;
    }

    return left;
};