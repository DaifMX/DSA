class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    // IN [1,2,4,6]
    // pre -> [1,2,8,24]
    // post -> [48,48,24,6]
    // OUT [48,24,12,8]
    productExceptSelf(nums) {
        const res = new Array(nums.length);

        // Building pre in res
        let acum = 1;
        for (let i = 0; i < nums.length; i++) {
            res[i] = acum;
            acum *= nums[i];
        }

        // Building final result with post
        acum = 1;
        // [1,1,2,8] <-res at first iteration.
        for (let i = nums.length - 1; i >= 0; i--) {
            res[i] *= acum;
            acum *= nums[i];
        }

        return res;
    }
}

const s = new Solution().productExceptSelf([1, 2, 4, 6]);

console.log(s);