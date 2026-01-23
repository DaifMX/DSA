class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const arr = s.split('');

        let l = 0;
        let r = 0;

        let acum = 0;
        let maxSubStr = 0;

        let mp = {}

        while (r < arr.length) {
            if (mp[arr[r]] === undefined) {
                mp[arr[r]] = true;
                acum++;
            } else {
                while (arr[l] != arr[r]) {
                    delete mp[arr[l]];
                    acum--;
                    l++;
                }
                l++;
            }

            r++;

            maxSubStr = Math.max(maxSubStr, acum);
        }

        return maxSubStr;
    }
}


const s = new Solution();
console.log(s.lengthOfLongestSubstring('dvdf'));