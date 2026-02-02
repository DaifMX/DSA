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
     * @return {number[]}
     */
    rightSideView(root) {
        const queue = [];
        const res = [];

        if (root) queue.push(root);

        while (queue.length) {
            const len = queue.length;
            let last = null;
            for (let i = 0; i < len; i++) {
                const curr = queue.shift();

                if (curr.left) queue.push(curr.left);

                if (curr.right) queue.push(curr.right);
                last = curr;
            }
            res.push(last.val);
        }

        return res;
    }
}