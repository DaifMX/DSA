class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = new Array(nums.length * 2).fill(null);

        for (let i = 0; i < nums.length; i++) {
            const nums_i = nums[i];

            ans[i] = nums_i;
            ans[i + nums.length] = nums_i; 
        }

        return ans;
    }
}
