class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    let curr = root;

    if (curr == null) return null;

    if (curr.val === val) return curr;

    if (!curr.left && !curr.right) return null;

    if (curr.val > val) return searchBST(curr.left, val);
    else return searchBST(curr.right, val);
};

const node1 = new TreeNode(1);
const node3 = new TreeNode(3);
const node2 = new TreeNode(2, node1, node3);
const node7 = new TreeNode(7);
const root = new TreeNode(4, node2, node7);

console.log(searchBST(root, 2));