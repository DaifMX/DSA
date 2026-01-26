class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let currPtr = head;
        let slowPtr = head;

        let skip = true;
        let i = 0;
        
        while (currPtr) {
            currPtr = currPtr.next;
            if (skip === false) slowPtr = slowPtr.next;

            skip = !skip;
            i++;

            if (currPtr === slowPtr) return true;

            if (i === 20) break;
        }

        return false;
    }
}

// Test case: 1->2->3->4->2 (cycle)
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2;

const solution = new Solution();
console.log('Has cycle (should be true):', solution.hasCycle(node1));