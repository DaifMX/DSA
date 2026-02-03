class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let maxLen = 0;
        let len = 1;    

        const numsSet = new Set(nums);

        numsSet.forEach((num) => {
            if (!numsSet.has(num - 1)) {
                
                let curr = num;
                while(numsSet.has(curr + 1)) {
                    len++
                    curr++;
                }
                maxLen = Math.max(len, maxLen);
                len = 1;
            }
        });

        return maxLen;
    }
}
