class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let res = nums.length;

        let acum = 0;

        for (let i = 0; i < nums.length; i++) {
            const n_i = nums[i];

            if (n_i === val) {
                res--;
                continue;
            }

            nums[acum] = n_i
            acum++;
        }

        return res;
    }
}
