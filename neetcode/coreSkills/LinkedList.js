class ListNode {
    value;

    next;

    constructor(value, next) {
        this.value = value;
        this.next = next ?? null;
    }
}

class LinkedList {
    head;

    tail;

    size;

    constructor() {
        this.head = new ListNode(-1);
        this.tail = this.head;
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        // If index out of bound
        if (index >= this.size) return -1;

        let node = this.head;

        // If index 0, for doesn't run and returns head.
        for (let i = 0; i < index; i++) {
            node = node.next;
        }

        return node.value;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let node;

        if (this.size) {
            node = new ListNode(val, this.head);
        } else {
            node = new ListNode(val);
            this.tail = node;
        }

        this.head = node;
        this.size += 1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const node = new ListNode(val);

        if (!this.size) this.head = node;

        this.tail.next = node;
        this.tail = node;
        this.size += 1;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let node = this.head;

        if (index >= this.size) return false;

        if (index === 0) {
            this.head = this.head.next;
            this.size--;
            return true;
        }
 
        for (let i = 0; i < index - 1; i ++) {
            node = node.next;
        }

        if (node) {
            const nextNext = node.next.next;
            if (!nextNext) this.tail = node; 
            
            node.next = nextNext;
            this.size--;
            return true;
        }

        return false;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        const nodes = [];
        let currNode = this.head;
        for (let i = 0; i < this.size; i++) {
            nodes.push(currNode.value);
            currNode = currNode.next;
        }

        return nodes;
    }
}