class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    isOperator(char) {
        return char === '+' || char === '-' || char === '/' || char === '*'; 
    }
    
    operate (x, y, operator) {
        x = parseInt(x);
        y = parseInt(y);

        switch (operator) {
            case '+':
                return x+y;
            case '-':
                return x-y;
            case '*':   
                return x*y;
            case '/':   
                return Math.trunc(x/y);
        }
    }

    evalRPN(tokens) {
        const stack = [];

        for (let i = 0; i < tokens.length; i++) {
            if (!this.isOperator(tokens[i])) stack.push(tokens[i]);
            else {
                const b = stack.pop();
                const a = stack.pop();

                stack.push(this.operate(a, b, tokens[i]));
            }
        }

        return stack[0];
    }
}