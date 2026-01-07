/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxProduct = function(root) {
    const MOD = 1000000007;
    let total = 0, best = 0;

    const sum = (node) => {
        if (!node) return 0;
        return node.val + sum(node.left) + sum(node.right);
    };

    total = sum(root);

    const dfs = (node) => {
        if (!node) return 0;
        const s = node.val + dfs(node.left) + dfs(node.right);
        best = Math.max(best, s * (total - s));
        return s;
    };

    dfs(root);
    return best % MOD;
};