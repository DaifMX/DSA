class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length -1;

        while(l <= r) {
            const m = Math.trunc((l + r) / 2);

            if (nums[m] === target) {
                return m;
            }

            if (target > nums[m]) l = m + 1;
            else r = m - 1;

        }

        return -1
    }
}