class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};

        for (let str of strs) {
            const strHash = str.split('').sort().join('');

            if (map[strHash] == undefined) {
                map[strHash] = [str];
            } else {
                map[strHash].push(str);
            }
        }
        return Object.values(map);
    }
}