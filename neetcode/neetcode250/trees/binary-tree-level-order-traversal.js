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

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        const queue = [];
        const res = [];

        if (root) queue.push(root);
        
        while(queue.length) {
            const queueLen = queue.length
            const currLevelNodes = [];
            for (let i = 0; i < queueLen; i++) {
                const curr = queue.shift();
                currLevelNodes.push(curr);

                if (curr.left) queue.push(curr.left);

                if (curr.right) queue.push(curr.right);
            }

            res.push(currLevelNodes);
        }

        return res;
    }
}