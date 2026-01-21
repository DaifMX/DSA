class Stack {
    // LIFO - Last In, First Out
    constructor() {
        this.stack = new Array();
    }

    push (n) {
        this.stack.push(n);
    };


    pop () {
        this.stack.pop();
    };

    peek () {
        return this.stack[this.stack.length - 1];
    };
};


const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
console.log(s);
s.pop();
s.pop();
console.log(s);
s.push(10);
console.log(s.peek());