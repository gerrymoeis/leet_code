/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    let maxArea = 0;

    const area = (a, b, c) => {
        return Math.abs(
            a[0]*(b[1]-c[1]) +
            b[0]*(c[1]-a[1]) +
            c[0]*(a[1]-b[1])
        ) / 2;
    };

    for (let i = 0; i < points.length; i++) {
        for (let j = i+1; j < points.length; j++) {
            for (let k = j+1; k < points.length; k++) {
                maxArea = Math.max(maxArea, area(points[i], points[j], points[k]));
            }
        }
    }
    return maxArea;
};


/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    // Cross product helper
    const cross = (o, a, b) => (a[0]-o[0])*(b[1]-o[1]) - (a[1]-o[1])*(b[0]-o[0]);

    // 1. Build Convex Hull (Monotone Chain)
    points.sort((a, b) => a[0] === b[0] ? a[1]-b[1] : a[0]-b[0]);
    let lower = [], upper = [];
    for (let p of points) {
        while (lower.length >= 2 && cross(lower[lower.length-2], lower[lower.length-1], p) <= 0) {
            lower.pop();
        }
        lower.push(p);
    }
    for (let i = points.length-1; i >= 0; i--) {
        let p = points[i];
        while (upper.length >= 2 && cross(upper[upper.length-2], upper[upper.length-1], p) <= 0) {
            upper.pop();
        }
        upper.push(p);
    }
    const hull = lower.slice(0, -1).concat(upper.slice(0, -1)); // convex hull

    // 2. Compute max area triangle from hull using rotating calipers
    const area = (a, b, c) =>
        Math.abs(a[0]*(b[1]-c[1]) + b[0]*(c[1]-a[1]) + c[0]*(a[1]-b[1])) / 2;

    let h = hull.length;
    let maxArea = 0;

    for (let i = 0; i < h; i++) {
        for (let j = i+1; j < h; j++) {
            let k = (j+1) % h;
            while (true) {
                let curr = area(hull[i], hull[j], hull[k]);
                let next = area(hull[i], hull[j], hull[(k+1)%h]);
                if (next > curr) k = (k+1) % h;
                else break;
            }
            maxArea = Math.max(maxArea, area(hull[i], hull[j], hull[k]));
        }
    }

    return maxArea;
};