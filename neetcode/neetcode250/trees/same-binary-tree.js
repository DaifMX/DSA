class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if (p === null && q === null) return true;

        if ((!p && q) || (p && !q)) return false;

        if (p.val !== q.val) return false;

        return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);       
    }
}


// Test cases for isSameTree
// Helper to build tree from array (LeetCode style)
function buildTree(arr) {
    if (!arr.length) return null;
    let nodes = arr.map(val => val === null ? null : new TreeNode(val));
    let kids = nodes.slice(1);
    for (let i = 0, j = 0; i < nodes.length && j < kids.length; i++) {
        if (nodes[i]) {
            nodes[i].left = kids[j++] || null;
            if (j < kids.length) nodes[i].right = kids[j++] || null;
        }
    }
    return nodes[0];
}

// Test 1
let p1 = buildTree([4,7]);
let q1 = buildTree([4,null,7]);
console.log('Test 1:', new Solution().isSameTree(p1, q1)); // Expected: false

// Test 2
let p2 = buildTree([1,2,3]);
let q2 = buildTree([1,3,2]);
console.log('Test 2:', new Solution().isSameTree(p2, q2)); // Expected: false
