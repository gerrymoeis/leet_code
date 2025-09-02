/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfPairs = function(points) {
    points.sort((a,b) => {
        if (a[0] === b[0]) return b[1]-a[1];
        return a[0]-b[0];
    });
    let count = 0;
    for (let i=0; i < points.length; ++i) {
        const upperY = points[i][1];
        let lowerYLimit = Number.MIN_SAFE_INTEGER;
        for (let j=i+1; j < points.length; ++j) {
            const currentY = points[j][1];
            if (currentY <= upperY && currentY > lowerYLimit) {
                count++;
                lowerYLimit = currentY;
                if (currentY === upperY) break;
            }
        }
    }
    return count;
};