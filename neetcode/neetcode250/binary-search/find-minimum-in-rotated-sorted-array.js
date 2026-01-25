class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;

        // If l < r then it means we've reached the lowest value in the array.
        while (l < r) {
            const m = Math.trunc((l + r) / 2);
            if (nums[m] > nums[r]) { // Pivot is on the left side. (right is ordered)
                l = m + 1;
                
            } else { // Pivot is on the right side. (left is ordered)
                r = m;
            }
        }

        return nums[l];
    }
}

const s = new Solution();
const ans = s.findMin([3, 4, 5, 6, 1, 2]);
console.log(ans);