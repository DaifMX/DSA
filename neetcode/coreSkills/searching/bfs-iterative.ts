class BFS_TreeNode {
    public value: number;

    public left: BFS_TreeNode | null;

    public right: BFS_TreeNode | null;

    constructor(value: number, left: BFS_TreeNode | null = null, right: BFS_TreeNode | null = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public bfs = (root: BFS_TreeNode | undefined | null) => {
        const queue: BFS_TreeNode[] = [];

        if (root) queue.push(root);

        let lvl = 0;
        while (queue.length) {
            const len = queue.length;
            for (let i = 0; i < len; i++) {
                const curr = queue.shift();
                console.log({ value: curr?.value, level: lvl });

                if (curr?.left) queue.push(curr.left);

                if (curr?.right) queue.push(curr.right)
            }
            lvl++
        }
    }
}


// Test case 1: Simple binary tree with values
//      1
//     / \
//    2   3
const root = new BFS_TreeNode(
    1,
    new BFS_TreeNode(2),
    new BFS_TreeNode(3)
);

const s = new Solution();

const res = s.bfs(root);