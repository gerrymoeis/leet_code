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
 * @return {boolean}
 */
var checkTree = function(root) {
    return root.val === root.left.val + root.right.val
};

const tests = [
    [10,4,6],
    [5,3,1]
]

for (const test of tests) {
    console.log(checkTree(test))
}