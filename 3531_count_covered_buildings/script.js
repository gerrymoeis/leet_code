/**
 * @param {number} n
 * @param {number[][]} buildings
 * @return {number}
 */
function lowerBound(arr, target) {
    let left = 0, right = arr.length;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < target) left = mid + 1;
        else right = mid;
    }
    return left;
}

var countCoveredBuildings = function(n, buildings) {
    
    const rowMap = new Map();
    const colMap = new Map();

    // Group buildings
    for (let [x, y] of buildings) {
        if (!rowMap.has(x)) rowMap.set(x, []);
        if (!colMap.has(y)) colMap.set(y, []);
        rowMap.get(x).push(y);
        colMap.get(y).push(x);
    }

    // Sort rows and columns
    for (let [key, val] of rowMap) rowMap.set(key, val.sort((a,b) => a-b));
    for (let [key, val] of colMap) colMap.set(key, val.sort((a,b) => a-b));

    let count = 0;

    for (let [x, y] of buildings) {
        const row = rowMap.get(x);
        const col = colMap.get(y);

        // LEFT/RIGHT using lower_bound
        const posRow = lowerBound(row, y);
        const left = posRow > 0;
        const right = posRow + 1 < row.length;

        // UP/DOWN using lower_bound
        const posCol = lowerBound(col, x);
        const up = posCol > 0;
        const down = posCol + 1 < col.length;

        if (left && right && up && down)
            count++;
    }

    return count;
};