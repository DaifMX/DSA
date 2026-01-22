class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const res = [];

        const map = {};

        // Create the repetition array (bucket sort), the index represents the numbers of times a number appears. 
        // Hence the length of nums.length, a number can only appear as much times as the array size is.

        // The array is of arrays so if many numbers are repeated the same amount of times they don't overlap.
        const reps = Array.from({ length: nums.length + 1 }, () => []);

        for (const num of nums) {
            // Updating the reps on the reps map.
            map[num] = map[num] === undefined ? 1 : map[num] + 1;
        }

        for (const num in map) {
            // Setting nummber to the index of the reps.
            reps[map[num]].push(num);
        }

        for (let i = reps.length - 1; i > 0; i--) {
            for (const n of reps[i]) {
                res.push(n);
                if (res.length === k) return res;
            }
        }
    }
}
