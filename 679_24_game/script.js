/**
 * @param {number[]} cards
 * @return {boolean}
 */
var judgePoint24 = function(cards) {
    const EPS = 1e-6;

    const dfs = (nums) => {
        if (nums.length === 1) return Math.abs(nums[0] - 24.0) < EPS;

        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                const a = nums[i], b = nums[j];
                const next = [];
                for (let k = 0; k < nums.length; k++) {
                    if (k !== i && k !== j) next.push(nums[k]);
                }
                const cand = [a + b, a - b, b - a, a * b];
                if (Math.abs(b) > EPS) cand.push(a / b);
                if (Math.abs(a) > EPS) cand.push(b / a);

                for (const c of cand) {
                    next.push(c);
                    if (dfs(next)) return true;
                    next.pop();
                }
            }
        }
        return false;
    };

    return dfs(cards.map(x => x * 1.0));
};
