class MinStack {
    constructor() {
        this.stack = new Array();
        this.minStack = new Array();
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);

        if (this.minStack.length === 0 || this.minStack[this.minStack.length - 1] > val) this.minStack[this.minStack.length] = val;
        else this.minStack[this.minStack.length] = this.minStack[this.minStack.length - 1];
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

// Main difference from a stack is that this one includes a ny function getMin which gets the smallest value in the stack. 
// To solve this we could search the smallest value in all of the stack using a loop O(n) or using this solution. O(1), which uses more memory
// to create a stack which keeps track of the smallest value by keeping it on the top on every insertion.
