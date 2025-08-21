/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function(mat) {
    let count = 0;
    const height = new Array(mat[0].length);
    for (let i=0; i < mat.length; ++i) {
        for (let j=0; j < mat[0].length; ++j) {
            if (mat[i][j]) height[j] = (height[j] ?? 0) + 1;
            else height[j] = 0;
        }

        const stack = [];
        let rowSum = 0;
        for (let j=0; j < mat[0].length; ++j) {
            let accumulated = 1;
            while (stack.length > 0 && stack[stack.length-1].h >= height[j]) {
                const popped = stack.pop();
                rowSum -= popped.h * popped.c;
                accumulated += popped.c;
            }
            stack.push({ h: height[j], c: accumulated });
            rowSum += height[j] * accumulated;
            count += rowSum;
        }
    }
    return count;
};