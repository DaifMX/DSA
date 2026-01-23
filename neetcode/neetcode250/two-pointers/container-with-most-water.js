class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;

        let maxVol = 0;

        while (l != r) {
            const maxHeight = Math.min(heights[l], heights[r]);
            maxVol = Math.max(maxVol, maxHeight  * (r - l));
            if (heights[l] <= heights[r]) l++;
            else r--;
        }

        return maxVol;
    }
}
