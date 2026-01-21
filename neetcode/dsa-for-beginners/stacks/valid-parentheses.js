class Solution {
    /**
     * @param {string // char} c
     * @return {boolean}
     */
    isOpen(c) { return c === '(' || c === '{' || c === '[' };

    /**
     * @param {string // char} c
     * @return {boolean}
     */
    isClosed(c) { return c === ')' || c === '}' || c === ']' };

    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        const mp = {
            '}': '{',
            ']': '[',
            ')': '(',
        };

        for (let i = 0; i < s.length; i++) {
            const s_i = s[i];
            let peak;

            if (this.isOpen(s_i)) {
                stack.push(s_i);

            } else if (this.isClosed(s_i)) {
                peak = stack[stack.length - 1];

                if (peak === undefined) return false;

                if (mp[s_i] === peak) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }

        return !stack.length;
    }
}

const s = new Solution().isValid('[)]');
console.log(s)