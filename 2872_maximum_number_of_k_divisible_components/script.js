/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} values
 * @param {number} k
 * @return {number}
 */
var maxKDivisibleComponents = function(n, edges, values, k) {
    const adj = Array.from({length: n}, () => []);

    for (let [a, b] of edges) {
        adj[a].push(b);
        adj[b].push(a);
    }

    let ans = 0;

    const dfs = (node, parent) => {
        let sum = values[node];
        for (let nxt of adj[node]) {
            if (nxt !== parent) sum += dfs(nxt, node);
        }
        if (sum % k === 0) ans++;
        return sum % k;
    };

    dfs(0, -1);
    return ans;
};