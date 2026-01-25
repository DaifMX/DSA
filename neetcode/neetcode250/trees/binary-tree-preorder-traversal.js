/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    preorderTraversal(root) {
        const res = [];

        const traverse = (root) => {
            if (!root) return;

            res.push(root.val);
            if (root.left) traverse(root.left);
            if (root.right) traverse(root.right);
        };

        traverse(root);

        return res;

    }
}
