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
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
    function dfs(node) {
        if (!node) return { height: 0, node: null };
        
        const left = dfs(node.left);
        const right = dfs(node.right);
        
        if (left.height > right.height) {
            return { height: left.height + 1, node: left.node };
        } else if (right.height > left.height) {
            return { height: right.height + 1, node: right.node };
        } else {
            return { height: left.height + 1, node: node };
        }
    }
    
    return dfs(root).node;
};