class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const ctr = {};

        for (const num of nums) {
            if (!ctr[num]) ctr[num] = 1;
            else ctr[num]++;

            if (ctr[num] > (nums.length/2)) return num;
        }
    }
}