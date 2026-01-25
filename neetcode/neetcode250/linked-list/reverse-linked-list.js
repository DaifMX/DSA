class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) { 
        if (head === null) return null;

        let curr = head;
        let temp = null

        while (curr !== null) {
            if (!temp) {
                const newCurr = curr.next;

                if (!newCurr) return curr;

                temp = curr;
                curr.next = null;
                curr = newCurr;
                continue;
            }
            
            const newCurr = curr.next;
            curr.next = temp;
            temp = curr;
            
            if (!newCurr) return curr;
            else curr = newCurr;
        }

        return res;
    }
}

// Create a test linked list: 1 -> 2 -> 3 -> 4 -> 5
const node5 = new ListNode(5);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

const s = new Solution();
const res = s.reverseList(node1);
console.log(res);