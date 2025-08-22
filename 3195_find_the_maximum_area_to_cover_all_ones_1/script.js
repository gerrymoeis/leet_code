/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function(grid) {
    let left = Infinity, right = -Infinity, top = Infinity, bottom = -Infinity;
    for (let i=0; i < grid.length; ++i) {
        for (let j=0; j < grid[0].length; ++j) {
            if (grid[i][j]) {
                if (j < left) {
                    left = j;
                }
                if (j > right) {
                    right = j;
                }
                if (i < top) {
                    top = i;
                }
                if (i > bottom) {
                    bottom = i;
                }
            }
        }
    }
    return (right-left+1) * (bottom-top+1);
};

var minimumArea = function(grid) {
    let left = Infinity, right = -Infinity, top = Infinity, bottom = -Infinity;
    for (let i=0; i < grid.length; ++i) {
        for (let j=0; j < grid[0].length; ++j) {
            if (grid[i][j]) {
                left = j < left ? j : left;
                right = j > right ? j : right;
                top = i < top ? i : top;
                bottom = i > bottom ? i : bottom;
            }
        }
    }
    return (right-left+1) * (bottom-top+1);
};

// Experiment
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function(grid) {
    let height = 0, width = 0;
    for (let i=0; i < grid.length; ++i) {
        for (let j=0; j < grid[0].length; ++j) {
            if (grid[i][j]) {
                if (width && height) {
                    height = i+1 > height ? i+1 : height;
                    width = j+1 > width ? j+1 : width;
                } else {
                    width = 1;
                    height = 1;
                }
            }
        }
    }
    return height * width;
};