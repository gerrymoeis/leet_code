/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var sortMatrix = function(grid) {
    const diagonals = grid.reduce((d, row, rowIndex) => {
        row.forEach((num, colIndex) => {
            if (!d[num]) {
                d[num] = [];
            }
            d[num].push([rowIndex, colIndex]);
        });
        return d;
    }, {});

    for (let r=0; r < grid.length; ++r) {
        for (let c=0; c < grid[0].length; ++c) {
            diagonals[r-c].push(grid[r][c]);
        }
    }

    for (i of diagonals) {
        diagonals[i].sort((a,b) => b-a);
    }

    for (let r=0; r < grid.length; ++r) {
        for (let c=0; c < grid[0].length; ++c) {
            grid[r][c] = diagonals[r-c].shift();
        }
    }
    return grid;
};