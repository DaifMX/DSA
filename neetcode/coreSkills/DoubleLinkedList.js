class Node {
    prev;

    next;

    value;

    constructor(value, prev, next) {
        this.value = value;
        this.prev = prev ?? null;
        this.next = next ?? null;
    }
}

class MyDeque {
    size;

    head;

    tail;

    constructor() {
        this.size = 0;
        this.head = new Node(-1);
        this.tail = new Node(-1);
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.size < 1 ? true : false;
    }

    /**
     * @param {number} value
     */
    append(value) {
        const newNode = new Node(value);

        if (!this.isEmpty()) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        const newNode = new Node(value);

        if (!this.isEmpty()) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;

        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.isEmpty()) return -1;

        const deletedVal = this.tail.value;
        this.tail = this.tail.prev
        
        if (this.tail) this.tail.next = null;

        if (this.isEmpty()) return -1;
        this.size--;

        return deletedVal;
    }
    /**
     * @return {number}
     */
    popleft() {
        if (this.isEmpty()) return -1;

        const deletedVal = this.head.value;
        this.head = this.head.next;
        
        if (this.head) this.head.prev = null;
        
        if (this.isEmpty()) return -1;
        this.size--;

        return deletedVal;
    }
}

const l = new MyDeque();

console.log(l.isEmpty());
l.append(10);
console.log(l);
console.log(l.isEmpty());
l.appendleft(20);
console.log(l);
console.log(l.popleft());
console.log(l);
console.log(l.pop());
console.log(l.pop());