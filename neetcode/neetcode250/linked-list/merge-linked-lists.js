class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const dummy = new ListNode();
        let curr = dummy;

        let currL1 = list1;
        let currL2 = list2;

        while (currL1 && currL2) {
            if (currL1.val <= currL2.val) {
                curr.next = currL1;
                currL1 = currL1.next;
            } else {
                curr.next = currL2;
                currL2 = currL2.next;
            }

            curr = curr.next;
        }

        while (currL1) {
            curr.next = currL1;
            curr = curr.next;
            currL1 = currL1.next;
        }

        while (currL2) {
            curr.next = currL2;
            curr = curr.next;
            currL2 = currL2.next;
        }

        return dummy.next;
    }
}




// Helper to create a linked list from array
function arrayToList(arr) {
    let dummy = new ListNode();
    let curr = dummy;
    for (let val of arr) {
        curr.next = new ListNode(val);
        curr = curr.next;
    }
    return dummy.next;
};

// Helper to convert linked list to array
function listToArray(head) {
    let arr = [];
    let curr = head;
    while (curr) {
        arr.push(curr.val);
        curr = curr.next;
    }
    return arr;
};

// Test case
const list1 = arrayToList([1, 2, 4]);
const list2 = arrayToList([1, 3, 5]);
const solution = new Solution();
const merged = solution.mergeTwoLists(list1, list2);
console.log('Merged list:', listToArray(merged)); // Should output [1,1,2,3,4,5]
