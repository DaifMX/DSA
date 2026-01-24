class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = Array.from({ length: temperatures.length }, () => 0);

        const stack = [];

        for (let i = 0; i < temperatures.length; i++) {
            while(stack.length && stack[stack.length - 1][1] < temperatures[i]) {
                const pop = stack.pop();
                res[pop[0]] = i - pop[0];
            }

            stack.push([i, temperatures[i]]);
        }
        return res;
    }
}
