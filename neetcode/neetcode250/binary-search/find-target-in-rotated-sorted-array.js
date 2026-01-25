class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(arr, target) {
        let l = 0;
        let r = arr.length - 1;

        while (l <= r) {
            const m = Math.trunc((l + r) / 2);
            const curr = arr[m];

            if (curr === target) return m;

            if (arr[l] <= arr[m]) {
                if (target > curr || arr[l] > target) l = m + 1; 
                else r = m - 1; 

            } else {
                if (target < curr || arr[r] < target) r = m - 1;
                else l = m + 1;
            }
        }
        return -1;
    }
}