class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let r = 1;

        let res = 0;

        while (r < prices.length) {
            const profit = prices[r] - prices[l];
            res = Math.max(res, profit);
             
            const bull = prices[l];
            const bear = prices[r];

            if (bear < bull) l++;
            else r++;
        }

        return res;
    }
}
