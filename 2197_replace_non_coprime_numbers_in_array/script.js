/**
 * @param {number[]} nums
 * @return {number[]}
 */
var replaceNonCoprimes = function(nums) {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const lcm = (a, b) => (a / gcd(a, b)) * b; // safer to avoid overflow
    
    const stack = [];
    for (let num of nums) {
        stack.push(num);
        while (stack.length > 1) {
            let a = stack[stack.length - 2];
            let b = stack[stack.length - 1];
            let g = gcd(a, b);
            if (g === 1) break; // coprime, stop merging
            stack.pop();
            stack.pop();
            stack.push(lcm(a, b));
        }
    }
    return stack;
};